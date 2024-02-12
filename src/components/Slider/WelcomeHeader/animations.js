export const headerAnimation = {
    hidden: {
        x: -10,
        opacity: 0,
        filter: 'blur(5px)',

    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        filter: 'blur(0)',
        transition: { delay: custom * 0.2, duration: 0.4, ease: 'easeInOut'  }
    })
};