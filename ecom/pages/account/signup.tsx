import React, { useEffect, useState } from 'react'
import { Button, TextField, Alert } from "@mui/material";
import Link from "next/link";
import styles from '../../styles/account/sign-up.module.scss';
import Image from "next/image";
import SignUpImg from '../../assets/icons/sign-up.png';
import { useRouter } from 'next/router';
import axios from 'axios';
import { strengthColor, strengthIndicator } from '../../utils/password-strength';

const SignUp = () => {


  const router = useRouter();


  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordStrength, setPasswordStrength] = useState<number>(0);
  const [passwordLevel, setPasswordLevel] = useState();
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isRegistered, setIsRegistered] = useState<boolean>(false);


  const validatePasswordStrength = (value: any) => {
    const temp = strengthIndicator(value);
    setPasswordStrength(temp);
    setPasswordLevel(strengthColor(temp));
  };


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
        <div className={styles.formInnerContainer}>
          <div className={styles.imgContainer}>
            <Image src={SignUpImg} alt="sign in icon" />
          </div>
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
              onInput={(e) => {
                setPassword((e.target as HTMLInputElement).value);
              }}
              onChange={(e) => validatePasswordStrength((e.target as HTMLInputElement).value)}
            />
            <TextField
              variant="outlined"
              sx={{ backgroundColor: 'transparent' }}
              label="Repeat Password"
              type="password"
              className={styles.inputFields}
              onInput={(e) => setConfirmPassword((e.target as HTMLInputElement).value)}
            />
            {passwordStrength !== 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '35%' }}>
                <p
                  style={{ backgroundColor: passwordLevel?.color, width: 85, height: 8, borderRadius: '7px' }}
                />
                <p style={{ fontFamily: 'Montserrat', fontSize: '20px' }}>{passwordLevel?.label}</p>
              </div>
            )
            }
          </div >
          <Button
            onClick={() => RegisterUser()}
            variant="contained"
            color="primary"
            style={{
              width: '70%',
              alignSelf: 'center',
              margin: '4vh 0vh 0vh 0vh',
              padding: '1vh'
            }}>Sign Up</Button>
          <div style={{
            minWidth: '80%',
            alignSelf: 'center',
            margin: '4vh 0vh 0vh 0vh',
            padding: '1vh',
            fontSize: '12px',
            display: 'flex',
            // justifyContent: 'space-around'
          }}>
            <p>By Signing up, you agree to our</p>
            <p style={{ color: 'blue', padding: '0px 5px 0px 5px', fontStyle: 'italic' }}>Terms of Service</p>
            <p>and </p>
            <p style={{ color: 'blue', padding: '0px 5px 0px 5px', fontStyle: 'italic' }}>Privacy Policy</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <button className={styles.socialButtons}>Google</button>
            <button className={styles.socialButtons}>Facebook</button>
            <button className={styles.socialButtons}>Twitter</button>
          </div>
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
        </div >
      </div >
    </div >
  )
}

export default SignUp;
// & #x26A0;