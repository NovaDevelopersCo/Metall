import Image from "next/image"
import arrow from '@/assets/arrow.png'
import aboutUs from '@/assets/aboutUs.png'
import {AboutUsItems} from '@/abotUs/AboutUs.data'  
import { AboutUsbuttonsItems } from "./AboutUs.buttons"
import { DescribeAboutUs } from "./DescribeAboutUs"
import { UsAdvantages } from "./UsAdvantages"

export const AboutUs = () => {
    return (
    <div className="flex justify-center">
                    <div className="flex flex-col justify-center">
                    <div className="w-[998px] h-[283px] borde mx-[150px] my-[52px]" >
                         <h1 className=" text-[63px] font-medium  font-roboto text-yellow-400">"Производственная компания РС — вместе создаем прочные основы вашего успеха!"</h1>
                    </div>
                    <div >
                        <div className="relative h-[668px]">
                            <Image  className="w-[1440px]" src={aboutUs} alt="img-aboutUs"/>
                            <Image className="absolute left-[413px] top-[542px]" src={arrow} alt='img-arrow'/> 
                        
                        </div>
                    </div>
                        <DescribeAboutUs />
                    <div>
                        <UsAdvantages /> 
                    </div>
                        <AboutUsbuttonsItems />
               </div>
    </div>
    )
}

