"use server";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/config";
import { encriptPassword } from "@/service/SecurityServices";

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

export async function logInWithFirebase(email: string, password: string) {
  const encryptedPassword = await encriptPassword(password).then(
    async (encryptedPassword) => {
      try {
        console.log("Encrypted Password:", encryptedPassword);
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          encryptedPassword
        );
        if (userCredential.user) {
          return {
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            displayName: userCredential.user.displayName,
            photoURL: userCredential.user.photoURL,
            token: userCredential.user.getIdToken(),
            isAuthenticated: userCredential.user.emailVerified,
          };
        }
        return null;
      } catch (error) {
        console.error("Error logging in with Firebase:", error);
        throw error;
      }
    }
  );
  return encryptedPassword;
}
