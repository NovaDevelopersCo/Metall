import { FC, HTMLAttributes } from 'react';
import styles from "./metaButton.module.scss"

interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
  
}

const metaButton: FC<CustomButtonProps> = ({className}) => {
  return (
    <button className={styles["card-button"]}>
    {'>'}
  </button>
  );
};

export default metaButton;