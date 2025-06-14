"use server";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithCustomToken,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/config";
import { encriptPassword } from "@/service/SecurityServices";
import { useAuth } from "@clerk/nextjs";

export async function signInWithFirebase(email: string, password: string) {
  encriptPassword(password).then(async (encryptedPassword) => {
    console.log("Encrypted Password:", encryptedPassword);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        encryptedPassword
      );

      if (!userCredential.user.emailVerified) {
        await sendEmailVerification(userCredential.user, {
          url: process.env.NEXT_PUBLIC_URL || "http://localhost:3000",
          handleCodeInApp: true,
        });
        console.log("Verification email sent.");
      }

      const user = userCredential.user;
      return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        token: await user.getIdToken(),
        isAuthenticated: user.emailVerified,
      };
    } catch (error) {
      console.error("Error signing in with Firebase:", error);
      throw error;
    }
  });
}
