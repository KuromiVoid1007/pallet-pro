import { ProductCard } from '@/app/components/products/ProductCard'

export function ProductsGrid() {
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <ProductCard badge="new" />
        <ProductCard badge="used" />
        <ProductCard badge="custom" size="1200×800" />
        <ProductCard badge="new" size="800×600" />
      </div>
    </div>
  )
}