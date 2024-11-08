import { delay } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Jura } from 'next/font/google'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
import { Button, Card } from '@nextui-org/react';

import { FaCalendar } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { IoIosPricetag } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})
const juraBold = Jura({
    weight: '700',
    subsets: ['latin'],

})
export default function LandingPage({
    language = "en"
}: {
    language?: String
}) {
    const [isScrollAtTop, setIsScrollAtTop] = useState(true);
    const [selectedPage, setSelectedPage] = useState('#Home');
    const cubeRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        // Lighting
        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(0, 1, 1).normalize();
        scene.add(light);

        // Object 
        const cubeGeo = new THREE.BoxGeometry(3, 1, 3);
        const cubeMaterial = new THREE.MeshStandardMaterial({ color: "#000000" });
        const rotatingCube = new THREE.Mesh(cubeGeo, cubeMaterial);
        rotatingCube.position.y = 1.5;
        rotatingCube.position.z = 0.3;
        rotatingCube.position.x = 0;


        rotatingCube.rotation.x = 0.5;
        rotatingCube.rotation.y = 0.5;
        scene.add(rotatingCube);

        const glassMaterial = new THREE.MeshPhysicalMaterial({
            roughness: 0.6, 
            opacity: 0.2, 
            transmission: 0.8, 
            clearcoat: 0.5, 
            ior: 1.5, 
        });
        const pedestalGeo = new THREE.BoxGeometry(4.5, 1.5, 4.5);
        const pedestal = new THREE.Mesh(pedestalGeo, glassMaterial);
        pedestal.position.y = 0.5;
        pedestal.rotation.x = 0.5;
        pedestal.rotation.y = 0.7;
        scene.add(pedestal);

        // Renderer with transparent background
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        if (cubeRef.current) {
            cubeRef.current.appendChild(renderer.domElement);
        }

        // Resize function
        const resizeRendererToDisplaySize = () => {
            if (cubeRef.current) {
                const width = cubeRef.current.clientWidth;
                const height = cubeRef.current.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            }
        };

        // Resize Observer
        const resizeObserver = new ResizeObserver(() => {
            resizeRendererToDisplaySize();
        });

        // Only observe if cubeRef.current is not null
        if (cubeRef.current) {
            resizeObserver.observe(cubeRef.current);
        }

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            rotatingCube.rotation.y += 0.005;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            if (cubeRef.current) {
                cubeRef.current.removeChild(renderer.domElement);
                resizeObserver.unobserve(cubeRef.current); // Clean up the observer
            }
            renderer.dispose();
        };
    }, []);


    function goToPage(page: string): void {
        setSelectedPage(page);
        document.querySelector(page)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div id='Home' className='flex md:flex-row  flex-col-reverse justify-between items-center  bg-gray-50 gridbg left-0 top-0 w-full'>
             <div className='lg:w-6/12 w-full h-[100dvh] bg-white flex flex-col justify-center md:pt-64  pt-32 pb-32 items-center'>
                <div className={`${jura.className} text-2xl`}>Prism Glasses</div>
                <div ref={cubeRef} className='w-full h-96' />
                <div className=' w-full flex flex-col items-center space-y-4'>
                    <div className='flex justify-between w-3/6'>
                        <div>
                            <div className={`text-sm text-gray-400`}>Active Users</div>
                            <div className={`font-bold text-xl text-purple-400`}>
                                5000+
                            </div>
                        </div>
                        <div>
                            <div className={`text-sm text-gray-400`}>Unique Combinations</div>
                            <div className={`font-bold text-xl text-blue-400`}>
                            1,000+ 
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[500px] flex justify-center text-center w-full text-gray-400'>
                    Join over 5,000 satisfied customers who have discovered the perfect blend of style and flexibility. Customize each part of your frames to fit your unique look, lifestyle, and vision needs. With options for frames, lenses, and temples, you’re in control of every detail.                    </div>

                    <div className='flex space-x-6'>
                            <Button className='text-white bg-black'  onClick={() => {
                                document.getElementById('Pricing')?.scrollIntoView({ behavior: 'smooth' })
                            }}>Buy Now</Button>
                            <Button variant='bordered'  onClick={() => {
                                document.getElementById('Pricing')?.scrollIntoView({ behavior: 'smooth' })
                            }}>View Prices</Button>

                    </div>

                </div>

            </div>
            <div className='lg:w-6/12 w-[50vw] flex flex-col  items-center text-start justify-center md:mt-16 mt-32 '>
            
                <div className='md:text-6xl text-5xl flex flex-col max-w-[400px] md:max-w-full text-center md:text-center space-y-3'>

                    <div className={`md:text-start text-center text-xl flex md:justify-center justify-center ${juraBold.className}`}>INVEST IN YOUR FUTURE</div>
                    <div className='font-bold text-blue-400'>Frames &</div>
                    <div className='font-bold'>quality you</div>
                    <div className='font-bold flex justify-center space-x-4 '>
                        <div>
                        can
                        </div>
                        <div className='text-violet-400'>Trust</div>
                    </div>
                    <div className='text-lg md:ml-8 max-w-[500px] w-full pb-8'>
                    More than just eyewear—our frames offer the perfect balance of design, durability, and dependable quality.
                    </div>
                    <Card className='bg-blue-300/30 hidden md:flex w-full   justify-center space-y-2 p-4'>

                        <div className='flex justify-center w-full ml-4 space-x-2 '>
                            <Button className='flex flex-col bg-white  items-center px-4  h-16 w-64 cursor-pointer hover:bg-gray-100' onClick={() => {
                                document.getElementById('Showcase')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                <div className='flex flex-row items-center px-4 justify-between h-16 w-64'>

                                    <div className={`$ flex font-bold items-center justify-between space-x-2`}> <FaCalendar></FaCalendar> <p>Our Services</p></div>
                                    <div><FaArrowRightLong /></div>
                                </div>
                                <div className={`flex justify-start items-start text-start w-full ml-12 ${jura.className}`}>What We Do</div>
                            </Button>
                            <Button className='flex flex-col bg-white items-center px-4  h-16 w-64 cursor-pointer hover:bg-gray-100' onClick={() => {
                                document.getElementById('Goal')?.scrollIntoView({ behavior: 'smooth' })
                            }}>
                                <div className='flex flex-row items-center px-4 justify-between h-16 w-64'> 

                                    <div className={`$ flex font-bold items-center justify-between space-x-2`}> <IoLibrary></IoLibrary> <p>Goal</p></div>
                                    <div><FaArrowRightLong /></div>
                                </div>
                                <div className={`flex justify-start items-start text-start w-full ml-12 ${jura.className}`}>Useful Information</div>
                            </Button>
                        </div>
                        <div className='flex space-x-2'>
                            <Button className='flex flex-col bg-white items-center px-4  h-16 w-64 cursor-pointer hover:bg-gray-100' onClick={() => {
                                document.getElementById('Pricing')?.scrollIntoView({ behavior: 'smooth' })
                            }}>
                                <div className='flex flex-row items-center px-4 justify-between h-16 w-64'>

                                    <div className={`$ flex font-bold items-center justify-between space-x-2`}> <IoIosPricetag></IoIosPricetag> <p>Pricing</p></div>
                                    <div><FaArrowRightLong /></div>
                                </div>
                                <div className={`flex justify-start items-start text-start w-full ml-12 ${jura.className}`}>Price Comparison</div>
                            </Button>
                            <Button className='flex bg-white flex-col items-center px-4  h-16 w-64 cursor-pointer hover:bg-gray-100' onClick={() => {
                                document.getElementById('Team')?.scrollIntoView({ behavior: 'smooth' })
                            }}>
                                <div className='flex flex-row items-center px-4 justify-between h-16 w-64'>

                                    <div className={`$ flex font-bold items-center justify-between space-x-2`}> <FaQuestionCircle></FaQuestionCircle> <p>Team</p></div>
                                    <div><FaArrowRightLong /></div>
                                </div>
                                <div className={`flex justify-start items-start text-start w-full ml-12 ${jura.className}`}>Meet the Lens Team</div>
                            </Button>
                        </div>
                    </Card>

                </div>

            </div>
           
        </div>
    );
}
