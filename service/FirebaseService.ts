import { db } from "@/app/config/config";
import {
  BaseTour,
  BaseTourExtended,
  ShoppingCarTour,
} from "@/app/interface/Tour";
import {
  arrayUnion,
  doc,
  getDoc,
  setDoc
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
