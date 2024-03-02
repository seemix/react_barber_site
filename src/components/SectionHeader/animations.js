export const leftXAnimation = {
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
        transition: { delay: custom * .2, duration: .4, ease: 'easeInOut' }
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
        transition: { delay: custom * .1, duration: .45, ease: 'easeInOut' }
    })
}

export const captionAnimation = {
    hidden: { y: -10, opacity: 0, scale: .9 },
    visible: custom => ({
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { delay: custom * .2, duration: .55, ease: 'easeInOut' }
    })
}