"use client";

import { useEffect, useRef } from 'react';
import ArrowUp from '@/shared/ui/socials/ArrowUp';
import styles from './ScrollArrow.module.scss';

const ScrollArrow = () => {
    const arrowButtonRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        const arrowButton = arrowButtonRef.current;
        if (arrowButton) {
            arrowButton.addEventListener('click', scrollToTop);
            return () => {
                arrowButton.removeEventListener('click', scrollToTop);
            };
        }
    }, []);

    return (
        <div ref={arrowButtonRef} className={styles.Arrow}>
            <ArrowUp />
        </div>
    );
};

export default ScrollArrow;