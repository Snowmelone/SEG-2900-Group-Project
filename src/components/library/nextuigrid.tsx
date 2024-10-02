import { useState } from 'react';
import { motion } from 'framer-motion';
import '../gradients.css';
import { Card, Image } from '@nextui-org/react';

export default function InfoGrid(props: any) {
    const { gridinfo } = props;
    const [showMore, setShowMore] = useState(false);

    const itemsToShow = showMore ? gridinfo : gridinfo.slice(0, 6);

    return (
        <div className="flex flex-col justify-center items-center w-full">
            <div className="grid lg:grid-cols-6 md:grid-cols-2 grid-cols-1 md:mt-4 z-20 justify-center w-full">
                {itemsToShow?.map((item: any, index: number) => (
                    <motion.div key={index} className="flex mx-2 pt-2 mt-2 w-auto h-[200px] rounded-lg bg-white border-2 z-20 items-center justify-center cursor-pointer select-none hover:shadow-lg"
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                        onClick={() => {
                            window.location.href = (`pestlibrary/${item.hash}`);
                        }}
                    >
                        <div className="pt-3 px-2 py-3 flex flex-col items-center justify-center">
                            <div className='lg:w-8/12 bg-white p-1 flex flex-col items-center justify-center'>
                                <Image src={item.image} />
                            </div>
                            <div className="flex justify-start px-3 space-x-2 items-center">
                                <h1 className="text-lg font-bold text-red-600 hover:underline">{item.title}</h1>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            {gridinfo.length > 5 && (
                <div className="flex justify-center mt-4">
                    <button
                        className="text-red-600 font-bold hover:underline"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'View Less' : 'View More'}
                    </button>
                </div>
            )}
        </div>
    );
}
