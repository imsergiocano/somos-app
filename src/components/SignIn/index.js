import React, { useState } from 'react'
import { Container, FormWrap, Icon, FormContent, 
  Form, FormH1, FormLabel, FormInput, 
  FormButton, Text, TextLink } from './SigninElements'

async function loginUser(credentials) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  };
  return fetch('http://localhost:8080/login', requestOptions)
  .then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('token');
}

const SignIn = ( { setToken } ) => {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
      e.preventDefault();
      const token = await loginUser({
        username,
        password
      });
      setToken(token);
    }
    
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">somos</Icon>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            <FormH1>Inicia sesión</FormH1>
                            <FormLabel htmlFor="for">Email</FormLabel>
                            <FormInput type="email" required onChange={e => setUserName(e.target.value)}/>
                            <FormLabel htmlFor="for">Contraseña</FormLabel>
                            <FormInput type="password" required onChange={e => setPassword(e.target.value)}/>
                            <FormButton type="submit">Iniciar sesión</FormButton>
                            <TextLink>¿Olvidaste tu contraseña?</TextLink>
                            <Text>¿No tienes cuenta? <TextLink to='/signup'>Regístrate</TextLink></Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;