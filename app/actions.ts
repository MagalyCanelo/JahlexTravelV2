"use server";

import { redirect } from "next/navigation";
import { api } from "./api";
import { ShoppingCarTour } from "./interface/Tour";
import { randomUUID } from "crypto";

export async function add(
  cart: ShoppingCarTour,
  userId: string,
  email: string
) {
  "use server";
  const response = await api.message.submit(cart, userId!, email);
  const { url, id, orderData } = JSON.parse(response);

  console.log(orderData, id);
  redirect(url);
}
