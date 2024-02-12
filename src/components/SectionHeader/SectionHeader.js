import { RiScissorsLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import { captionAnimation, leftXAnimation, rightXAnimation } from './animations.js';
import { assets, animation } from '../../assets/common';
import css from './SectionHeader.module.css';

const SectionCaption = ({ caption }) => {
    const { t } = useTranslation();
    return (
        <>
            <div className={css.caption_top_line}>
                <motion.h4
                    {...animation}
                    custom={3}
                    variants={leftXAnimation}
                >
                    <RiScissorsLine size={'1.3em'}/>
                </motion.h4>
                <motion.h4
                    {...animation}
                    custom={4}
                    variants={rightXAnimation}
                >
                    {assets.barbershopName}
                </motion.h4>
            </div>
            <motion.h2
                {...animation}
                custom={3}
                variants={captionAnimation}
            >
                {t(`${caption}`)}
            </motion.h2>
        </>
    );
};

export default SectionCaption;