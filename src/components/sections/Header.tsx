import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import '../gradients.css'
import '../hero.css'

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { TbBooks } from "react-icons/tb";
import { IoHomeOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";

import { Jura } from 'next/font/google'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})


export default function Header({
    language = "en"
}: {
    language?: String
}) {
    const [isScrollAtTop, setIsScrollAtTop] = useState(true);
    const [selectedPage, setSelectedPage] = useState('#Home')
    const [isResidentialOpen, setResidentialOpen] = useState(false);
    const [isCommercialOpen, setCommercialOpen] = useState(false);
    const [isPestLibraryOpen, setPestLibraryOpen] = useState(false);

    const [navBarOpen, setNavbarOpen] = useState(false)


    function goToPage(page: string): void {
        setSelectedPage(page)
        document.querySelector(page)?.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsScrollAtTop(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        if (localStorage.getItem('scrollToPests') === 'true') {
            document.getElementById('Pests')?.scrollIntoView({ behavior: 'smooth' });
            localStorage.removeItem('scrollToPests');
        }
    }, []);

    return (
        <div id='#' className='flex justify-center items-center  z-50 fixed left-0 top-0 w-full'>

            <header className='flex-1 hidden md:flex flex-row justify-center items-center'>
                <Card className={`w-full rounded-none flex-1 flex flex-row justify-center items-center py-2 px-6 text-gray-200  ${isScrollAtTop ? 'bg-transparent shadow-none mt-5' : 'bg-white/80 shadow-md text-gray-800'} font-bold `}>
                    <div className=' w-full flex items-center justify-center space-x-16'>

                        <div className='flex items-center space-x-6'>
                            <button className={`${isScrollAtTop ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>Home</button>
                            <button className={`${isScrollAtTop ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>Studio</button>
                            <button className={`${isScrollAtTop ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>Offers & Pricing</button>

                        </div>

                        <Link className='cursor-pointer' onClick={() => {
                            if (window.location.pathname !== "/") {
                                window.location.href = (`/`)
                            } else {
                                document.getElementById('Home')?.scrollIntoView({ behavior: 'smooth' })
                            }
                        }}>
                            {/* <Logo48 /> */}
                            <Image src={'/cclogo.png'} className='h-14'></Image>
                        </Link>
                        <div className='flex items-center space-x-6'>
                            <button className={`${isScrollAtTop ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>Showcase</button>
                            <button className={`${isScrollAtTop ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>Contact us</button>
                            <button className={`${isScrollAtTop ? 'hover:text-gray-400' : 'hover:text-gray-600'}`}>Book now</button>

                        </div>
                    </div>
                </Card>
            </header>
            {!navBarOpen && <button className='h-24 md:hidden flex  items-center justify-between space-x-4 text-6xl text-[#d4af37]' onClick={() => {
                setNavbarOpen(!navBarOpen)
            }}>
                <IoIosMenu className=''></IoIosMenu>

            </button>}
            {navBarOpen && <header className='flex-1 md:hidden flex h-screen  flex-col justify-center items-start z-20 bg-gray-700/90'>
                <div className='h-24 flex flex-col w-full items-center justify-start space-x-4  text-6xl px-6 py-4 '>
                    <button className='h-24 flex  items-center justify-between space-x-4 text-6xl text-[#d4af37]' onClick={() => {
                        setNavbarOpen(!navBarOpen)
                    }}>
                        <IoIosMenu className=''></IoIosMenu>

                    </button>
                    
                </div>
                <div className='text-amber-300 h-full text w-full flex flex-col  items-center space-y-12 text-2xl font-bold'>
                    <button className={`mt-8 text-center   `}>Home</button>
                    <button className={`text-start `}>Studio</button>
                    <button className={`text-start `}>Offers & Pricing</button>
                    <button className={`text-start `}>Showcase</button>
                    <button className={`text-start `}>Contact us</button>
                    <button className={`text-start `}>Book now</button>
                </div>
                <Link className='cursor-pointer pt-4 pr-8 mb-10  w-full flex ' onClick={() => {
                        if (window.location.pathname !== "/") {
                            window.location.href = (`/`)
                        } else {
                            document.getElementById('Home')?.scrollIntoView({ behavior: 'smooth' })
                        }
                    }}>
                        {/* <Logo48 /> */}
                        <Image src={'/cclogo.png'} className='h-24'></Image>
                    </Link>

            </header>}
        </div >
    )
}
