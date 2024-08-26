export namespace StoreNP{
  export interface Item {
    id?: string;
    name: string;
    description: string;
    price: number;
    image?: string;
  }

  export interface Pedido{}
  export interface Carrito {
    items: Item[];
    total: number;
  }
}
