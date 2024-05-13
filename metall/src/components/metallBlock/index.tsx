"use client"
import React, { useState } from 'react';
import { MetallInfo } from './metaInfo';

interface MetallBlockProps {
  metallInfo: MetallInfo;
}

const MetallBlock: React.FC<MetallBlockProps> = ({ metallInfo }) => {
  const { title, price, imageUrl, sizes, types } = metallInfo;
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);
  const typeNames: string[] = ['Тип 1', 'Тип 2'];
  
  const onClickAdd = () => {
    const item = {
      title,
      price,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    console.log("Добавлено в корзину:", item);
  };

  return (
    <div className="metall-block-wrapper bg-white p-4 m-2 shadow-md">
      <div className="metall-block flex flex-col h-full">
        <div className="metall-block__content flex-grow">
          <img className="metall-block__image w-full" src={imageUrl} alt="metall" />
          <h4 className="metall-block__title text-black">{title}</h4>

          <div className="metall-block__selector flex justify-between">
            <ul className="list-none p-0">
              {types.map((typeId: number) => (
                <li
                  key={typeId}
                  onClick={() => setActiveType(typeId)}
                  className={`cursor-pointer ${activeType === typeId ? 'font-bold' : ''}`}
                >
                  {typeNames[typeId]}
                </li>
              ))}
            </ul>
            <ul className="list-none p-0">
              {sizes.map((size: number, i: number) => (
                <li
                  key={i}
                  onClick={() => setActiveSize(i)}
                  className={`cursor-pointer ${activeSize === i ? 'font-bold' : ''}`}
                >
                  {size}cm
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="metall-block__bottom flex justify-between items-center">
          <div className="metall-block__price text-black">от {price} ₽</div>
          <button onClick={onClickAdd} className="button button--outline button--add flex items-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить в корзину</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MetallBlock;
