import React from 'react'
import ScrollToTop from '../components/ScrollToTop';
import SignIn from '../components/SignIn';
import useToken from '../components/useToken';

const SigninPage = () => {
    const { token, setToken } = useToken();
    return (
        <>
            <ScrollToTop/>
            <SignIn setToken ={setToken}/>
        </>
    )
}

export default SigninPage;