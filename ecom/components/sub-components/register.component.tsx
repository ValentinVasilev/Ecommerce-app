import { TextField } from "@mui/material";
import React from "react";
import styles from '../../styles/sub-components/register.component.module.scss';
import { useRouter } from "next/router";

// type RegisterProps = {
//   open: boolean,
//   handleClose: boolean,
// }


const Register = () => {

  const router = useRouter();

  const RegisterUser = () => {
    // alert('User successfully registered!')
    setTimeout(() => {
      router.push('/products')
    }, 1000)
  }


  return (
    <div className={styles.registerContainer}>
      <p className={styles.title}>Register your new account</p>
      <div className={styles.registerWrapper}>
        <div className={styles.inputFields}>
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
        </div>
        <div className={styles.inputFields}>
          <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />
        </div>
        <div className={styles.inputFields}>
          <TextField id="outlined-basic" label="Repeat Password" variant="outlined" fullWidth />
        </div>
        <div className={styles.inputFields}>
          <button onClick={() => RegisterUser()}>Register</button>
        </div>

      </div>
    </div>
  )
}

export default Register;