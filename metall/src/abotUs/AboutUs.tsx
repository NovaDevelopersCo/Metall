import Image from "next/image"
import arrow from '@/assets/arrow.png'
import aboutUs from '@/assets/aboutUs.png'
import {BreadKroshki} from '@/shared/index'  
import { AboutUsbuttonsItems } from "./AboutUs.buttons"
import { DescribeAboutUs } from "./DescribeAboutUs"
import { UsAdvantages } from "./UsAdvantages"

export const AboutUs = () => {
    return (
    <div className="flex justify-center ">
                    <div className="flex flex-col justify-center">
                        <div className="w-[998px] h-[283px] my-[52px] m-[150px] max-xl:w-[650px] max-md:w-[330px]" >
                            <div className="mb-[48px]">
                                <BreadKroshki/>
                             </div>
                            <h1 className="text-[63px] font-medium  font-roboto text-yellow-400 self-center max-xl:text-[50px] max-md:text-[40px] ">"Производственная компания РС — вместе создаем прочные основы вашего успеха!"</h1>
                        </div>
                    <div className="relative m-[56px]">
                            <Image  className=" relative w-full" src={aboutUs} alt="img-aboutUs"/>
                            <Image className="absolute left-[413px] top-[542px] max-xl:max-w-[70px] max-xl:left-[300px] max-xl:top-[400px] max-md:left-[200px] max-md:top-[250px] max-md:w-[50px]" src={arrow} alt='img-arrow'/>  
                    </div>
                    <div >
                        <DescribeAboutUs />
                    </div>
                    <div>
                        <UsAdvantages /> 
                    </div>
                        <AboutUsbuttonsItems />
               </div>
    </div>
    )
}

