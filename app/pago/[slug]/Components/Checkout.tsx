import CartNotice from "./CartNotice";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutPage() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <CartNotice tourName="7 días en Costa Rica – Clásico (Auto-conducido)" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Izquierda: Resumen de pedido */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4">Resumen del pedido</h2>
          {/* Aquí va la info del tour, imagen, duración, total, etc. */}
          <p>Duración: 5 días</p>
          <p>Pasajeros: 1 persona</p>
          <p>Total: $0.00</p>
          {/* Código de descuento */}
          <div className="mt-6">
            <label className="block mb-2">Código de descuento</label>
            <div className="flex gap-2">
              <input type="text" className="input flex-grow" />
              <button className="bg-amber-700 text-white px-4 py-2 rounded">
                Aplicar
              </button>
            </div>
          </div>
        </div>

        {/* Derecha: Formulario */}
        <CheckoutForm />
      </div>
    </div>
  );
}
