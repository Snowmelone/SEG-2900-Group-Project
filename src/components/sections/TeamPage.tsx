import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import '../gradients.css'
import '../hero.css'

import TeamGrid from '../library/teamGrid'
import teamData from '@/data/teamData'
import { Jura } from 'next/font/google'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})


export default function TeamPage({
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
        <div id='Team' className='flex flex-col justify-center py-12 gridbg items-center text-center z-50  left-0 top-0 w-full'>
           <div className='text-4xl font-semibold'>
            Meet the Lens Team
           </div>
         <div className='text-gray-500'>
            Our  philosophy is simple; hire great people and give them <br/> the ressources and support to do their best work.
         </div>
         <div className=' px-8'>

            <TeamGrid teamData={teamData}/>
         </div>
        </div >
    )
}
