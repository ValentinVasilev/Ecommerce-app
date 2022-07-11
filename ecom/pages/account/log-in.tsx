import React, { useState } from 'react'
import { Button, TextField, Alert } from "@mui/material";
import Link from "next/link";
import styles from '../../styles/account/sign-up.module.scss';
import Image from "next/image";
import LogInImg from '../../assets/icons/login.png';
import { useRouter } from 'next/router';
import axios from 'axios';
import { logIn } from '../../utils/app/features/account/accountSlice';
import { useAppDispatch, useAppSelector } from '../../utils/app/hooks';


const LogIn = () => {


  const router = useRouter();

  const dispatch = useAppDispatch()

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
        .then(result => dispatch(logIn(result.data)))

      // setTimeout(() => {
      //   router.push('/products')
      // }, 1300)

    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.leftSide}>
          <div className={styles.imgContainer}>
            <Image src={LogInImg} alt="sign in icon" />
          </div>
          <div className={styles.form}>
            <TextField
              variant="outlined"
              sx={{ backgroundColor: 'transparent' }}
              label="Email"
              className={styles.inputFields2}
              onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
            />
            <TextField
              variant="outlined"
              sx={{ backgroundColor: 'transparent', margin: '5vh 0vh 5vh 0vh' }}
              label="Password"
              type="password"
              className={styles.inputFields2}
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
            }}>Log in</Button>

          <div style={{
            display: 'flex',
            fontSize: '12px',
            fontStyle: 'italic',
            padding: '2vh 0vh 0vh 1vh',
            marginBottom: '-1vh'
          }}>
            <p>You don&lsquo;t have account ?</p>
            <Link href="/account/sign-up">
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
          </div></div>
      </div>
    </div >
  )
}

export default LogIn;
// & #x26A0;