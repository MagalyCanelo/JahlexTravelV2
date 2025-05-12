const PaymentMethod = () => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-3">Método de pago</h2>
      <div className="border rounded-lg p-4 bg-white">
        <label className="block mb-2">
          <input type="radio" name="payment" defaultChecked /> PayPal
        </label>
        <label className="block mt-4">
          <input type="checkbox" required /> Acepto los términos y condiciones
        </label>
        <p className="text-xs text-gray-500 mt-1">
          Debes editar la página de “Términos y Condiciones” para reemplazar
          este contenido.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethod;
