"use client";

interface Orden {
  userData: {
    nombres: string;
    apellidos: string;
    correo: string;
    prefijo: string;
    celular: number;
    pais: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
  };
  tours: any[];
  total: string;
  createdAt: string;
  status: string;
  userId: string;
}

interface OrderDetailsModalProps {
  orden: Orden | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderDetailsModal({ orden, isOpen, onClose }: OrderDetailsModalProps) {
  if (!isOpen || !orden) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Detalles de la Orden</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Información del Cliente */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-3 text-blue-600">Información del Cliente</h3>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Nombre completo:</span>
                <p>{orden.userData.nombres} {orden.userData.apellidos}</p>
              </div>
              <div>
                <span className="font-medium">Correo electrónico:</span>
                <p>{orden.userData.correo}</p>
              </div>
              <div>
                <span className="font-medium">Teléfono:</span>
                <p>+{orden.userData.prefijo} {orden.userData.celular}</p>
              </div>
              <div>
                <span className="font-medium">País:</span>
                <p>{orden.userData.pais}</p>
              </div>
              <div>
                <span className="font-medium">Identificación:</span>
                <p>{orden.userData.tipoIdentificacion.toUpperCase()}: {orden.userData.numeroIdentificacion}</p>
              </div>
              <div>
                <span className="font-medium">ID de Usuario:</span>
                <p className="text-sm text-gray-600">{orden.userId}</p>
              </div>
            </div>
          </div>

          {/* Información de la Orden */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-lg mb-3 text-green-600">Información de la Orden</h3>
            <div className="space-y-2">
              <div>
                <span className="font-medium">Estado:</span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium ${
                  orden.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {orden.status === 'completed' ? 'Completada' : 'Pendiente'}
                </span>
              </div>
              <div>
                <span className="font-medium">Total:</span>
                <p className="text-lg font-bold text-green-600">S/ {orden.total}</p>
              </div>
              <div>
                <span className="font-medium">Fecha de creación:</span>
                <p>{new Date(orden.createdAt).toLocaleString('es-PE')}</p>
              </div>
              <div>
                <span className="font-medium">Cantidad de tours:</span>
                <p>{orden.tours.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Tours */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-3 text-purple-600">Tours Reservados</h3>
          <div className="bg-white border rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Tour</th>
                  <th className="px-4 py-2 text-center">Cantidad</th>
                  <th className="px-4 py-2 text-center">Precio Unitario</th>
                  <th className="px-4 py-2 text-center">Subtotal</th>
                  <th className="px-4 py-2 text-center">Fecha</th>
                  <th className="px-4 py-2 text-center">Hora</th>
                  <th className="px-4 py-2 text-center">Idioma</th>
                </tr>
              </thead>
              <tbody>
                {orden.tours.map((tour, index) => (
                  <tr key={index} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">
                      <div className="font-medium">{tour.title}</div>
                      <div className="text-sm text-gray-600">{tour.location}</div>
                    </td>
                    <td className="px-4 py-2 text-center">{tour.quantity}</td>
                    <td className="px-4 py-2 text-center">S/ {tour.price}</td>
                    <td className="px-4 py-2 text-center font-medium">S/ {(tour.price * tour.quantity).toFixed(2)}</td>
                    <td className="px-4 py-2 text-center">{new Date(tour.date).toLocaleDateString('es-PE')}</td>
                    <td className="px-4 py-2 text-center">{tour.hour}</td>
                    <td className="px-4 py-2 text-center">{tour.language}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
} 