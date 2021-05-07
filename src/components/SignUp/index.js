import { Container, FormWrap, Icon, FormContent, Form, 
    FormH1, FormLabel, FormInput, 
    FormButton, Text, TextLink } from './SignupElements'
import SignIn from "../SignIn";
import useToken from '../useToken';

const SignUp = () => {
    const { token, setToken } = useToken();
    // if(!token)
    // {
        // return(
           //  <SignIn setToken ={setToken}/>
        // );    
    // }
    return(
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">somos</Icon>
                    <FormContent>
                        <Form>
                            <FormH1>Regístrate</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required/>
                            <FormLabel htmlFor="for">Contraseña</FormLabel>
                            <FormInput type="password" required/>
                            <FormLabel htmlFor="for">Repite contraseña</FormLabel>
                            <FormInput type="password" required/>
                            <FormButton type="submit">Iniciar sesión</FormButton>
                            <Text>¿Ya te registraste? <TextLink to='/signin'>Ir a inicio de sesión</TextLink></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignUp;