import {ProductsGrid} from '@/app/components/products/ProductsGrid'
import { usedPallets } from '@/app/data/usedPallets'

export default function UsedPalletsPage() {
  return (
    <div>
      <ProductsGrid items={usedPallets} />
    </div>
  );
}
