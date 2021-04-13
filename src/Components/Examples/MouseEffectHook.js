import React, {useState, useEffect} from 'react'

function MouseEffectHook() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect call')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('Component unmounting code')
            window.addEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default MouseEffectHook
