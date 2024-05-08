import Image from "next/image"
import arrow from '@/assets/arrow.png'
import aboutUs from '@/assets/aboutUs.png'
export const AboutUs = () => {
    return (
    <div className="flex ">
        <div className="flex-col">
         <div className="w-[998px] h-[283px] borde mx-[150px] my-[52px]" >
            <h1 className=" text-[63px] font-medium  font-roboto text-yellow-400">
                "Производственная компания РС — вместе создаем прочные основы вашего успеха!"
            </h1>
        </div>
        <div >
             <Image className="w-full" src={aboutUs} alt="img-aboutUs"></Image>
        </div>
        <div>
        </div>
       </div>
       <div>
        
       </div>
    </div>
    )
}

