'use client';
import { cn } from '@/app/lib/utils/cn'
import Link from 'next/link'
import { topMenu } from '@/app/components/layout/top-menu/topmenu.data'

export function TopMenu() {
	return (
		<>
		<div className='mx-5 mb-8'>
    <nav className="flex flex-wrap justify-center gap-3 overflow-x-auto px-2 py-2">
      {topMenu.map((menuItem) => (
        <Link 
          key={menuItem.title} 
          href={menuItem.href}
          className={cn(
            'flex gap-1 items-center transition-opacity hover:opacity-100 opacity-50 font-medium text-sm',
            topMenu.indexOf(menuItem) === 0 && 'opacity-100 text-teal-600'
          )}
        >
          {menuItem.icon && (
            <menuItem.icon 
              size={16} 
              style={{ marginRight: 4 }} 
            />
          )}

          <span>{menuItem.title}</span>
        </Link>
      ))}
    </nav>
		</div>
		</>
	)
}