import InfoFields from "./InfoFields";
import PaymentMethod from "./PaymentMethod";

const CheckoutForm = () => {
  return (
    <form className="bg-white text-black p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Información del contacto</h2>
      <InfoFields />
      <p className="mt-4 font-medium text-sm">
        Monto a pagar: <span className="text-orange-600 font-bold">$0.00</span>
      </p>
      <PaymentMethod />
      <button
        type="submit"
        className="mt-6 w-full bg-amber-700 hover:bg-amber-800 text-white py-2 rounded"
      >
        Completar mi pedido
      </button>
    </form>
  );
};

export default CheckoutForm;
