import React, { useState } from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
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
                            <Text>¿Olvidaste tu contraseña?</Text>
                            <Text>¿No tienes cuenta? Regístrate</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn;