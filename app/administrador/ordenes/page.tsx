import { getAllOrders } from '@/service/FirebaseService';
import { useEffect, useState } from 'react';
import OrderDetailsModal from './OrderDetailsModal';

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

export default function ListaOrdenes() {
  const [ordenes, setOrdenes] = useState<Orden[]>([]);
  const [filteredOrdenes, setFilteredOrdenes] = useState<Orden[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedOrden, setSelectedOrden] = useState<Orden | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchOrdenes() {
      const data = await getAllOrders();
      // Ordenar por fecha más reciente
      data.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      setOrdenes(data as Orden[]);
      setFilteredOrdenes(data as Orden[]);
      setLoading(false);
    }
    fetchOrdenes();
  }, []);

  // Filtrar órdenes
  useEffect(() => {
    let filtered = ordenes;
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      filtered = filtered.filter(orden => 
        orden.userData.nombres.toLowerCase().includes(searchTerm.toLowerCase()) ||
        orden.userData.apellidos.toLowerCase().includes(searchTerm.toLowerCase()) ||
        orden.userData.correo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        orden.userData.numeroIdentificacion.includes(searchTerm)
      );
    }
    
    // Filtrar por estado
    if (statusFilter !== 'all') {
      filtered = filtered.filter(orden => orden.status === statusFilter);
    }
    
    setFilteredOrdenes(filtered);
  }, [ordenes, searchTerm, statusFilter]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Órdenes de Reserva</h1>
        <div className="text-sm text-gray-600">
          Total: {filteredOrdenes.length} órdenes
        </div>
      </div>

      {/* Controles de filtro y búsqueda */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar por nombre, correo o DNI..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="sm:w-48">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Todos los estados</option>
            <option value="completed">Completadas</option>
            <option value="pending">Pendientes</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2">Cargando órdenes...</span>
        </div>
      ) : filteredOrdenes.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No se encontraron órdenes con los filtros aplicados.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-2 border text-left">Cliente</th>
                <th className="px-4 py-2 border text-left">Contacto</th>
                <th className="px-4 py-2 border text-left">Identificación</th>
                <th className="px-4 py-2 border text-left">País</th>
                <th className="px-4 py-2 border text-left">Total</th>
                <th className="px-4 py-2 border text-left">Fecha</th>
                <th className="px-4 py-2 border text-left">Estado</th>
                <th className="px-4 py-2 border text-left">Tours</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrdenes.map((orden, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">
                    <div className="font-medium">{orden.userData.nombres} {orden.userData.apellidos}</div>
                    <div className="text-sm text-gray-500">ID: {orden.userId}</div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div>{orden.userData.correo}</div>
                    <div className="text-sm text-gray-500">+{orden.userData.prefijo} {orden.userData.celular}</div>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="text-sm">
                      <span className="font-medium">{orden.userData.tipoIdentificacion.toUpperCase()}:</span>
                    </div>
                    <div className="text-sm text-gray-600">{orden.userData.numeroIdentificacion}</div>
                  </td>
                  <td className="px-4 py-2 border">{orden.userData.pais}</td>
                  <td className="px-4 py-2 border font-medium">S/ {orden.total}</td>
                  <td className="px-4 py-2 border text-sm">{new Date(orden.createdAt).toLocaleString('es-PE')}</td>
                  <td className="px-4 py-2 border">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      orden.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {orden.status === 'completed' ? 'Completada' : 'Pendiente'}
                    </span>
                  </td>
                  <td className="px-4 py-2 border">
                    <div className="flex flex-col gap-2">
                      <ul className="list-disc pl-4 text-sm">
                        {orden.tours.map((tour, i) => (
                          <li key={i}>{tour.title} x{tour.quantity}</li>
                        ))}
                      </ul>
                      <button
                        onClick={() => {
                          setSelectedOrden(orden);
                          setIsModalOpen(true);
                        }}
                        className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition"
                      >
                        Ver Detalles
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal de detalles */}
      <OrderDetailsModal
        orden={selectedOrden}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedOrden(null);
        }}
      />
    </div>
  );
} 