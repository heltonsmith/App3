export namespace HomeNP{
  export interface ArticuloI{
    title: string;
    description: string;
    image: {
      url: string;
      alt: string;
    }
    id?: string;
  }
}
