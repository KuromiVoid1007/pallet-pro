import { PagesConfig } from '@/app/config/pages.config'
import { Home, LucideIcon, PackageSearch, ShoppingCart } from 'lucide-react'

export interface TopMenuItem {
  title: string;
  href: string;
  icon?: LucideIcon
} 

export const topMenu : TopMenuItem[] = [
  {
    title: 'Домой',
    icon: Home,
    href: PagesConfig.HOME,
  },
  {
    title: 'Продукты',
    icon: PackageSearch,
    href: PagesConfig.PRODUCTS,
  },
  {
    title: 'Заказы',
    icon: ShoppingCart,
    href: PagesConfig.ORDERS,
  }
] as const
