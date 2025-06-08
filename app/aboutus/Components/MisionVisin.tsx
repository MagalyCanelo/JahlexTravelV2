const MisionVision = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between space-y-10 lg:space-y-0 lg:space-x-10 pt-5 pb-3 px-4 lg:px-6">
      {/* Misión */}
      <div className="flex-1 bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
        <div className="text-center mb-4">
          <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow">
            <h2 className="text-lg font-semibold">Nuestra Misión</h2>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-base">
          Ofrecer experiencias turísticas excepcionales que conecten a nuestros
          viajeros con la autenticidad y riqueza de Perú. Nos comprometemos a
          proporcionar servicios seguros, exclusivos y responsables, asegurando
          siempre la comodidad y bienestar de nuestros clientes. Trabajamos con
          pasión para hacer de cada viaje una experiencia inolvidable y
          transformadora.
        </p>
      </div>

      {/* Visión */}
      <div className="flex-1 bg-white p-6 rounded-xl shadow-sm hover:shadow-md">
        <div className="text-center mb-4">
          <div className="bg-oliva-c text-white rounded-full px-4 py-1 inline-block shadow">
            <h2 className="text-lg font-semibold">Nuestra Visión</h2>
          </div>
        </div>
        <p className="mt-4 text-gray-600 text-base">
          Consolidarnos como la agencia de viajes más destacada en Perú,
          reconocida por brindar experiencias únicas, sostenibles y
          responsables. Queremos ser líderes en la industria turística,
          estableciendo relaciones sólidas con nuestros clientes, basadas en
          confianza, calidad e innovación constante, para crear recuerdos
          memorables y duraderos.
        </p>
      </div>
    </div>
  );
};

export default MisionVision;
