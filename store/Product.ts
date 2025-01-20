export interface Product {
  id: string | number;  // id hem string hem number olabilir // Firestore'dan gelen id'ler artık number
  name: string;
  price: number;
  rating: number;
  ratingCount: number;
  image: string;
  hoverImage: string;
  quantity: number; // Varsayılan olarak 0
  selected?: boolean; // İsteğe bağlı, varsayılan olarak false olabilir
}