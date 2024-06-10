import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export const BreadKroshki = () =>{
    const rout = usePathname().split('/')
    useEffect(()=>{},[rout])    



    return (
               <div className="flex w-[200px] text-roboto text-[18px] font-normal "><Link href='/' className="cursor-pointer">Главная</Link><span  className="mx-[12px]">—</span>
               {
                 <span className="text-yellow-400">{rout.map(href=> href==='aboutUs'?'О нас':'')}</span>
                }
              </div>        
        )
}