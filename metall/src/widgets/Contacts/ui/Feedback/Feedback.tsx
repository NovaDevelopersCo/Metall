
"use client"

import { useState } from "react";
import RadioInput from "../RadioInput/RadioInput";

const Feedback: React.FC = () => {
    //
    const [isChecked, setIsChecked] = useState(false);

    const handleRadioChange = () => {
        setIsChecked(!isChecked);
    };
    //
    return (
        <div className="pt-20 pr-36 pb-28 pl-36">
            <h3 className="text-2xl font-roboto-flex font-extrabold text-yellow-400 mb-8">Обратная связь</h3>
            <div className="flex flex-row">
                <div className="flex flex-col gap-4 mt-0 mr-10 pb-10 pl-0">
                    <input className="border border-gray-200 pt-5 pr-72 pb-5 pl-5 text-base font-medium font-roboto text-gray-800" type="text" placeholder="Ваше имя и фамилия"/>
                    <input className="border border-gray-200 pt-5 pr-96 pb-5 pl-5 text-base font-medium font-roboto text-gray-800" type="text" placeholder="Ваш e-mail"/>
                    <div>
                        <select className="p-2 mr-4  bg-white" name="countryCode" id="countryCodeSelect">
                            <option value="+1">+1</option>
                            <option value="+7">+7</option>
                        </select>
                        <input className="p-2" type="tel" placeholder="555 555-1234"/>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mb-4">
                        <div className="mb-6">
                            <textarea className="border border-solid border-gray-200 pt-3.5 pr-80 pb-20 pl-5 text-base font-medium font-roboto text-gray-800" name="messageForm" id="message" placeholder="Ваше сообщение"></textarea>
                        </div>
                        <div className="flex align-items">
                            <RadioInput checked={isChecked} onChange={handleRadioChange} label="Отправляя форму, вы даете согласие на обработку персональных данных." />
                        </div>
                    </div>
                    <button className="rounded-lg bg-yellow-300 font-inter text-base font-semibold pt-3.5 pr-12 pb-4 pl-12  mt-5  w-183  ml-auto">Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Feedback;

