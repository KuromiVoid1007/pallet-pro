import { useState, useEffect, useRef } from 'react'

interface UseTypewriterOptions {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseAfter?: number
  pauseBefore?: number
  storageKey?: string
}

interface TypewriterState {
  wordIndex: number
  charIndex: number
  isDeleting: boolean
  isPaused: boolean
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseAfter = 2000,
  pauseBefore = 400,
  storageKey = 'typewriter-state',
}: UseTypewriterOptions) {
  const timerRef = useRef<number | null>(null)

  const loadSavedState = (): TypewriterState => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved) {
        const parsed = JSON.parse(saved) as TypewriterState
        const age = Date.now() - (JSON.parse(saved) as any).timestamp
        if (age < 60000) {
          return parsed
        }
      }
    } catch {}
    return { wordIndex: 0, charIndex: 0, isDeleting: false, isPaused: false }
  }

  const [state, setState] = useState<TypewriterState>(loadSavedState)
  const [text, setText] = useState('')

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify({ ...state, timestamp: Date.now() }))
  }, [state, storageKey])

  useEffect(() => {
    const currentWord = words[state.wordIndex]
    const delay = state.isPaused
      ? pauseAfter
      : state.isDeleting
        ? deleteSpeed
        : typeSpeed

    timerRef.current = window.setTimeout(() => {
      if (state.isPaused) {
        setState(prev => ({ ...prev, isPaused: false, isDeleting: true }))
      } else if (state.isDeleting) {
        if (state.charIndex <= 0) {
          setState(prev => ({
            wordIndex: (prev.wordIndex + 1) % words.length,
            charIndex: 0,
            isDeleting: false,
            isPaused: false,
          }))
        } else {
          setState(prev => ({ ...prev, charIndex: prev.charIndex - 1 }))
          setText(currentWord.slice(0, state.charIndex - 1))
        }
      } else {
        if (state.charIndex >= currentWord.length) {
          setState(prev => ({ ...prev, isPaused: true }))
        } else {
          setState(prev => ({ ...prev, charIndex: prev.charIndex + 1 }))
          setText(currentWord.slice(0, state.charIndex + 1))
        }
      }
    }, delay)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [state, words, typeSpeed, deleteSpeed, pauseAfter, pauseBefore])

  return text
}
