import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { TextField } from '@mui/material'
/*Mui Icons*/
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GoogleIcon from '@mui/icons-material/Google';
/*----------------------------*/
/*Css*/
import { MyButton, MyContainer, MyButton2 } from '../style/Muistyled';
import { Styledh1, StyledDiv } from '../style/StyledCss';
import '../style/login.css';
/*----------------------------*/
import { useForm } from '../hooks/useForm';
import { InicioGoogleAsync, loginCorreoContAsync } from '../actions/actionLogin';
import { useDispatch } from 'react-redux';



const Login = () => {

  
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    email: '',
    contraseña: ''
  });

  const { email, contraseña } = values;


   const handleLogin = (e) => {
     e.preventDefault()
     dispatch(loginCorreoContAsync(email, contraseña))
   }

   const handleGoogleAsync = () => { 
     dispatch(InicioGoogleAsync())
   }

  // const handleFacebookAsync = () => {
  //   dispatch(loginFacebookAsync())
  // }

  return (
    <div className='bg'>
      <MyContainer maxWidth="xs">
        <StyledDiv>
          <Styledh1>Inicio de sesion</Styledh1>
          <Container>
            <Row>
              <div>
                <form onSubmit={handleLogin}>
                  <TextField id="user" label="Usuario" variant="filled" name='email'
                    onChange={handleInputChange} />
                  <TextField id="password" label="Contraseña" variant="filled" type="password"
                    name='contraseña'
                    onChange={handleInputChange}/>
                </form>
              </div>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <MyButton type='submit' variant="contained">
                  Iniciar Sesion
                </MyButton>
              </Col>
              <Col>
                <MyButton variant="contained" href='/registro'>
                  Registrarse
                </MyButton>
              </Col>
            </Row>
            <div>
              <Styledh1>Inciar Sesion con:</Styledh1>
            </div>
            <hr />
          </Container>

          <Container>
            <Row >
              <Col >
                <MyButton aria-label="hello" startIcon={<AccountCircleIcon />}>
                  invitado
                </MyButton>
              </Col>
              <Col >
                <MyButton2 variant="contained" startIcon={<GoogleIcon />} onClick={()=> handleGoogleAsync()}>
                  Google
                </MyButton2>
              </Col>
            </Row>
          </Container>
        </StyledDiv>
      </MyContainer>
    </div>
  )
}

export default Login