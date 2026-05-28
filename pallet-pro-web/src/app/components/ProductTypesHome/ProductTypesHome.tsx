import Link from "next/link";

const types = [
  {
    icon: "♻",
    badge: "Б/У",
    badgeClass: "bg-zinc-100 text-zinc-600",
    iconClass: "bg-zinc-100 text-zinc-600",
    title: "Паллеты б/у",
    desc: "Восстановленные паллеты в рабочем состоянии. Отличный выбор для оптимизации затрат при больших объёмах.",
    features: ["Прошли контроль качества", "Цена от договорной", "Большой выбор размеров"],
  },
  {
    icon: "📦",
    badge: "Новые",
    badgeClass: "bg-emerald-50 text-emerald-700",
    iconClass: "bg-emerald-50 text-emerald-700",
    title: "Новые паллеты",
    desc: "Паллеты первого сорта прямо с производства. Идеальны для пищевой, фармацевтической и экспортной продукции.",
    features: ["Сертифицированная древесина", "Стандарт ISPM 15", "Размер 1200×1000"],
  },
  {
    icon: "⚙",
    badge: "Под заказ",
    badgeClass: "bg-violet-50 text-violet-700",
    iconClass: "bg-violet-50 text-violet-700",
    title: "Паллеты под заказ",
    desc: "Изготовим паллеты по вашим размерам и требованиям. Нестандартные габариты, усиленная конструкция.",
    features: ["Любые размеры и форма", "Срок от 5 рабочих дней", "Расчёт за 1 час"],
  },
];

export default function ProductTypesHome() {
  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-6xl">

        <div className="text-center mb-10">
          <span className="inline-block text-xs text-zinc-500 border border-zinc-200 rounded-lg px-3 py-1 mb-3 tracking-wide">
            Наш ассортимент
          </span>
          <h2 className="text-3xl font-medium mb-2">Паллеты для любых задач</h2>
          <p className="text-sm text-zinc-500">Подберём подходящий вариант под ваш объём и бюджет</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {types.map((t) => (
            <div key={t.title} className="border border-zinc-200 rounded-2xl p-6 flex flex-col gap-3 hover:border-zinc-400 transition-colors">
              <span className={`text-xs font-medium px-3 py-1 rounded-md w-fit ${t.badgeClass}`}>
                {t.badge}
              </span>
              <p className="text-lg font-medium">{t.title}</p>
              <p className="text-sm text-zinc-500 leading-relaxed flex-1">{t.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-500">
                    <span className="text-zinc-300">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-black text-white rounded-xl px-7 py-3 text-sm font-medium hover:opacity-85 transition-opacity"
          >
            Смотреть весь каталог →
          </Link>
        </div>

      </div>
    </section>
  );
}