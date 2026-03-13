import { AuthGuard } from '@/components/auth/AuthGuard';
import { TrackedProductList } from '@/components/tracking/TrackedProductList';

export default function TrackedPage() {
  return (
    <AuthGuard>
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold">Tracked Products</h1>
        <TrackedProductList />
      </main>
    </AuthGuard>
  );
}
