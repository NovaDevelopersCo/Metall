import Clock from "@/shared/ui/icons/Clock"
import styles from './BurgerMenu.module.scss'
import CloseBtn from "@/shared/ui/icons/CloseBtn"
const BurgerMenu = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.Menu}>
                <div className={styles.address}>
                    <a href='https://maps.google.com/?g=55.745875,37.578137'>
                        Адрес: Смоленская улица 39, Москва
                    </a>
                </div>
                <div className={styles.clockBlock}>
                    <Clock />
                    <span>Пн. - Пт.: 9:00 - 18:00</span>
                </div>
                <a className={styles.contactInfo} href='tel:+7 (499) 938-95-77'>+7 (499) 938-95-77</a>
                <a className={styles.contactInfo} href='mailto:metal@gmail.com'>metal@gmail.com</a>
            </div>
        </div>
    )
}
export default BurgerMenu