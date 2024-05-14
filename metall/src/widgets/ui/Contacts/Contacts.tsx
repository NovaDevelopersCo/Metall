
import Image from "next/image";
import documentIcon from '@/../../public/docIcon.svg'
import TelegramIcon from "@/../../public/telegramIcon.svg"
import WhatsAppIcon from '@/../../public/whatsappIcon.svg'

const Contacts: React.FC = () => {
    return (
        <div className="flex-col">
            <h3 className="text-2xl font-roboto-flex font-extrabold mb-14">Контакты</h3>
            <div className="flex gap-4">
                <div className="p-6 md:px-15 lg:px-8 lg:py-8 shadow-2xl">
                    <div>
                        <h3 className="text-2xl font-roboto-flex font-extrabold text-yellow-400 mb-4">Москва</h3>
                        <div className="mb-8">
                            <h3 className="text-lg font-roboto-flex font-extrabold mb-6">Отдел продаж</h3>
                            <h4 className="text-base font-roboto-flex mb-6">Адрес офиса: г. Москва, ул. Ленина, 25, офис 305</h4>
                            <h3 className="text-lg font-roboto-flex font-extrabold mb-6">Складские базы</h3>
                            <h4 className="text-base font-roboto-flex">Локация 1: г. Москва, Южное шоссе, 42, склад №5</h4>
                        </div>
                        <button className="text-base font-bold bg-yellow-400 text-gray-900 pt-4 pl-10 pb-4 pr-10 shadow-md rounded-lg">Заказать звонок</button>
                        <button className="text-base font-bold text-gray-900 pt-4 pl-11 pb-4 pr-11 border border-gray-900 ml-5 rounded-lg">Оставить заявку</button>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="shadow-lg rounded-lg">
                        <div className="p-6">
                            <h3 className="text-2xl font-roboto-flex font-extrabold text-yellow-400 mb-8">Реквизиты</h3>
                            <button className="text-base font-bold text-gray-900 border shadow-md rounded-lg pt-4 pl-7 pb-4 pr-14 bg-yellow-400 flex items-center justify-center"><Image className="mr-1.5" src={documentIcon} alt="docIcon"/>Скачать реквизиты</button>
                        </div>
                    </div>
                    <div className="shadow-lg rounded-lg">
                        <div className="p-6">
                            <h3 className="text-2xl font-roboto-flex font-extrabold text-yellow-400 mb-10">Цены</h3>
                            <button className="text-base font-bold text-gray-900 border shadow-md rounded-lg pt-4 pl-7 pb-4 pr-14 bg-yellow-400 flex items-center justify-center"><Image className="mr-1.5" src={documentIcon} alt="docIcon"/><p>Скачать прайс-лист</p></button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="shadow-lg rounded-lg pt-6 pr-12 pb-8 pl-8">
                        <h3 className="text-2xl font-roboto-flex font-extrabold text-yellow-400 mb-4">Почта</h3>
                        <h2 className="text-base font-roboto-flex">metal@gmail.com</h2>
                    </div>
                    <div className="shadow-lg rounded-lg pt-6 pr-10 pb-7 pl-8">
                        <h3 className="text-2xl font-roboto-flex font-extrabold text-yellow-400 mb-4">Телефон</h3>
                        <h2 className="text-base font-roboto-flex">+7 (499) 938-95-77</h2>
                    </div>
                    <div className="shadow-lg rounded-lg">
                        <div className="flex justify-center items-center space-x-4 pt-6 pr-24 pb-6 pl-24 mx-auto">
                            <Image src={TelegramIcon} alt="tgicon" width={47} height={47}/>
                            <Image src={WhatsAppIcon} alt="waicon" width={53} height={53}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
