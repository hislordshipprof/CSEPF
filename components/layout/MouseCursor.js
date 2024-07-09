'use client'
import { useEffect, useState } from 'react'

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        const onMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY })
        }

        const onMouseEnter = () => {
            setHovered(true)
        }

        const onMouseLeave = () => {
            setHovered(false)
        }

        window.addEventListener('mousemove', onMouseMove)
        document.querySelectorAll('a, .cursor-pointer').forEach((element) => {
            element.addEventListener('mouseenter', onMouseEnter)
            element.addEventListener('mouseleave', onMouseLeave)
        })

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            document.querySelectorAll('a, .cursor-pointer').forEach((element) => {
                element.removeEventListener('mouseenter', onMouseEnter)
                element.removeEventListener('mouseleave', onMouseLeave)
            })
        }
    }, [])

    return (
        <>
            <div
                className={`mouse-cursor cursor-outer ${hovered ? 'cursor-hover' : ''}`}
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    visibility: 'visible',
                }}
            />
            <div
                className={`mouse-cursor cursor-inner ${hovered ? 'cursor-hover' : ''}`}
                style={{
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                    visibility: 'visible',
                }}
            />
        </>
    )
}

export default Cursor
