import { useEffect, useRef } from "react"
import { useAnimationControls } from "framer-motion"

export function useMarquee(speed = 0.5) {
    const controls = useAnimationControls()
    const position = useRef(0)
    const frameRef = useRef<number | null>(null)
    const isPaused = useRef(false)

    const animate = () => {
        if (!isPaused.current) {
            position.current -= speed

            controls.set({
                x: position.current,
            })
        }

        frameRef.current = requestAnimationFrame(animate)
    }

    useEffect(() => {
        frameRef.current = requestAnimationFrame(animate)

        return () => {
            if (frameRef.current) cancelAnimationFrame(frameRef.current)
        }
    }, [])

    const pause = () => {
        isPaused.current = true
    }

    const resume = () => {
        isPaused.current = false
    }

    return {
        controls,
        pause,
        resume,
    }
}