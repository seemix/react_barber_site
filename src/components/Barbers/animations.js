export const blockAnimation = {
    hidden: {
        opacity: 0,
        y: -30,
        filter: 'blur(2px)',
        scale: .95
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0)',
        scale: 1,
        transition: { delay: custom * .4, duration: .8, ease: 'easeInOut' }
    })
};