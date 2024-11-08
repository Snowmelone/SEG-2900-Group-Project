import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import '../gradients.css'
import '../hero.css'
import FeatureGrid from '../library/featuresGrid'
import featureData from '@/data/featureData'

import { Jura } from 'next/font/google'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
const jura = Jura({
    weight: '700',
    subsets: ['latin'],

})


export default function Showcase({
    language = "en"
}: {
    language?: String
}) {
    const [isScrollAtTop, setIsScrollAtTop] = useState(true);
    const [selectedPage, setSelectedPage] = useState('#Home')


    const [navBarOpen, setNavbarOpen] = useState(false)


    function goToPage(page: string): void {
        setSelectedPage(page)
        document.querySelector(page)?.scrollIntoView({ behavior: 'smooth' });
    }



    return (
        <div id='Showcase' className='flex flex-col justify-center items-center mt-32 z-50 left-0 top-0 relative'>
             <div className='absolute  -left-0 z-10 h-1/2 w-1/4 blue__gradient '>

</div>
            <div className='absolute -top-32 -right-0 z-10 h-1/2 w-1/4 blue__gradient '>

</div>
            <div className={`mb-24 text-6xl font-bold text-gradient-grey`}>
                What's Prism?
            </div>
          <div className='flex justify-center items-center max-w-[1440px] w-full space-x-32 z-20'>
            {/* Img */}
            <div className='w-1/2 '>
            <img
                                    src={'/showcase1.png'}
                                    alt='s'
                                    className='object-cover h-[300px]   '
                                />
            </div>
            {/* content */}
            <Card className='w-1/2 p-10 bg-white/30'>
            <div className={`text-5xl font-bold text-center pb-10 ${jura.className}  text-gradient-purple `}>
                Interchangeable Glasses
            </div>
                    <p className={`text-gray-600 `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
            </Card>
          </div>
          <div className='flex justify-center items-center max-w-[1440px] w-full space-x-32 z-20'>
            {/* content */}
            <Card className='w-1/2 p-10 bg-white/30'>
            <div className={`text-5xl font-bold text-center pb-10 ${jura.className}  text-gradient-blue `}>
                Interchangeable Glasses
            </div>
                    <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
            </Card>
            {/* Img */}
            <div className='w-1/2'>
            <img
                                    src={'/showcase2.png'}
                                    alt='s'
                                    className='object-cover h-[550px]    '
                                />
            </div>
          </div>
        </div >
    )
}