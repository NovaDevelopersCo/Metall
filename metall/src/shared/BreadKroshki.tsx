import { usePathname } from "next/navigation"
import { useEffect } from "react"

export const BreadKroshki = () =>{
    const rout = usePathname().split('/')
    useEffect(()=>{},[rout])    
  
    return (
        <>
        <div className="flex flex-row">
        <div className="w-[200px] text-roboto text-[18px] font-normal">Главная <span  className="mx-[12px]">—</span>
            {
              <span className="text-yellow-400">{rout.map(href=> href==='aboutUs'?href:'')}</span>
            }
            </div>
        </div>
        </>
        )
}