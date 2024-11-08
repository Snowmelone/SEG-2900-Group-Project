import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import '../gradients.css'
import '../hero.css'
import FeatureGrid from '../library/featuresGrid'
import featureData from '@/data/featureData'
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { BsTree } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { MdOutlineHealthAndSafety } from "react-icons/md";

import { FaScissors } from "react-icons/fa6";

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
                        Modular Eyewear Redefined
                    </div>
                    <div className={`text-gray-600 `}>An innovative eyewear solution offering full customization with modular components.
                        <br />
                        <br />
                        {/* USE ICONS INSTEAD OF BULLET POINTS */}
                        <div className=' '>
                            <p className='flex items-center '> <MdOutlinePublishedWithChanges className='h-10 w-8 mr-4 '/> Interchangeable parts: swap side handles, lenses, and frames easily</p>
                            <br />

                            <p className='flex items-center '> <FaScissors className='h-10 w-8 mr-4'/> Personalization: switch between materials like plastic or wood for a tailored look</p>
                            <br />

                            <p className='flex items-center '> <IoSunnyOutline className='h-10 w-8 mr-4'/> Versatility: change from sunglasses to prescription lenses as needed</p>
                            <br />

                            <p className='flex items-center '> <BsLightningCharge className='h-10 w-8 mr-4'/> Effortless assembly: components click together smoothly, adapting to any occasion</p>
                        </div>
                    </div>
                </Card>
            </div>
            <div className='flex justify-center items-center max-w-[1440px] w-full space-x-32 z-20'>
                {/* content */}
                <Card className='w-1/2 p-10 bg-white/30'>
                    <div className={`text-5xl font-bold text-center pb-10 ${jura.className}  text-gradient-blue `}>
                        Sustainable and Cost-Effective
                    </div>
                    <div className='text-gray-600'>Lens provides a sustainable, adaptable alternative to traditional eyewear.


                        <br />
                        <br />
                        {/* USE ICONS INSTEAD OF BULLET POINTS */}
                        <div className=' '>
                            <p className='flex items-center '> <FaRegArrowAltCircleDown className='h-10 w-8 mr-4'/> Reduce waste: replace only individual parts, not entire frames</p>
                            <br />

                            <p className='flex items-center '> <BsTree className='h-10 w-8 mr-4'/> Eco-friendly materials: choose from recycled metals or sustainably sourced wood</p>
                            <br />

                            <p className='flex items-center '> <GrMoney className='h-10 w-8 mr-4'/> Cost savings: avoid frequent full-frame replacements</p>
                            <br />

                            <p className='flex items-center '> <MdOutlineHealthAndSafety className='h-10 w-8 mr-4'/> Environmental impact: less plastic waste, lower carbon footprint</p>
                        </div>
                    </div>
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