
import { motion } from 'framer-motion';
import '../gradients.css'
import '../hero.css'
import Image from 'next/image';
import { Card } from '@nextui-org/react';


export default function TeamGrid(props: any) {
    const { teamData } = props;

    return (
        <div className="flex justify-center items-center w-full md:px-16 ">
            <div className="flex flex-wrap justify-center md:mt-4 z-20 w-full">
            {teamData?.map((item: any, index: number) => (
            <motion.div key={index} className="flex mx-2 w-[325px] mt-2  rounded-lg bg-transparent blurrybg border-2 z-20  items-center justify-center cursor-pointer select-none hover:shadow-lg"
                animate={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}>
                <div className="h-[400px] md:h-[500px] w-[325px] flex flex-col items-center justify-between"> {/* Adjusted height */}
                    <div className="relative w-full h-3/4 rounded-md flex items-center justify-center">
                        <img
                            src={item.image}
                            alt='s'
                            className='object-cover w-[325px] h-full rounded-md' 
                        />
                    </div>
                    <div className='z-30 flex flex-col justify-end h-full'>
                        <Card className='py-3 w-[325px] h-full rounded-t-none'>
                            <div className="flex w-full justify-start px-3 space-x-2  items-center">
                                <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
                            </div>
                            <div className="flex justify-start px-3 space-x-2 items-center">
                                <h1 className="text-xl text-gray-600">{item.description}</h1>
                            </div>
                        </Card>
                    </div>
                </div>
            </motion.div>
        ))}
            </div>
        </div>
    )
}
