const CartNotice = ({ tourName }: { tourName: string }) => {
  return (
    <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded mb-4">
      <p>
        <strong>{tourName}</strong> se ha añadido a tu carrito.
        <button className="ml-4 text-sm underline text-green-700 hover:text-green-900">
          Ver carrito
        </button>
      </p>
    </div>
  );
};

export default CartNotice;
