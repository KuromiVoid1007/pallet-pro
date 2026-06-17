import {ProductsGrid} from '@/app/components/products/ProductsGrid'
import { materials } from '@/app/data/materials'

export default function MaterialPage() {
  return (
    <div>
      <ProductsGrid items={materials} />
    </div>
  );
}
