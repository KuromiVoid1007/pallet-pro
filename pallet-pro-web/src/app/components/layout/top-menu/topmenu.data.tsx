import { PagesConfig } from '@/app/config/pages.config'
import { Home, LucideIcon, ShoppingCart, Package, Repeat, Layers, Box } from 'lucide-react'

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
    title: 'Палллеты',
    icon: Package,
    href: PagesConfig.PALLETS,
  },
  {
    title: 'Ящики',
    icon: Box,
    href: PagesConfig.BOXES,
  },
  {
    title: 'Б/У паллеты',
    icon: Repeat,
    href: PagesConfig.USED_PALLETS,
  },
  {
    title: 'Материал',
    icon: Layers,
    href: PagesConfig.MATERIAL,
  },
  {
    title: 'Заказы',
    icon: ShoppingCart,
    href: PagesConfig.ORDERS,
  }
] as const
