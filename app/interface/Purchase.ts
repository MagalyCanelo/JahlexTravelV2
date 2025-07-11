export interface PurchaseOrder {
  userData: PurchaseUserData;
  tours: PurchaseTour[];
  total: string; // o number si prefieres
  createdAt: string;
  status: 'completed' | 'pending' | 'cancelled' | string;
}

export interface PurchaseUserData {
  nombres: string;
  apellidos: string;
  correo: string;
  prefijo: string;
  celular: string;
}

export interface PurchaseTour {
  title: string;
  quantity: number;
  price: number;
  date?: string;
  hour?: string;
  language?: string;

}
 