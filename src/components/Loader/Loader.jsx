import React from 'react'
import { DotPulse } from '@uiball/loaders'

export default function Loader() {
    return (
        <DotPulse 
            size={80}
            speed={1.1} 
            color="black" 
        />
    )
}