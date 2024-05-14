import Image from 'next/image';
import styles from './Card.module.scss';

interface CardProps {
    img: string;
    title: string;
    text1: string;
    text2: string;
    highlightedText: string;
}

const Card: React.FC<CardProps> = ({ img, title, text1, text2, highlightedText }) => {
    const colorTextStyle = {
        color: '#FFC824',
    };

    const parts = text2.split(new RegExp(`(${highlightedText})`, 'g'));

    return (
        <div className={styles.CardBox}>
            <div className={styles.Card}>
                <h3>{title}</h3>
                <div className={styles.Describe}>
                    <p className={styles.Text1}>{text1}</p>
                    <Image className={styles.CardIcon} src={img} width={442} height={215} alt="Service" />
                </div>
                <p className={styles.Text2}>
                    {parts.map((part, index) => (
                        part === highlightedText ? (
                            <span key={index} style={colorTextStyle}>
                                {part}
                            </span>
                        ) : (
                            part
                        )
                    ))}
                </p>
            </div>
        </div>
    );
};

export default Card;
