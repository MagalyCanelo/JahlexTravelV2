import { db } from "@/app/config/config";
import { BaseTour } from "@/app/interface/Tour";
import { deleteField, doc, setDoc } from "firebase/firestore";

export async function addTourToUserShoppingCar(
  tour: BaseTour,
  ammount: number,
  userId: string
) {
  const ref = doc(db, `Carrito/${userId}`);
  try {
    const docData = {
      tours: {
        [tour.id]: {
          ...tour,
          quantity: ammount,
          addedAt: new Date().toISOString(),
        },
      },
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
    const docData = {
      tours: {
        [tour.id]: deleteField(),
      },
    };
    await setDoc(ref, docData, { merge: true });
    return true;
  } catch (error) {
    console.error("Error removing tour from cart:", error);
    return false;
  }
}

export async function cleanUserShoppingCar(userId: string) {
  const ref = doc(db, `Carrito/${userId}`);
  try {
    const docData = {
      tours: deleteField(),
    };
    await setDoc(ref, docData, { merge: true });
    return true;
  } catch (error) {
    console.error("Error cleaning shopping cart:", error);
    return false;
  }
}
