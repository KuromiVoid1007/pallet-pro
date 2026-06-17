import { ProductsGrid } from '@/app/components/products/ProductsGrid'
import { boxes } from '@/app/data/boxes'

export default function BoxesPage() {
  return <ProductsGrid items={boxes} />
}