
import Image from "next/image";
import documentIcon from '@/../../public/docIcon.svg'
import TelegramIcon from "@/../../public/telegramIcon.svg"
import WhatsAppIcon from '@/../../public/whatsappIcon.svg'
import styles from './Contacts.module.scss'
import Breadcrumbs from '@/entities/BreadCrumbs/ui/Breadcrumbs';

import MapLocation from "@/widgets/Contacts/ui/MapLocation/MapLocation";
import Feedback from "./Feedback/Feedback";


const Contacts: React.FC = () => {
    return (
        <>
            <div className={styles.ContactsContainer}>
                <Breadcrumbs breadcrumbs={[
                    { text: 'Главная', href: '/' },
                    { text: 'Контакты', href: '/services', isLink: false }
                ]} />
                <h3 className={styles.ContactsTitle}>Контакты</h3>
                <div className={styles.ContactsBlocksContainer}>
                    <div className={styles.AddressesBlock}>
                        <div className={styles.AddressBlockContainer}>
                            <h3 className={styles.AddressesCityTitle}>Москва</h3>
                            <div className={styles.AddressesCityTextContainer}>
                                <h3 className={styles.FirstAddressTitle}>Отдел продаж</h3>
                                <h4 className={styles.FirstAddressValue}>Адрес офиса: г. Москва, ул. Ленина, 25, офис 305</h4>
                                <h3 className={styles.SecondAddressTitle}>Складские базы</h3>
                                <h4 className={styles.SecondAddressValue}>Локация 1: г. Москва, Южное шоссе, 42, склад №5</h4>
                            </div>
                            <button className={styles.CallButton}>Заказать звонок</button>
                            <button className={styles.RequestButton}>Оставить заявку</button>
                        </div>
                    </div>
                    <div className={styles.PricesBlock}>
                        <div className={styles.RequisiteBlock}>
                            <div className={styles.RequisiteBlockInside}>
                                <h3 className={styles.RequisiteBlockInsideTitle}>Реквизиты</h3>
                                <button className={styles.RequisiteBlockInsideButton}><Image className={styles.DocImage} src={documentIcon} alt="docIcon"/>Скачать реквизиты</button>
                            </div>
                        </div>
                        <div className={styles.PriceBlock}>
                            <div className={styles.PriceBlockInside}>
                                <h3 className={styles.PriceBlockInsideTitle}>Цены</h3>
                                <button className={styles.PriceBlockInsideButton}><Image className={styles.DocImage} src={documentIcon} alt="docIcon"/><p>Скачать прайс-лист</p></button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.FeedbackDataBlock}>
                        <div className={styles.EmailContainer}>
                            <h3 className={styles.EmailContainerTitle}>Почта</h3>
                            <h2 className={styles.EmailContainerValue}>metal@gmail.com</h2>
                        </div>
                        <div className={styles.PhoneContainer}>
                            <h3 className={styles.PhoneContainerTitle}>Телефон</h3>
                            <h2 className={styles.PhoneContainerValue}>+7 (499) 938-95-77</h2>
                        </div>
                        <div className={styles.MessengersContainer}>
                            <div className={styles.MessengersContainerInside}>
                                <Image src={TelegramIcon} alt="tgicon" width={47} height={47}/>
                                <Image src={WhatsAppIcon} alt="waicon" width={53} height={53}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MapLocation />
            <Feedback />
        </>
    )
}

export default Contacts;
