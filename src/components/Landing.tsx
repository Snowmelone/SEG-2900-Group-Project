"use client"

import { Button, NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Header from './sections/Header'

export default function Landing({
    language = "en"
}: {
    language?: String
}) {
    return (
        <NextUIProvider>
            <div className='flex flex-col min-h-[100vh] overflow-x-hidden '>
                <Header language={language} />
              
                    
            </div>
        </NextUIProvider>
    )
}
