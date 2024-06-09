import vector from '@/assets/Vector.png'
import Image from "next/image"

export const UsAdvantages =({})=> {
    return (
        <div className="flex flex-col max-xl:text-center">
            <h3 className="font-extrabold text-[32px] ml-[150px] my-[80px] max-xl:m-[0px]">Наши преимущества</h3>
                        <div className="flex mx-[150px] max-w-[1500px] max-xl:flex-col items-center">
                            <div className="flex flex-col w-[283px] items-center text-center mr-[11px]">
                                <Image className="py-[5px]" src={vector} alt='img-vector'></Image>
                                <p className=" py-[15px] font-roboto font-bold text-[18px] text-yellow-400">Широкий ассортимент металла</p>
                                <p className="font-roboto text-[18px] py-[5px]">В нашем каталоге вы найдете более 10 000 позиций металлопроката</p>
                            </div>
                            <div className="flex flex-col w-[283px] items-center text-center mr-[11px]">
                            <Image className="py-[5px]" src={vector} alt='img-vector'></Image>
                                <p className=" py-[15px] font-roboto font-bold text-[18px] text-yellow-400">Гибкие условия заказов</p>
                                <p className="font-roboto text-[18px] py-[5px]">Обеспечиваем клиентам гибкие условия как для оптовых, так и для розничных заказов</p>
                            </div>
                            <div className="flex flex-col w-[283px] items-center text-center mr-[11px]">
                            <Image className="py-[5px]" src={vector} alt='img-vector'></Image>
                                <p className=" py-[15px] font-roboto font-bold text-[18px] text-yellow-400">Современное оборудование </p>
                                <p className="font-roboto text-[18px]  w-[260px] py-[5px]">Передовые технологии и современное оборудование, что гарантирует высокую точность и качество</p>
                            </div>
                            <div className="flex flex-col w-[283px] items-center text-center mr-[11px]">
                            <Image className="py-[5px]" src={vector} alt='img-vector'></Image>
                                <p className=" py-[15px] font-roboto font-bold text-[18px] text-yellow-400">Быстрый сервис</p>
                                <p className="font-roboto text-[18px] py-[5px]">Закажите звонок и мы отзвоним вам в течении 10 минут </p>
                            </div>
        
                        </div>
        </div>
    )
}