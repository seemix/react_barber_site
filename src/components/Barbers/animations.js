export const blockAnimation = {
    hidden: {
        opacity: 0,
        // y: -30,
        filter: 'blur(5px)',
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0)',
        transition: { delay: custom * .4, duration: .8, ease: 'easeInOut' }
    })
};