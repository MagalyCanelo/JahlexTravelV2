export default function PagoError() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-red-600 mb-4">¡Pago no realizado!</h1>
      <p className="text-lg text-gray-700 mb-2">Ocurrió un error al procesar tu pago o fue rechazado.</p>
      <p className="text-gray-500">Por favor, intenta nuevamente o utiliza otro método de pago.</p>
    </div>
  );
} 