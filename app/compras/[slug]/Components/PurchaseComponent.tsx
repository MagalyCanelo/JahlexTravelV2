import ActionButton from "@/app/Components/ActionButton";
import { BaseTourExtended } from "@/app/interface/Tour";
import React from "react";

function PurchaseComponent(props: BaseTourExtended) {
  const total = props.price * props.quantity;
  return (
    <tr className="border-b-2 border-stone-300 text-center">
      <td className="p-4">{props.title}</td>
      <td className="p-4">{props.price}</td>
      <td className="p-4">{props.quantity}</td>
      <td className="p-4">{total.toFixed(2)}</td>
      <td>
        <ActionButton title="Descargar comprobante" tipo="primary" type="button"/>
      </td>
    </tr>
  );
}

export default PurchaseComponent;
