import React from "react";
import CheckoutForm from "./CheckoutForm";
import ShoppingDetails from "./ShoppingDetails";
import CartNotice from "./CartNotice";

function CheckoutPage() {
  return (
    <div className="px-6 pt-2 pb-6 bg-gray-50">
      {/* Notificación superior */}
      <CartNotice tourName="Caño Cristales River Trip" />

      {/* Contenido principal en dos columnas */}
      <div className="flex flex-col md:flex-row gap-5">
        {/* Detalles de compra: 3/5 */}
        <div className="w-full md:w-3/5">
          <ShoppingDetails />
        </div>

        {/* Formulario de pago: 2/5 */}
        <div className="w-full md:w-2/5">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
