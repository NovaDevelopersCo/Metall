
"use client"

import { useState } from 'react'
import styles from './Fittings.module.scss'
import RadioButton from './RadioButton/RadioButton'
import ItemsList1 from './ProductsLists/ItemsList1/ItemsList1'

export default function Fittings() {
    //
    const [isChecked, setIsChecked] = useState(false);
    const handleRadioChange = () => {
        setIsChecked(!isChecked);
    }
    //
    return (
        <>
        <div className={styles.mainContainer}>
            <h3 className={styles.fittingsTitle}>Арматура</h3>
            <div className={styles.commonItemsContainer}>
                <div className={styles.itemsFilters}>
                    <p className={styles.itemsFiltersTitle}>Фильтры</p>
                    <div>
                        <div className={styles.lengthContainer}>
                            <p className={styles.lengthContainerTitle}>Длина</p>
                            <div className={styles.lengthRadioContainer}>
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='6' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='11,7' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='бухты' />
                            </div>
                        </div>
                        <div className={styles.diameterContainer}>
                            <p className={styles.diameterContainerTitle}>Диаметр</p>
                            <div className={styles.diameterRadioContainer}>
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='6' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='8' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='10' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='12' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='14' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='16' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='18' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='20' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='22' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='25' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='28' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='32' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='36' />
                                <RadioButton checked={isChecked} onChange={handleRadioChange} label='40' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.itemsContainer}>
                    <div className={styles.itemsTypes}>
                        <div className={styles.itemsTypeContainerFirst}>
                            <p className={styles.itemsType}>Арматура гладкая А1</p>
                        </div>
                        <div className={styles.itemsTypeContainerSecond}>
                            <p className={styles.itemsType}>Арматура рифленая А3</p>
                        </div>
                        <div className={styles.itemsTypeContainerThird}>
                            <p className={styles.itemsType}>Арматура рифленая А3 А400</p>
                        </div>
                    </div>
                    <div className={styles.itemsList}>
                        <ItemsList1 />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

