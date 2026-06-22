import Image from 'next/image'
import { TypewriterText } from '@/app/components/ui/header/TypewriterText'

const TYPEWRITER_WORDS = ['Качество', 'Надёжность', 'Гарантии', 'Профессионализм', 'Партнёрство']

export function Header() {
	return (
		<>
			<div className='container mx-auto flex flex-col gap-4 py-4 items-center md:flex-row md:justify-between md:items-center'>
				<div className='flex w-full justify-center md:w-auto md:justify-start'>
					<Image
						src="/logo.png"
						width={40}
						height={40}
						alt="Picture of the author"
						/>
				</div>

				<div className='flex w-full justify-center md:w-auto'>
					<TypewriterText
          words={TYPEWRITER_WORDS}
					typeSpeed={70}
 				deleteSpeed={35}
 				pauseAfter={1500}
          className='text-lg font-medium text-center'
        />
				</div>
				
				<div className='flex w-full justify-center md:w-auto md:justify-end'>
          <p className='text-base md:text-lg font-medium text-center md:text-right'>ООО "ПАЛЛЕТПРО"</p>
        </div>
		</div>
		</>
	)
}