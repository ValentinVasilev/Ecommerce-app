import React, { useState } from 'react'
import { Button, TextField, Alert } from "@mui/material";
import Link from "next/link";
import styles from '../../styles/account/sign-up.module.scss';
import Image from "next/image";
import SignUpImg from '../../assets/icons/sign-up.png';
import { useRouter } from 'next/router';
import axios from 'axios';


const SignUp = () => {


  const router = useRouter();


  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const RegisterUser = () => {

    if (password != confirmPassword) {
      alert('Passwords dont match');
    } else if (!password) {
      alert('Passwords is required!');
    }
    else if (!confirmPassword) {
      alert('Confirm password is required!');
    } else {
      try {
        axios.post('/api/user/register', {
          email: email,
          password: password,
          isAdmin: false,
        })
        setIsRegistered(!isRegistered);

        setTimeout(() => {
          router.push('/products')
        }, 1300)
      } catch (error) {
        console.log(error)
      }
    }

  }


  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.leftSide}>
          <div className={styles.imgContainer}>
            <Image src={SignUpImg} alt="sign in icon" />
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
            <TextField
              variant="outlined"
              sx={{ backgroundColor: 'transparent' }}
              label="Repeat Password"
              type="password"
              className={styles.inputFields2}
              onInput={(e) => setConfirmPassword((e.target as HTMLInputElement).value)}
            />
          </div>
          <Button
            onClick={() => RegisterUser()}
            variant="contained"
            color="primary"
            style={{
              width: '25%',
              alignSelf: 'center',
              margin: '4vh 0vh 0vh 0vh'
            }}>Sign Up</Button>
          <div style={{
            display: 'flex',
            fontSize: '12px',
            fontStyle: 'italic',
            padding: '2vh 0vh 0vh 1vh',
            marginBottom: '-1vh'
          }}>
            <p>You already have account ?</p>
            <Link href="/account/login">
              <p style={{
                fontStyle: 'normal',
                fontWeight: '500',
                marginLeft: '1vh',
                textDecoration: 'underline',
                cursor: 'pointer',
                color: 'blue'
              }}>Log In</p>
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
          {isRegistered && (<Alert severity="success" style={{ width: '50%', alignSelf: 'center', marginTop: '1vh' }}>Your Account is Successfully created!</Alert>)}
        </div>
      </div>
    </div >
  )
}

export default SignUp;
// & #x26A0;