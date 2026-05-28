'use client'

import { useTypewriter } from '@/app/hooks/useTypewriter'

interface TypewriterTextProps {
  words: string[]
  className?: string
  typeSpeed?: number
  deleteSpeed?: number
  pauseAfter?: number
}

export function TypewriterText({
  words,
  className = '',
  typeSpeed,
  deleteSpeed,
  pauseAfter,
}: TypewriterTextProps) {
  const text = useTypewriter({ words, typeSpeed, deleteSpeed, pauseAfter })

  return (
    <span className={`inline-flex items-center gap-[2px] ${className}`}>
      <span>{text}</span>
      <span className="inline-block w-[2px] h-[1em] bg-current animate-blink" />
    </span>
  )
}