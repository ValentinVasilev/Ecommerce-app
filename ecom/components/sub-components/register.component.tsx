import React, { useState } from "react";
import { TextField } from "@mui/material";
import styles from '../../styles/sub-components/register.component.module.scss';
import { useRouter } from "next/router";

// type RegisterProps = {
//   open: boolean,
//   handleClose: boolean,
// }


const Register = () => {

  const router = useRouter();


  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const RegisterUser = () => {

    if (password != confirmPassword) {
      alert('Password don`t match')
    } else {
      alert('User successfully registered!')

      setTimeout(() => {
        router.push('/products')
      }, 1000)
    }


  }


  return (
    <div className={styles.registerContainer}>
      <p className={styles.title}>Register your new account</p>
      <div className={styles.registerWrapper}>
        <div className={styles.inputFields}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          />
        </div>
        <div className={styles.inputFields}>
          <TextField
            type="password"
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
          />
        </div>
        <div className={styles.inputFields}>
          <TextField
            type="password"
            id="outlined-basic"
            label="Repeat Password"
            variant="outlined"
            fullWidth
            onInput={(e) => setConfirmPassword((e.target as HTMLInputElement).value)}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.registerButton} onClick={() => RegisterUser()}>Register</button>
        </div>

      </div>
    </div>
  )
}

export default Register;