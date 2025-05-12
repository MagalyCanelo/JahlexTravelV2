const InfoFields = () => {
  return (
    <div className="space-y-6">
      {/* Información de contacto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="Nombre" className="input" required />
        <input placeholder="Apellido" className="input" required />
        <input
          placeholder="Correo electrónico"
          className="input md:col-span-2"
          type="email"
          required
        />
        <input
          placeholder="Teléfono de contacto"
          className="input md:col-span-2"
          required
        />
        <input
          placeholder="País o Región"
          className="input md:col-span-2"
          required
        />
      </div>

      {/* Datos de identificación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select className="input" required>
          <option value="">Tipo de identificación</option>
          <option value="dni">DNI</option>
          <option value="pasaporte">Pasaporte</option>
        </select>
        <input
          placeholder="Número de identificación"
          className="input"
          required
        />
        <input
          placeholder="Fecha de nacimiento"
          type="date"
          className="input md:col-span-2"
          required
        />
      </div>
    </div>
  );
};

export default InfoFields;
