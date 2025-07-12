"use client"
import { useState } from "react";
import { addCliente } from "@/service/FirebaseService";
import { useUserStore } from "@/app/store/Usuario";

const InfoFields = ({setLoading, setUserData}:{setLoading: (loading: boolean) => void, setUserData: (userData: {
  nombres: string;
  apellidos: string;
  correo: string;
  prefijo: string;
  celular: number;
  pais: string;
  tipoIdentificacion: string;
  numeroIdentificacion: string;
}) => void}) => {
  const { user } = useUserStore();
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    prefijo: "",
    celular: "",
    pais: "",
    tipoIdentificacion: "",
    numeroIdentificacion: "",
  });
  const [mensaje, setMensaje] = useState("");
  const inputClass =
    "border border-gray-300 rounded px-3 py-2 w-full text-gray-600 text-md bg-white";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMensaje("");
    const exito = await addCliente({
      ...form,
      user: user.id!,
      celular: Number(form.celular),
    });
    setUserData({
      nombres: form.nombres,
      apellidos: form.apellidos,
      correo: form.correo,
      prefijo: form.prefijo,
      celular: Number(form.celular),
      pais: form.pais,
      tipoIdentificacion: form.tipoIdentificacion,
      numeroIdentificacion: form.numeroIdentificacion,
    });
    if (exito) {
      setMensaje("¡Datos enviados correctamente!");
      setForm({
        nombres: "",
        apellidos: "",
        correo: "",
        prefijo: "",
        celular: "",
        pais: "",
        tipoIdentificacion: "",
        numeroIdentificacion: "",
      });
      setLoading(false);
    } else {
      setMensaje("Ocurrió un error al enviar los datos.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Información de contacto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="nombres"
          placeholder="Nombres"
          type="text"
          className={inputClass}
          required
          value={form.nombres}
          onChange={handleChange}
        />
        <input
          name="apellidos"
          placeholder="Apellidos"
          type="text"
          className={inputClass}
          required
          value={form.apellidos}
          onChange={handleChange}
        />
        <input
          name="correo"
          placeholder="Correo electrónico"
          type="email"
          className={`${inputClass} md:col-span-2`}
          required
          value={form.correo}
          onChange={handleChange}
        />

        {/* Código de país + celular en una sola fila ocupando el ancho completo */}
        <div className="flex gap-2 md:col-span-2">
          <div className="relative w-24">
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-stone-500 text-md">
              +
            </span>
            <input
              name="prefijo"
              type="number"
              placeholder="Prefijo"
              className="pl-5 pr-2 py-2 border border-gray-300 rounded w-full text-gray-600 text-md bg-white"
              required
              value={form.prefijo}
              onChange={handleChange}
            />
          </div>

          {/* Número de celular */}
          <input
            name="celular"
            type="number"
            placeholder="Número de celular"
            className={inputClass}
            required
            value={form.celular}
            onChange={handleChange}
          />
        </div>

        <input
          name="pais"
          placeholder="País"
          type="text"
          className={`${inputClass} md:col-span-2`}
          required
          value={form.pais}
          onChange={handleChange}
        />
      </div>

      {/* Datos de identificación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          name="tipoIdentificacion"
          className={inputClass}
          required
          value={form.tipoIdentificacion}
          onChange={handleChange}
        >
          <option value="">Tipo de identificación</option>
          <option value="dni">DNI</option>
          <option value="pasaporte">Pasaporte</option>
        </select>
        <input
          name="numeroIdentificacion"
          placeholder="Número de identificación"
          type="text"
          className={inputClass}
          required
          value={form.numeroIdentificacion}
          onChange={handleChange}
        />
      </div>
      {mensaje && <div className="text-center text-green-600 font-semibold">{mensaje}</div>}
      <button
        type="submit"
        className="w-full bg-oliva-o text-white py-2 rounded hover:bg-oliva-o transition"
      >
        Enviar datos
      </button>
    </form>
  );
};

export default InfoFields;
