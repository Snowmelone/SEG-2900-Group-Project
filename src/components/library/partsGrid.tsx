
import { motion } from 'framer-motion';
import '../gradients.css'
import '../hero.css'
import { Button } from '@nextui-org/react';


export default function PartsGrid(props: any) {
    const { partsInfo, setCurFrame, setCurLens, setCurTemple, selectedPart, curFrame, curLens, curTemple } = props;
    function SelectPart(part: any) {
        if (selectedPart === "Frames") setCurFrame(part.title)
        else if (selectedPart === "Lens") setCurLens(part.title)
        else if (selectedPart === "Temple") setCurTemple(part.title)


    }

    return (
        <div className="flex justify-center items-center w-full md:px-16">
            <div className="grid  md:grid-cols-5 grid-cols-1 md:mt-4 z-20 justify-center w-full">
                {partsInfo?.map((item: any, index: number) => (
                    <motion.div key={index} className="flex mx-2 py-8 mt-2 w-auto rounded-lg bg-transparent blurrybg border-2 z-20 items-center justify-center cursor-pointer select-none hover:shadow-lg "
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}>
                        <div className="pt-3 w-[200px] h  flex flex-col items-center  ">
                            <div className={`px-4  ${selectedPart == "Frames" ? "bg-discount-gradient ": ""} ${selectedPart == "Lens" ? "bg-pink-gradient ": ""} ${selectedPart == "Temple" ? "bg-purple-gradient": ""} rounded-full h-32 w-32 flex items-center justify-center`}>
                                <item.icon className="text-5xl   text-[#f1f1f1] " />
                            </div>
                            <div className="flex justify-start px-3 space-x-2 py-3 items-center">
                                <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
                            </div>
                            <div className="flex justify-start px-3 space-x-2  items-center">
                                <h1 className="text-xl  text-gray-600">{item.price} $</h1>
                            </div>
                            <div className='mt-4 w-full'>
                                {(curFrame !== item.title && curLens !== item.title && curTemple !== item.title) && (
                                    <Button className='bg-black w-full text-white' onClick={() => {
                                        SelectPart(item);
                                    }}>
                                        Select Part
                                    </Button>
                                )}
                                 {((curFrame === item.title || curLens === item.title || curTemple === item.title) && 
                                    <Button variant='bordered' className='bg-transparent w-full text-black' disabled={true}>
                                        Selected
                                    </Button>)}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
