'use client'
import React from 'react';
import styles from "./metallBlock.module.scss"
import Button from "@/shared/ui/Button/metaButton"
interface MetallBlockProps {
  metallInfo: {
    title: string;
    imageUrl: string;
  }[];
}

const MetallBlock: React.FC<MetallBlockProps> = ({ metallInfo }) => {

  const onClickAdd = (item: { title: string; imageUrl: string }) => {
    console.log("Добавлено в корзину:", item);
  };

  return (
    <div>
      <div className={styles.catalogHeader}>
        <h1 className={styles.catalogTitle}>КАТАЛОГ ТОВАРОВ МЕТАЛЛОПРОКАТА</h1>
        <button className={styles["list-button"]} onClick={() => console.log("Скачать прайс-лист")}>
          Скачать прайс-лист
        </button>
      </div>
      <div className={styles["card-container"]}>
        {metallInfo.map((metall, index) => (
          <div key={index} className={styles.card}>
            <img className={styles["card-image"]} src={metall.imageUrl} alt="photo" />
            <div className={styles["card-overlay"]}></div>
            <div className={styles["card-content"]}>
              <h4 className={styles["card-title"]}>{metall.title}</h4>
<Button/>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default MetallBlock;