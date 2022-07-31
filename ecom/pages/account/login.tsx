import React, { useState, useEffect } from 'react'
import { Button, TextField, Alert } from "@mui/material";
import Link from "next/link";
import styles from '../../styles/account/sign-up.module.scss';
import Image from "next/image";
import LogInImg from '../../assets/icons/login.png';
import { useRouter } from 'next/router';
import axios from 'axios';
import { logIn, logOut, selectAccount } from '../../utils/app/features/account/accountSlice';
import { useAppDispatch, useAppSelector } from '../../utils/app/hooks';

const LogIn = () => {


  const router = useRouter();

  const dispatch = useAppDispatch()


  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState('');

  const user = useAppSelector(selectAccount);

  // useEffect(() => {
  //   setIsLoading(!isLoading);
  // }, [isLoading])
  // useEffect(() => {
  //   if (user.length >= 1) {
  //     router.push('/')
  //   }
  // }, [user])

  const LoginUser = () => {

    // if (password != confirmPassword) {
    //   alert('Passwords dont match');
    // } else if (!password) {
    //   alert('Passwords is required!');
    // }
    // else if (!confirmPassword) {
    //   alert('Confirm password is required!');
    // } else {
    //  
    // }


    try {
      axios.post('/api/user/login', {
        email: email,
        password: password,
      })
        .then(data => data)
        .then(result => {
          dispatch(logIn(result.data))
          console.log('THE RESULT', result)
          setIsLoading(!isLoading)
        }).catch(data => {
          if (data.response.status != 200)
            setError(data.response.data.message)
        })

      setTimeout(() => {
        setIsLoading(false)
        console.log('Is loadnig - after', isLoading)
      }, 1000)
    }
    catch (error) {
      console.log(error)
    }

  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.formInnerContainer}>
          <div className={styles.imgContainer}>
            <Image src={LogInImg} alt="sign in icon" />
          </div>
          <p style={{ alignSelf: 'center', color: 'red', width: '50%' }}>{error ? <Alert variant='standard' severity="error" color='error'>{error}</Alert> : null}</p>
          <div className={styles.form}>
            <TextField
              variant="outlined"
              sx={{ backgroundColor: 'transparent' }}
              label="Email"
              className={styles.inputFields}
              onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            />
            <TextField
              variant="outlined"
              sx={{ backgroundColor: 'transparent', margin: '5vh 0vh 5vh 0vh' }}
              label="Password"
              type="password"
              className={styles.inputFields}
              onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
            />
          </div>
          <Button
            onClick={() => LoginUser()}
            variant="contained"
            color="primary"
            style={{
              width: '25%',
              alignSelf: 'center',
              margin: '4vh 0vh 0vh 0vh'
            }}>{isLoading ? 'Loading...' : 'Log in'}</Button>

          <div style={{
            display: 'flex',
            fontSize: '12px',
            fontStyle: 'italic',
            padding: '2vh 0vh 0vh 1vh',
            marginBottom: '-1vh'
          }}>
            <p>You don&lsquo;t have account ?</p>
            <Link href="/account/signup">
              <p style={{
                fontStyle: 'normal',
                fontWeight: '500',
                marginLeft: '1vh',
                textDecoration: 'underline',
                cursor: 'pointer',
                color: 'blue'
              }}>Sign up</p>
            </Link>
          </div>
          <div style={{
            display: 'flex',
            fontSize: '12px',
            fontStyle: 'italic',
            padding: '0vh 0vh 0vh 1vh'
          }}>
            <p>You forgot your password ?</p>
            <Link href="/account/recovery">
              <p style={{
                fontStyle: 'normal',
                fontWeight: '500',
                marginLeft: '1vh',
                textDecoration: 'underline',
                cursor: 'pointer',
                color: 'blue'
              }}>Recover</p>
            </Link>
          </div>
        </div>
      </div>
      {/* <p>{user[0].user.email}</p> */}

    </div >
  )
}

export default LogIn;
// & #x26A0;