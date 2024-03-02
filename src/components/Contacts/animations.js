export const blockAnimation = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * .3, duration: .6, ease: 'easeInOut' }
    })
};