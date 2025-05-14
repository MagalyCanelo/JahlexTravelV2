const InfoFields = () => {
  const inputClass =
    "border border-gray-300 rounded px-3 py-2 w-full text-gray-600 text-md bg-white";

  return (
    <div className="space-y-4">
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

        {/* Código de país + celular en una sola fila ocupando el ancho completo */}
        <div className="flex gap-2 md:col-span-2">
          <div className="relative w-24">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-md">
              +
            </span>
            <input
              type="text"
              placeholder="Prefijo"
              className="pl-5 pr-2 py-2 border border-gray-300 rounded w-full text-gray-600 text-md bg-white"
              required
            />
          </div>

          {/* Número de celular */}
          <input
            type="text"
            placeholder="Número de celular"
            className={inputClass}
            required
          />
        </div>

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
