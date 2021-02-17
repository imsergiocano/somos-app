import SignIn from "../SignIn";
import useToken from '../useToken';

const SignUp = () => {
    const { token, setToken } = useToken();
    if(!token)
    {
        return(
            <SignIn setToken ={setToken}/>
        );    
    }
    return(
        <>
            <p>Hello world</p>
        </>
    );
};

export default SignUp;