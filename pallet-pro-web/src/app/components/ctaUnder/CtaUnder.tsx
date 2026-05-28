'use client'

import { useState } from 'react'

export default function CtaUnder() {
  const [type, setType] = useState<'new' | 'used'>('new')

  return (
    <section className="px-6 py-16">
      <div className="mx-auto container bg-black rounded-3xl px-12 py-14 flex items-start justify-between gap-12">

        {/* Left */}
        <div className="flex-1">
          <span className="inline-block text-xs text-white/40 border border-white/10 rounded-lg px-3 py-1 mb-4 tracking-wide">
            Расчёт заказа
          </span>
          <h2 className="text-3xl font-medium text-white leading-snug mb-3">
            Рассчитайте стоимость<br />под ваши параметры
          </h2>
          <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-8">
            Укажите тип, размеры и количество — менеджер свяжется с вами и подготовит предложение.
          </p>
          <div className="flex items-center gap-3 text-sm text-white/40">
            <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs">
              🚚
            </div>
            Доставка по всей России
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-3 min-w-[280px]">

          {/* Тип */}
          <div>
            <p className="text-xs text-white/30 tracking-wider mb-1.5">ТИП ПАЛЛЕТА</p>
            <div className="grid grid-cols-2 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              {(['new', 'used'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`py-3 text-sm transition-colors ${
                    type === t
                      ? 'bg-white text-black font-medium'
                      : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {t === 'new' ? 'Новый' : 'Б/У'}
                </button>
              ))}
            </div>
          </div>

          {/* Размеры */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'ДЛИНА (мм)', placeholder: '1200' },
              { label: 'ШИРИНА (мм)', placeholder: '1000' },
            ].map((f) => (
              <div key={f.label}>
                <p className="text-xs text-white/30 tracking-wider mb-1.5">{f.label}</p>
                <input
                  type="number"
                  placeholder={f.placeholder}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/30"
                />
              </div>
            ))}
          </div>

          {/* Количество */}
          <div>
            <p className="text-xs text-white/30 tracking-wider mb-1.5">КОЛИЧЕСТВО (шт)</p>
            <input
              type="number"
              placeholder="100"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-white/30"
            />
          </div>

          <hr className="border-white/10" />

          {/* ФИО */}
          <div>
            <p className="text-xs text-white/30 tracking-wider mb-1.5">ФИО</p>
            <input
              type="text"
              placeholder="Иванов Иван Иванович"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/30"
            />
          </div>

          {/* Контакт */}
          <div>
            <p className="text-xs text-white/30 tracking-wider mb-1.5">КОНТАКТ ДЛЯ СВЯЗИ</p>
            <input
              type="text"
              placeholder="Телефон или email"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-white/30"
            />
          </div>

          <button className="bg-white text-black rounded-xl py-3 text-sm font-medium hover:opacity-85 transition-opacity flex items-center justify-center gap-2">
            Рассчитать стоимость
          </button>
          <p className="text-xs text-white/20 text-center">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </div>

      </div>
    </section>
  )
}