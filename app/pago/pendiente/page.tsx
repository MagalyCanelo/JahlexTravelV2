export default function PagoPendiente() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold text-yellow-600 mb-4">Pago pendiente</h1>
      <p className="text-lg text-gray-700 mb-2">Tu pago está siendo procesado por Mercado Pago.</p>
      <p className="text-gray-500">Te notificaremos cuando se confirme el pago.</p>
    </div>
  );
} 