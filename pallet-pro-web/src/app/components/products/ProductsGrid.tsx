import { ProductCard } from './ProductCard'

interface Product {
  title: string
  size: string
  price: string
  badge: 'new' | 'used' | 'custom'
  image?: string
  wide?: boolean
}

interface ProductsGridProps {
  items: Product[]
}

export function ProductsGrid({ items }: ProductsGridProps) {
  return (
    <div className="container mx-auto px-6 py-10">
    <div className="grid grid-cols-2 gap-4 items-stretch sm:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.title}
          className={`${item.wide ? 'col-span-2' : ''} h-full`}
        >
          <ProductCard {...item} />
        </div>
      ))}
    </div>
    </div>
  )
}