import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import './Services.css';
import { topAnimation, titleAnimation, bottomAnimation, blockAnimation } from '../../constants/animations';

const Services = () => {
    const { t } = useTranslation();
    return (
        <div className={'services'} id={'services'}>
            <div className={'section_caption'}>
                <motion.h3
                    custom={2}
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={topAnimation}
                >LevelUP Barbershop
                </motion.h3>
                <motion.h2
                    custom={3.5}
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={titleAnimation}
                >{t('ourServices')}
                </motion.h2>
                <motion.div
                    custom={2}
                    initial={'hidden'}
                    whileInView={'visible'}
                    variants={bottomAnimation}
                    className={'heading_line'}>
                </motion.div>
                <div className={'cards_wrapper'}>
                    <motion.div
                        custom={2.5}
                        initial={'hidden'}
                        whileInView={'visible'}
                        variants={blockAnimation}
                        className={'card'}>
                        <div className={'price_icon_wrap'}>
                            <i className="bs bs-scissors-1"></i>
                        </div>
                        <div className={'price_item'}>
                            <h4>{t('haircutStyle')}
                                {/*<span className={'price'}>180 лей</span>*/}
                            </h4>
                            <span className={'time'}><AccessTimeIcon style={{ marginRight: '5px' }}
                                                                     fontSize={'18px'}/>45 {t('minutes')}</span>
                        </div>
                        <div className={'price_item'}>
                            <h4>{t('beardTrim')}
                                {/*<span className={'price'}>130 лей</span>*/}
                            </h4>
                            <span className={'time'}><AccessTimeIcon style={{ marginRight: '5px' }}
                                                                     fontSize={'18px'}/>30 {t('minutes')}</span>
                        </div>
                        <div className={'price_item'}>
                            <h4>{t('haircutBeardTrim')}
                                {/*<span className={'price'}>250 лей</span>*/}
                            </h4>
                            <span className={'time'}><AccessTimeIcon style={{ marginRight: '5px' }}
                                                                     fontSize={'18px'}/>60 {t('minutes')}</span>
                        </div>
                    </motion.div>
                    <motion.div
                        custom={3}
                        initial={'hidden'}
                        whileInView={'visible'}
                        variants={blockAnimation}
                        className={'card'}>
                        <div className={'price_icon_wrap'}>
                            <i className="bs bs-razor-2"></i>
                        </div>
                        <div className={'price_item'}>
                            <h4>{t('shave')}
                                {/*<span className={'price'}>150 лей</span>*/}
                            </h4>
                            <span className={'time'}><AccessTimeIcon style={{ marginRight: '5px' }}
                                                                     fontSize={'18px'}/>30 {t('minutes')}</span>
                        </div>
                        <div className={'price_item'}>
                            <h4>{t('beardTinting')}
                                {/*<span className={'price'}>100 лей</span>*/}
                            </h4>
                            <span className={'time'}><AccessTimeIcon style={{ marginRight: '5px' }}
                                                                     fontSize={'18px'}/>20 {t('minutes')}</span>
                        </div>
                        <div className={'price_item'}>
                            {/*<h4>Запись вне рабочих часов <span className={'price'}>100 лей</span></h4>*/}
                            <h4>{t('royalShave')}
                                {/*<span className={'price'}>100 лей</span>*/}
                            </h4>
                            <span className={'time'}><AccessTimeIcon style={{ marginRight: '5px' }}
                                                                     fontSize={'18px'}/>30 {t('minutes')}</span>
                        </div>
                    </motion.div>
                    <motion.div
                        custom={3.5}
                        initial={'hidden'}
                        whileInView={'visible'}
                        variants={blockAnimation}
                        className={'card'}>
                        <div className={'price_icon_wrap'}>
                            <i className="bs bs-hairbrush-1"></i>
                        </div>
                        <div className={'price_item'}>
                            <h4>{t('faceWaxing1')}
                                {/*<span className={'price'}>50 лей</span>*/}
                            </h4>
                            <span className={'time'}><AccessTimeIcon style={{ marginRight: '5px' }}
                                                                     fontSize={'18px'}/>10 {t('minutes')}</span>
                        </div>
                        <div className={'price_item'}>
                            <h4>{t('faceWaxing3')}
                                {/*<span className={'price'}>150 лей</span>*/}
                            </h4>
                            <span className={'time'}><AccessTimeIcon style={{ marginRight: '5px' }}
                                                                     fontSize={'18px'}/>25 {t('minutes')}</span>
                        </div>
                        <div className={'price_item'}>
                            <h4>{t('hairStyling')}
                                {/*<span className={'price'}>150 лей</span>*/}
                            </h4>
                            <span className={'time'}><AccessTimeIcon style={{ marginRight: '5px' }}
                                                                     fontSize={'18px'}/>20 {t('minutes')}</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Services;