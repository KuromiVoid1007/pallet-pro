import Image from 'next/image'
import { TypewriterText } from '@/app/components/ui/header/TypewriterText'

const TYPEWRITER_WORDS = ['Качество', 'Надёжность', 'Гарантии', 'Профессионализм', 'Партнёрство']

export function Header() {
	return (
		<>
			<div className='container mx-auto flex items-center'>
					<div className='flex-1 flex justify-start'>
						<Image
						src="/logo.png"
						width={40}
						height={40}
						alt="Picture of the author"
						/>
					</div>

				<div className='flex-1 flex justify-center'>
					<TypewriterText
          words={TYPEWRITER_WORDS}
					typeSpeed={70}
  				deleteSpeed={35}
  				pauseAfter={1500}
          className='text-lg font-medium'
        />
				</div>
				
					<div className='flex-1 flex justify-end'>
          <p className='text-lx font-medium'>ООО "ПАЛЛЕТПРО"</p>
        </div>
			</div>
		</>
	)
}