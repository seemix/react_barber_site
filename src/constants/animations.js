export const topAnimation = {
    hidden: {
        y: -20,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2, duration: 0.3, ease: 'easeInOut'  }
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
        transition: { delay: custom * 0.3, duration: 0.3, ease: 'easeInOut'  }
    })
};

export const headerAnimation = {
    hidden: {
        x: -70,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.3, duration: 0.3, ease: 'easeInOut'  }
    })
};

export const buttonAnimation = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2, duration: 0.3, ease: 'easeInOut'  }
    })
};
export const titleAnimation = {
    hidden: {
        x: -30,
        opacity: 0
    },

    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2, duration: 0.3, ease: 'easeInOut'  }
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
        transition: { delay: custom * 0.2, duration: 0.3, ease: 'easeInOut' }
    })
};

export const rightToLeftSlide = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * 0.2, duration: 0.5, ease: 'easeInOut'  }
    })
};