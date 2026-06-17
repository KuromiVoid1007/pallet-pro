import {ProductsGrid} from '@/app/components/products/ProductsGrid'
import { pallets } from '@/app/data/pallets'

export default function PalletsPage() {
  return (
    <div>
      <ProductsGrid items={pallets} />
    </div>
  );
}
