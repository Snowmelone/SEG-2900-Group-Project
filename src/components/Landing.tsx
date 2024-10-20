"use client"

import { Button, NextUIProvider } from '@nextui-org/react'
import React from 'react'
import Header from './sections/Header'
import LandingPage from './sections/LandingPage'
import Features from './sections/Features'
import GoalPage from './sections/GoalPage'
import Pricing from './sections/Pricing'
import TeamPage from './sections/TeamPage'
import TopEndCap from './sections/EndCaps/TopEndCap'
import BottomEndCap from './sections/EndCaps/BottomEndCap'

export default function Landing({
    language = "en"
}: {
    language?: String
}) {
    return (
        <NextUIProvider>
            <div className='flex flex-col min-h-[100vh]  overflow-hidden '>
                <Header language={language} />

              <LandingPage/>

              <Features/>
              <div className='mt-16 md:block hidden'>

              <BottomEndCap/>
              </div>
              <GoalPage/>
              <TopEndCap/>
              <Pricing/>
              <TeamPage/>
                    
            </div>
        </NextUIProvider>
    )
}
