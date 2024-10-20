
import { motion } from 'framer-motion';
import '../gradients.css'
import '../hero.css'


export default function PartsGrid(props: any) {
    const { partsInfo } = props;

    return (
        <div className="flex justify-center items-center w-full md:px-16">
            <div className="grid  md:grid-cols-5 grid-cols-1 md:mt-4 z-20 justify-center w-full">
                {partsInfo?.map((item: any, index: number) => (
                    <motion.div key={index} className="flex mx-2 py-8 mt-2 w-auto rounded-lg bg-transparent blurrybg border-2 z-20 items-center justify-center cursor-pointer select-none hover:shadow-lg "
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}>
                        <div className="pt-3 w-[200px] h  flex flex-col items-center  ">
                                <div className="px-4   bg-gray-gradient rounded-full h-32 w-32 flex items-center justify-center">
                                    <item.icon className="text-5xl  text-[#f1f1f1] " />
                                </div>
                            <div className="flex justify-start px-3 space-x-2 py-3 items-center">
                                <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
                            </div>
                            <div className="flex justify-start px-3 space-x-2  items-center">
                                <h1 className="text-xl  text-gray-600">{item.price} $</h1>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
