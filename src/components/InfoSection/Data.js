import Img1 from '../../images/svg-1.svg'
import Img2 from '../../images/svg-2.svg'
import Img3 from '../../images/svg-3.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium cycling',
    headLine: 'Unlimited trainning with zero fees',
    description: 'Get access to our exclusive app that allows you to set unlimited trains without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart: false,
    img: Img1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited access',
    headLine: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
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
    topLine: 'Join our team',
    headLine: 'Creating an account is extremely easy',
    description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you´re ready to go.',
    buttonLabel: 'Start now',
    imgStart: false,
    img: Img3,
    alt: 'Paper',
    dark: false,
    primary: false,
    darkText: true,
};