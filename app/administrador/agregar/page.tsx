import TurForm from "../components/TurForm";

function page() {
  return (
    <div className="bg-white w-full h-dvh p-4 grid grid-rows-12 grid-cols-12 text-black">
      <span className="row-span-1 col-span-12"></span>
      <span className="row-span-2 col-span-1"></span>
      <TurForm func="agregar" />
    </div>
  );
}

export default page;
