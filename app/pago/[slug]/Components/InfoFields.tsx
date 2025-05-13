const InfoFields = () => {
  const inputClass =
    "border border-gray-300 rounded px-3 py-2 flex-1 text-gray-600 text-md bg-white";

  return (
    <div className="space-y-6">
      {/* Información de contacto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          placeholder="Nombres"
          type="text"
          className={inputClass}
          required
        />
        <input
          placeholder="Apellidos"
          type="text"
          className={inputClass}
          required
        />
        <input
          placeholder="Correo electrónico"
          type="email"
          className={`${inputClass} md:col-span-2`}
          required
        />
        <input
          placeholder="Celular"
          type="text"
          className={`${inputClass} md:col-span-2`}
          required
        />
        <input
          placeholder="País"
          type="text"
          className={`${inputClass} md:col-span-2`}
          required
        />
      </div>

      {/* Datos de identificación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select className={inputClass} required>
          <option value="">Tipo de identificación</option>
          <option value="dni">DNI</option>
          <option value="pasaporte">Pasaporte</option>
        </select>
        <input
          placeholder="Número de identificación"
          type="text"
          className={inputClass}
          required
        />
      </div>
    </div>
  );
};

export default InfoFields;
