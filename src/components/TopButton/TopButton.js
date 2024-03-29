import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { arrowUpAnimation } from './animations.js';
import css from './TopButton.module.css';

const TopButton = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', updatePosition);

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);
    const scrollToTop = () => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {scrollPosition > 100 &&
                <motion.button className={css.arrow_up}
                               onClick={scrollToTop}
                               variants={arrowUpAnimation}
                               exit={'quit'}
                               whileHover={'hover'}
                               whileTap={'tap'}
                >
                    <FaArrowUp size={'0.9em'}/>
                </motion.button>
            }

        </>
    );
};

export default TopButton;