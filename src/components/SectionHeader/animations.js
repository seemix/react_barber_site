export const lefXAnimation = {
    hidden: {
        x: -20,
        opacity: 0,
        filter: 'blur(5px)',
        rotate: -90
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        filter: 'blur(0)',
        rotate: 0,
        transition: { delay: custom * 0.2, duration: 0.3, ease: 'easeInOut' }
    })
};

export const rightXAnimation = {
    hidden: {
        x: 30,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.1, duration: 0.25, ease: 'easeInOut' }
    })
}

export const captionAnimation = {
    hidden: { y: -10, opacity: 0, scale: .9 },
    visible: custom => ({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { delay: custom * .2, duration: .35, ease: 'easeInOut' }
    })
}