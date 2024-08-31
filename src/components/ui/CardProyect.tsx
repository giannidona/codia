import React from 'react'
import Image from "next/image";

type CardProyectProps = {
    title: string;
    description: string;
    image: string;
}

export const CardProyect = ({title, description, image}: CardProyectProps) => {
    return (
        <div className="w-full border-2 border-gray-500/10 bg-gray-500/25 rounded-2xl  flex flex-col py-5 justify-center items-center max-w-[600px]">
            <div className="w-[90%] bg-gray-950 rounded-2xl h-[90%] flex justify-center pt-10 pb-10 px-2">
                <Image width={400} height={400} src={image} alt="macbook" />
            </div>
            <div className="text-left w-[90%]">
                <h1 className="text-xl font-bold text-white pt-5 pb-3">{title}</h1>
                <p className="text-white pb-8 text-sm leading-relaxed  ">
                    {description}
                </p>

                <button className="bg-eLightBlue hover:bg-eLightBlue/60 transition duration-300 ease-in-out rounded-lg px-4 py-2 text-white">
                    Ver mas
                </button>

            </div>
        </div>
    )
}
