export const blockAnimation = {
    hidden: {
        opacity: 0,
        y: -30,
        filter: 'blur(3px)',
        // scale: 1
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0)',
        // scale: 1,
        transition: { delay: custom * .4, duration: .8, ease: 'easeInOut' }
    })
};