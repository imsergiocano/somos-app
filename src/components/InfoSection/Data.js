import Img1 from '../../images/svg-1.svg'
import Img2 from '../../images/svg-2.svg'
import Img3 from '../../images/svg-3.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Somos.',
    headLine: 'Un grupo de entusiastas',
    description: 'Apasionados que combina deporte con tecnología.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: Img1,
    alt: 'Car',
    dark: false,
    primary: true,
    darkText: true,
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Ten el control total de tu',
    headLine: 'Plan',
    description: 'Haz todos los cambios que necesites para lograr tus objetivos.',
    buttonLabel: 'Learn more',
    imgStart: true,
    img: Img2,
    alt: 'login',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Planea sin',
    headLine: 'preocuparte',
    description: 'Encárgate de seleccionar tu objetivo y nosotros nos encargamos del resto.',
    buttonLabel: 'Start now',
    imgStart: false,
    img: Img3,
    alt: 'Paper',
    dark: false,
    primary: false,
    darkText: true,
};