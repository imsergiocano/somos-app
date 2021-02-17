import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import SignUp from '../components/SignUp';
import useToken from '../components/useToken';

const SignupPage = () => {
    const { token, setToken } = useToken();
    return (
        <>
            <ScrollToTop/>
            <SignUp setToken ={setToken}/>
        </>
    )
}

export default SignupPage;