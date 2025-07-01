import { db } from "@/app/config/config";
import {
  BaseTour,
  BaseTourExtended,
  ShoppingCarTour,
  TourReview,
} from "@/app/interface/Tour";
import { User } from "@clerk/nextjs/server";
import {
  arrayUnion,
  collection,
  collectionGroup,
  doc,
  documentId,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

export async function addTourToUserShoppingCar(
  tour: BaseTour,
  ammount: number,
  userId: string,
  price: number,
  date: string,
  hour: string,
  language: string
) {
  const ref = doc(db, `Carrito/${userId}`);
  try {
    const docData = {
      tours: arrayUnion({
        ...tour,
        quantity: ammount,
        price: price,
        date: date,
        hour: hour,
        language: language,
        addedAt: new Date().toISOString(),
      }),
    };
    await setDoc(ref, docData, { merge: true });
    return true;
  } catch (error) {
    console.error("Error adding tour to cart:", error);
    return false;
  }
}

export async function cleanTourFromUserShoppingCar(
  tour: BaseTour,
  userId: string
) {
  const ref = doc(db, `Carrito/${userId}`);
  try {
    const currentDoc = await getDoc(ref);
    let existingTours: BaseTourExtended[] = [];
    if (currentDoc.exists()) {
      existingTours = currentDoc.data().tours || [];
    }
    const updatedTours = existingTours.filter(
      (t: BaseTourExtended) => t.id !== tour.id
    );
    const docData = { tours: updatedTours };
    await setDoc(ref, docData, { merge: true });
    return updatedTours;
  } catch (error) {
    console.error("Error removing tour from cart:", error);
    return [] as BaseTourExtended[];
  }
}

export async function cleanUserShoppingCar(userId: string) {
  const ref = doc(db, `Carrito/${userId}`);
  try {
    const docData = {
      tours: [], // Reset tours to an empty array
    };
    await setDoc(ref, docData, { merge: true });
    return true;
  } catch (error) {
    console.error("Error cleaning shopping cart:", error);
    return false;
  }
}

export async function getUserShoppingCar(userId: string) {
  const ref = doc(db, `Carrito/${userId}`);
  try {
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return docSnap.data() as ShoppingCarTour;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting shopping cart:", error);
    return null;
  }
}

export async function createUserDoc(uid: string, role: string) {
  const ref = doc(db, `Users/${uid}`);
  try {
    // Check if user already exists
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      console.log("User already exists");
      return false;
    }

    const docData = {
      role,
      createdAt: new Date().toISOString(),
    };
    await setDoc(ref, docData);
    return true;
  } catch (error) {
    console.error("Error creating user document:", error);
    return false;
  }
}

export async function getTourComments(tourId: string) {
  const ref = doc(db, `tours/${tourId}/comments`);
  try {
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return docSnap.data() as TourReview[];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting tour comments:", error);
    return null;
  }
}

export async function addTourComment(
  comment: TourReview,
  tour: string,
  uid: string
) {
  const ref = doc(db, `tours/${tour}/comments/${uid}`);
  try {
    const docData = {
      ...comment,
    };
    await setDoc(ref, docData);
    return true;
  } catch (error) {
    console.error("Error adding tour comment:", error);
    return false;
  }
}

export async function getTours() {
  const ref = collection(db, "tours");
  try {
    const querySnapshot = await getDocs(ref);
    const tours: BaseTour[] = [];
    querySnapshot.forEach((doc) => {
      tours.push(doc.data() as BaseTour);
    });
    return tours;
  } catch (error) {
    console.error("Error getting tours:", error);
    return null;
  }
}

export async function getUserPurchases(userId: string) {
  const ref = collection(db, `Users/${userId}/purchases`);
  try {
    const querySnapshot = await getDocs(ref);
    if (querySnapshot.empty) {
      console.log("No purchases found for user");
      return null;
    }
    const purchases: any[] = [];
    querySnapshot.forEach((doc) => {
      purchases.push(doc.data());
    });
    return purchases;
  } catch (error) {
    console.error("Error getting user purchases:", error);
    return null;
  }
}

export async function getOneTour(tourId: string) {
  const ref = doc(db, `tours/${tourId}`);
  try {
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      return docSnap.data() as BaseTour;
    }
    return null;
  } catch (error) {
    console.error("Error getting tour:", error);
    return null;
  }
}

export async function createPurchase(
  userId: string,
  purchaseData: BaseTourExtended[],
  total: number,
  userData: {
    nombres: string;
    apellidos: string;
    correo: string;
    prefijo: string;
    celular: number;
  }
) {
  const ref = doc(db, `Users/${userData.correo}/purchases/${new Date().getTime()}`);
  try {
    await setDoc(ref, {
      tours: purchaseData,
      userData: userData,
      total: total.toFixed(2),
      createdAt: new Date().toISOString(),
      status: "completed",
    });
    // Limpiar el carrito después de la compra
    await cleanUserShoppingCar(userId);
    return true;
  } catch (error) {
    console.error("Error creating purchase:", error);
    return false;
  }
}

export async function getAllTourComments(tourId: string) {
  const ref = collection(db, `tours/${tourId}/comments`);
  try {
    const querySnapshot = await getDocs(ref);
    const comments: TourReview[] = [];
    querySnapshot.forEach((doc) => {
      comments.push(doc.data() as TourReview);
    });
    return comments;
  } catch (error) {
    console.error("Error getting tour comments:", error);
    return [];
  }
}

export async function getUserComments(username: string) {
  try {
    const commentsRef = collectionGroup(db, "comments");
    const q = query(commentsRef, where(documentId(), "==", username));
    const querySnapshot = await getDocs(q);

    const comments: TourReview[] = [];
    querySnapshot.forEach((doc) => {
      comments.push(doc.data() as TourReview);
    });
    return comments;
  } catch (error) {
    console.error("Error getting user comments:", error);
    return [];
  }
}

export async function addCliente(clienteData: any) {
  try {
    const ref = doc(collection(db, "cliente")); // genera un id automático
    await setDoc(ref, {
      ...clienteData,
      createdAt: new Date().toISOString(),
    });
    return true;
  } catch (error) {
    console.error("Error agregando cliente:", error);
    return false;
  }
}
