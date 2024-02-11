import { ImScissors } from 'react-icons/im';
import { GiRazor } from 'react-icons/gi';
import { TfiBrushAlt } from 'react-icons/tfi';

export const servicesData = [
    {
        id: 1,
        // icon: 'bs bs-scissors-1',
        icon: <ImScissors/>,
        services: [
            {
                name: 'haircutStyle',
                duration: 45
            },
            {
                name: 'beardTrim',
                duration: 30
            },
            {
                name: 'haircutBeardTrim',
                duration: 60
            }
        ]
    },
    {
        id: 2,
        //  icon: 'bs bs-razor-2',
        icon: <GiRazor/>,
        services: [
            {
                name: 'shave',
                duration: 30
            },
            {
                name: 'beardTinting',
                duration: 20
            },
            {
                name: 'royalShave',
                duration: 30
            }
        ]
    },
    {
        id: 3,
        //icon: 'bs bs-hairbrush-1',
        icon: <TfiBrushAlt/>,
        services: [
            {
                name: 'faceWaxing1',
                duration: 10
            },
            {
                name: 'faceWaxing3',
                duration: 25
            },
            {
                name: 'hairStyling',
                duration: 20
            }
        ]
    }
]