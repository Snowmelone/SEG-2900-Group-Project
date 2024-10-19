import { motion } from 'framer-motion';
import '../gradients.css'
import '../hero.css'


export default function InfoGrid(props: any) {
    const { gridinfo } = props;

    return (
        <div className="flex justify-center items-center w-full md:px-16">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 md:mt-4 z-20 justify-center w-full">
                {gridinfo?.map((item: any, index: number) => (
                    <motion.div key={index} className="flex mx-2 py-16 mt-2 w-auto rounded-lg bg-transparent blurrybg border-2 z-20 items-center justify-center cursor-pointer select-none hover:shadow-lg "
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}>
                        <div className="pt-3   flex flex-col items-center  h-[300px] ">
                                <div className="px-4 py-10  bg-gray-gradient rounded-full h-16  flex items-center justify-center">
                                    <item.icon className="text-5xl  text-[#f1f1f1] " />
                                </div>
                            <div className="flex justify-start px-3 space-x-2 py-3 items-center">
                                <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
                            </div>
                            <p className="text-gray-700 px-3 py-2 text-center">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
