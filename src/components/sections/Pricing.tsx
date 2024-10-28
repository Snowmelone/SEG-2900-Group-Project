import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import '../gradients.css'
import '../hero.css'
import partsInfo from '@/data/partsData'
import PartsGrid from '../library/partsGrid'
import { Jura } from 'next/font/google'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})
const juraBold = Jura({
    weight: '700',
    subsets: ['latin'],

})

export default function Pricing({
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
        <div id='#' className='flex flex-col justify-between items-center  z-50 h-auto  left-0 top-0 w-full '>
            {/* Gucci Collab */}

            <Card className='grid md:grid-cols-3 grid-cols-1 justify-center items-center w-full max-h-[400px] h-full bg-white'>
                <div className={` flex flex-col justify-center space-y-4 text-center text-5xl bg-gray-50 h-full items-center ${jura.className}`}>
            {/* <div className='absolute z-10'>
                <Image className='object-cover  w-full h-full' src='gucciwearer.png'/>

            </div> */}
                    <div className='z-20 '>
                        Different
                    </div>
                    <div>
                        Frame
                    </div>
                
                    <div className='z-20 font-bold  text-gradient-purple '>
                        Better Game
                    </div>
                  
                </div>
                <div className='flex flex-col justify-between py-2 h-full items-center'>
                    <div className='text-4xl font-bold text-center'>
                        <div className={`${jura.className}`}>
                            Gucci x Lens
                        </div>
                        <div className='text-xl text-gray-500 font-semibold'>
                            Innovative Style

                        </div>
                        <div className='text-lg text-gray-400 font-normal'>
                            299$

                        </div>
                    </div>
                    <div className=''>
                        <Image className='h-48' src='gucciex_.jpg' />
                    </div>

                </div>
                <div className='flex justify-center h-full items-center bg-black text-[#ffbf00]'>
                    coming xx.xx.xxxx
                </div>
            </Card>
            {/* Parts Grid */}
            <div className='flex flex-col items-center w-full h-full justify-center py-16 pt-32'>
                <div className={`text-5xl font-bold ${jura.className} pb-6`}>
                    Parts
                </div>
                <div className='w-full h-full flex justify-between px-16'>
                <div className='w-3/12  bg-gray-100'>
                    x
                </div>
                <div className='w-9/12 flex items-center '>

                <PartsGrid partsInfo={partsInfo} />
                </div>
                    </div>
            </div>

        </div >
    )
}
