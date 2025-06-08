import { db } from "@/app/config/config";
import {
  BaseTour,
  BaseTourExtended,
  ShoppingCarTour,
  TourReview,
} from "@/app/interface/Tour";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";

export async function addTourToUserShoppingCar(
  tour: BaseTour,
  ammount: number,
  userId: string,
  price: number,
  date: string,
  hour: string
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

export async function createUserDoc(email: string, role: string) {
  const ref = doc(db, `Users/${email}`);
  try {
    // Check if user already exists
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
      console.log("User already exists");
      return false;
    }

    const docData = {
      email,
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
  const ref = doc(db, `Tours/${tourId}/comments`);
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
  tourId: string,
  comment: string,
  username: string,
  userImage: string,
  qualification: number
) {
  const ref = doc(db, `Tours/${tourId}/comments/${username}`);
  try {
    const docData = {
      createdAt: new Date().toISOString(),
      image: userImage,
      username: username,
      opinion: comment,
      qualification: qualification,
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

export async function createPurchase(userId: string, purchaseData: any) {
  const ref = doc(db, `Users/${userId}/purchases/${new Date().getTime()}`);
  try {
    await setDoc(ref, {
      ...purchaseData,
      createdAt: new Date().toISOString(),
      status: "completed",
    });
    return true;
  } catch (error) {
    console.error("Error creating purchase:", error);
    return false;
  }
}
