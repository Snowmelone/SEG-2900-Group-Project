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
    weight: '700',
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
                <Card className={`w-full rounded-none flex-1 flex flex-row justify-center items-center py-2 px-6   ${isScrollAtTop ? 'bg-transparent shadow-none mt-5' : 'bg-white/10 blurrybg shadow-md text-gray-800'} font-bold `}>
                    <div className=' w-full flex items-center justify-between space-x-16 px-32'>
                        <div className='flex h-full  items-center justify-center'>
                        <Link className='cursor-pointer' onClick={() => {
                            if (window.location.pathname !== "/") {
                                window.location.href = (`/`)
                            } else {
                                document.getElementById('Home')?.scrollIntoView({ behavior: 'smooth' })
                            }
                        }}>
                            <Image src={'/cclogo.png'} className='h-8'></Image>
                        </Link>
                            <div className={`flex items-center h-full mt-2 text-xl text-gray-500 ${jura.className}`}>PRISM</div>
                        </div>
                        <div className='rounded-full  blurrybg border-2 border-gray-200/60 p-1 font-bold md:flex hidden'>
                            <Button className={`h-8 ${selectedPage !== "#Home" ? 'bg-transparent text-black rounded-full hover:bg-gray-200' : 'bg-black text-white rounded-full'} font-bold `} onClick={() => goToPage('#Home')}>Home</Button>
                            <Button className={`h-8 ${selectedPage !== "#Benefits" ? 'bg-transparent text-black rounded-full hover:bg-gray-200' : 'bg-black text-white rounded-full'} font-bold`} onClick={() => goToPage('#Benefits')}>Goal</Button>
                            <Button className={`h-8 ${selectedPage !== "#Service" ? 'bg-transparent text-black rounded-full hover:bg-gray-200' : 'bg-black text-white rounded-full'} font-bold`} onClick={() => goToPage('#Service')}>Service</Button>
                            <Button className={`h-8 ${selectedPage !== "#Pricing" ? 'bg-transparent text-black rounded-full hover:bg-gray-200' : 'bg-black text-white rounded-full'} font-bold`} onClick={() => goToPage('#Pricing')}>Pricing</Button>
                            <Button className={`h-8 ${selectedPage !== "#ContactUs" ? 'bg-transparent text-black rounded-full hover:bg-gray-200' : 'bg-black text-white rounded-full'} font-bold`} onClick={() => goToPage('#ContactUs')}>Our Team</Button>
                        </div>

                        {/*  */}
                        <div className='flex items-center space-x-6 '>
                            <Button className={ `h-10 bg-black font-bold text-white hover:bg-gray-400 hover:text-black`}>Buy Product</Button>

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
