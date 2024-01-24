type Product = {
  title: string;
  price: number;
};

const data: Product[] = [
  { title: "produto-1", price: 9.9 },
  { title: "produto-2", price: 68.9 },
  { title: "produto-3", price: 41.9 },
  { title: "produto-4", price: 88.9 },
];

export const Product = {
  getAll: (): Product[] => {
    return data;
  },
  getFromPriceAfter: (price: number): Product[] => {
    return data.filter((product) => product.price >= price);
  },
};
