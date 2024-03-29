export default function getProducts(): Promise<Product[]> {
  return fetch("https://dummyjson.com/products?limit=10")
    .then((res) => res.json())
    .then((res) => res.products);
}
