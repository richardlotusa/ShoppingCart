export interface IProductType {
  id: number;
  sku: string;
  title: string; // "item001"
  availableSizes: string[];
  style: string;
  price: number;
  // description: string;
  // installments: number;
  // currencyId: string;
  // currencyFormat: string;
  // isFreeShipping: boolean;
  imgURL: string;
}

export interface ICartProductType extends IProductType {
  quantity: number;
}

export interface ICartTotalType {
  productQuantity: number;
  installments: number;
  totalPrice: number;
  currencyId: string;
  currencyFormat: string;
}
