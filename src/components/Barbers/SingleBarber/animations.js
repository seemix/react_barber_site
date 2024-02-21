export const blockAnimation = {
    hidden: {
        opacity: 0,
        y: -20,
        filter: 'blur(3px)'
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0)',
        transition: { delay: custom * .2, duration: .35, ease: 'easeInOut' }
    })
};