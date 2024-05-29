import React from 'react';
import styles from './PagesMenu.module.scss';
import CloseBtn from '@/shared/ui/icons/CloseBtn';
interface BurgerMenuProps {
    setHideOrShow: React.HTMLAttributes<HTMLDivElement>;
    isOpen: boolean;
    handleMenu: () => void;
}

const PagesMenu: React.FC<BurgerMenuProps> = ({ setHideOrShow, isOpen, handleMenu }) => {
    return (
        <>
            <div className={styles.Container} style={setHideOrShow}>
                <div className={styles.Menu}>
                    <button className={styles.Close} onClick={handleMenu}>
                        <CloseBtn />
                    </button>
                    <ul className={styles.Pages}>
                        <li>
                            <a href='#'>Каталог товаров</a>
                        </li>
                        <li>
                            <a href='#'>О нас</a>
                        </li>
                        <li>
                            <a href='#'>Услуги</a>
                        </li>
                        <li>
                            <a href='#'>Контакты</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default PagesMenu;
