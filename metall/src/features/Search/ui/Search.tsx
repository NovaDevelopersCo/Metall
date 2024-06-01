import CloseBtn from '@/shared/ui/icons/CloseBtn';
import styles from './Search.module.scss'
interface SearchProps {
    setBlockOrNone: React.HTMLAttributes<HTMLDivElement>;
    isModal: boolean;
    onClose: () => void;
}

const Search: React.FC<SearchProps> = ({ setBlockOrNone, onClose }) => {
    return (
        <div className={styles.searchContainer} style={setBlockOrNone}>
            <div className={styles.searchContent}>
                <input
                    type='text'
                    className={styles.searchInput}
                    placeholder='ПОИСК...'
                />
                <button className={styles.Close} onClick={onClose}>
                    <CloseBtn />
                </button>
            </div>
        </div>
    )
}

export default Search;