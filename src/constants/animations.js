export const topAnimation = {
    hidden: {
        y: -20,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
};

export const bottomAnimation = {
    hidden: {
        y: 20,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
};

export const titleAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },

    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2 }
    })
};
export const blockAnimation = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2 }
    })
};