import React from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';

import './Contacts.css';
import { useTranslation } from 'react-i18next';
import { blockAnimation } from '../../constants/animations';
import { motion } from 'framer-motion';
import { SectionHeader } from '../index';

const Contacts = () => {
    const { t } = useTranslation();
    return (
        <section id={'contacts'}>
            <div className={'section_caption'}>
                {/*<motion.h3*/}
                {/*    custom={2}*/}
                {/*    initial={'hidden'}*/}
                {/*    whileInView={'visible'}*/}
                {/*    variants={topAnimation}*/}
                {/*>LevelUP Barbershop*/}
                {/*</motion.h3>*/}
                {/*<motion.h2*/}
                {/*    custom={3.5}*/}
                {/*    initial={'hidden'}*/}
                {/*    whileInView={'visible'}*/}
                {/*    variants={titleAnimation}*/}
                {/*>{t('ourContacts')}*/}
                {/*</motion.h2>*/}
                {/*<motion.div*/}
                {/*    custom={2}*/}
                {/*    initial={'hidden'}*/}
                {/*    whileInView={'visible'}*/}
                {/*    variants={bottomAnimation}*/}
                {/*    className={'heading_line'}>*/}
                {/*</motion.div>*/}
                <SectionHeader caption={'ourContacts'}/>

                <div className={'cards_wrapper'}>
                    <motion.div
                        custom={2}
                        initial={'hidden'}
                        whileInView={'visible'}
                        variants={blockAnimation}
                        className={'contact_form'}>
                        <div className={'icon_wrapper'}>
                            <div><h3><LocationOnOutlinedIcon/></h3></div>
                            <div><h3>  {t('address')}</h3></div>
                        </div>
                        <h4>
                            {t('streetNumber')}
                        </h4>
                        <div className={'icon_wrapper'}>
                            <div><h3><PhoneIphoneOutlinedIcon/></h3></div>
                            <div><h3>{t('phone')}</h3></div>
                        </div>
                        <h4>
                            +(373) 60 233 555
                        </h4>
                        <div className={'icon_wrapper'}>
                            <div><h3><InstagramIcon/></h3></div>
                            <div><h3>Instagram</h3></div>
                        </div>
                        <h4>
                            <a target="_blank" rel="noreferrer"
                               href="https://www.instagram.com/lvlup_barbershop">@lvlup_barbershop</a>
                        </h4>
                        <div className={'icon_wrapper'}>
                            <div><h3><EventAvailableOutlinedIcon/></h3></div>
                            <div><h3>{t('workHours')}</h3></div>
                        </div>
                        <h4>{t('monSat')} </h4>
                        <h4> {t('sun')}
                        </h4>
                    </motion.div>
                    <motion.div
                        custom={2.5}
                        initial={'hidden'}
                        whileInView={'visible'}
                        variants={blockAnimation}
                        className={'map'}>
                        <iframe
                            title="GoogleMAP"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.0986813230234!2d27.892893!3d47.7795345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cb5f7549b92381%3A0xc81f8e9f0ebaa132!2sLevel%20Up%20Barbershop!5e0!3m2!1sen!2s!4v1669068548349!5m2!1sen!2s"
                            style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" width="100%" height="500">
                        </iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;