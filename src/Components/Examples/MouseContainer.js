import React, { useState } from 'react'
import MouseEffectHook from './MouseEffectHook'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <MouseEffectHook />}
        </div>
    )
}

export default MouseContainer
