"use client"
import React, { useState } from 'react';

interface MetallBlockProps {
  metallInfo: {
    title: string;
    price: number;
    imageUrl: string;
    sizes: string[];
    types: string[];
  };
}

const MetallBlock: React.FC<MetallBlockProps> = ({ metallInfo }) => {

  const { title, price, imageUrl, sizes, types } = metallInfo;

  const onClickAdd = () => {
    const item = {
      title,
      price,
      imageUrl,
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
            </ul>
          </div>
        </div>
          <button onClick={onClickAdd} className="button button--outline button--add flex items-center">
            <span>Добавить в корзину</span>
          </button>
        </div>
      </div>
  );
}

export default MetallBlock;
