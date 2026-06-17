'use client'

import Link from 'next/link'

type BadgeType = 'new' | 'used' | 'custom'

const badgeConfig: Record<BadgeType, { label: string; className: string }> = {
  new: { label: 'Новый', className: 'bg-emerald-50 text-emerald-900' },
  used: { label: 'Б/У', className: 'bg-zinc-100 text-zinc-700' },
  custom: { label: 'Под заказ', className: 'bg-violet-50 text-violet-900' },
}

interface ProductCardProps {
  title?: string
  size?: string
  price?: string
  badge?: BadgeType
  image?: string
  wide?: boolean
}

export function ProductCard({
  title = 'Паллет',
  size = '1200×1000',
  price = 'Договорная',
  badge = 'new',
  image,
  wide = false,
}: ProductCardProps) {
  const b = badgeConfig[badge]
  const isCustom = badge === 'custom'

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors">
      <div
        className={`bg-zinc-100 flex items-center justify-center ${
          wide ? 'aspect-[2/1]' : 'aspect-square'
        }`}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-4xl text-zinc-300">📦</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <span
          className={`w-fit rounded-md px-2 py-0.5 text-xs font-medium ${b.className}`}
        >
          {b.label}
        </span>

        <div>
          <p className="text-[15px] font-medium text-black">{title}</p>
          <p className="text-xs text-zinc-500">{size}</p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm font-medium text-black">{price}</span>

          {isCustom ? (
            <Link
              href="/ctaunder"
              className="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition hover:opacity-80"
            >
              Заказать
            </Link>
          ) : (
            <button className="rounded-full bg-black px-4 py-1.5 text-sm font-medium text-white transition hover:opacity-80">
              Заказать
            </button>
          )}
        </div>
      </div>
    </div>
  )
}