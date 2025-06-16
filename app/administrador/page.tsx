import ListaTours from "./GestionTours/lista/page";

function page() {
  return (
    <div className="bg-white w-full shadow-sm rounded-lg rounded-t-none p-4 grid grid-rows-12 grid-cols-12 text-black">
      <span className="row-span-2 col-span-12"></span>
      <span className="row-span-2 col-span-1"></span>
      <ListaTours />
    </div>
  );
}

export default page;
