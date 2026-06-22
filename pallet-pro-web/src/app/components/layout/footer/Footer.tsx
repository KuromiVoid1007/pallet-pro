export default function Footer() {
  return (
    <footer className="mt-20 rounded-t-[40px] bg-black px-10 py-12 text-white w-full">
      
      <div className="mx-auto flex flex-col gap-10 max-w-7xl items-center justify-between md:flex-row md:items-start">

        <div>
          <h2 className="text-3xl font-bold">
            Palett Pro
          </h2>

          <p className="mt-3 max-w-md text-sm text-zinc-400">
            Надежные решения и качественный сервис для вашего бизнеса.
          </p>
        </div>


        <div className="space-y-3 text-center md:text-right">

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
              Телефоны
            </p>

            <p className="text-l font-medium">
              +7 961 574-48-88
            </p>
            <p className="text-l font-medium">
              +7 912 288-82-22
            </p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">
              ИНН 
            </p>

            <p className="text-l font-medium">
              6685219095
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