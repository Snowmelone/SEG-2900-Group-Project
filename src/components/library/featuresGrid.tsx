
import { motion } from 'framer-motion';
import '../gradients.css'
import '../hero.css'
import { Button } from '@nextui-org/react';


export default function FeatureGrid(props: any) {
    const { featureData } = props;

    return (
        <div className="flex justify-center items-center w-full md:px-8">
            <div className="grid  md:grid-cols-2 grid-cols-1 md:mt-4 z-20 justify-center w-full">
                {featureData?.map((item: any, index: number) => (
                    <motion.div key={index} className="flex  w-auto h-[70dvh] bg-transparent blurrybg border-2 z-20 items-center justify-center select-none  "
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}>
                        <div className={`h-full w-full  flex flex-col items-center  relative  ${item.position == 'start' ? 'justify-start' : 'justify-end '} ${item.text == 'dark' ? 'text-black' : 'text-white'} `}>
                            <div className="absolute w-full h-full  flex ">
                                <img
                                    src={item.image}
                                    alt='s'
                                    className='object-cover w-full h-full   '
                                />
                            </div>
                            <div className="flex flex-col justify-start px-3 z-40 mt-6 space-x-2 py-3 items-center">
                                <h1 className="text-4xl font-semibold ">{item.title}</h1>
                                <h1 className="text-xl font-semibold ">{item.description}</h1>
                                <div className={`flex ${item.position == 'start' ? '' : 'mb-6 '} space-x-6 mt-4 ${item.text == 'dark' ? '' : 'invert'} `}>
                                {item.btn1 == 'null' ? <> </>:<Button className='text-white bg-black font-semibold'>{item.btn1}</Button>}
                                    {item.btn2 == 'null' ? <> </>:<Button variant='bordered' className='font-bold border-black'>{item.btn2}</Button>}

                                </div>
                            </div>
                      
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
