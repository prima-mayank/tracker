import { ProductDetail } from '@/components/product/ProductDetail';

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  return (
    <main className="container mx-auto px-4 py-8">
      <ProductDetail productId={params.id} />
    </main>
  );
}
