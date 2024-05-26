
"use client"

import { useState } from "react";
import RadioInput from "../RadioInput/RadioInput";
import styles from './Feedback.module.scss'

const Feedback: React.FC = () => {
    //
    const [isChecked, setIsChecked] = useState(false);

    const handleRadioChange = () => {
        setIsChecked(!isChecked);
    };
    //
    return (
        <div className={styles.FeedbackContainer}>
            <h3 className={styles.FeedbackTitle}>Обратная связь</h3>
            <div className={styles.InputsCommonContainer}>
                <div className={styles.FirstInputContainer}>
                    <input className={styles.NameInput} type="text" placeholder="Ваше имя и фамилия"/>
                    <input className={styles.EmailInput} type="text" placeholder="Ваш e-mail"/>
                    <div>
                        <select className={styles.SelectPhoneNumber} name="countryCode" id="countryCodeSelect">
                            <option value="+1">+1</option>
                            <option value="+7">+7</option>
                        </select>
                        <input className={styles.PhoneNumberInput} type="tel" placeholder="555 555-1234"/>
                    </div>
                </div>
                <div className={styles.SecondInputContainer}>
                    <div className={styles.MessageInputContainer}>
                        <div className={styles.TextareaContainer}>
                            <textarea className={styles.Textarea} name="messageForm" id="message" placeholder="Ваше сообщение"></textarea>
                        </div>
                        <div className={styles.RadioInputContainer}>
                            <RadioInput checked={isChecked} onChange={handleRadioChange} label="Отправляя форму, вы даете согласие на обработку персональных данных." />
                        </div>
                    </div>
                    <div className={styles.sendButtonContainer}>
                        <button className={styles.SendButton}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feedback;

