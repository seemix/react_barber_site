export const headerAnimation = {
    hidden: {
        x: -10,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3, duration: 0.4, ease: 'easeInOut'  }
    })
};