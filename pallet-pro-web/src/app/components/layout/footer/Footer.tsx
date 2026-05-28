export default function Footer() {
  return (
    <footer className="mt-20 rounded-t-[40px] bg-black px-10 py-12 text-white w-full">
      
      <div className="mx-auto flex max-w-7xl items-start justify-between">

        {/* Left */}
        <div>
          <h2 className="text-3xl font-bold">
            Palett Pro
          </h2>

          <p className="mt-3 max-w-md text-sm text-zinc-400">
            Надежные решения и качественный сервис для вашего бизнеса.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-3 text-right">

          <div>
            <p className="text-sm text-zinc-400">
              Почта
            </p>

            <p className="text-l font-medium">
              example@mail.ru
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              Телефон
            </p>

            <p className="text-l font-medium">
              +7 777 777 77 77
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              ИНН
            </p>

            <p className="text-l font-medium">
              1234567890
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              Компания
            </p>

            <p className="text-l font-medium">
              ООО "Палетт Про"
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
}