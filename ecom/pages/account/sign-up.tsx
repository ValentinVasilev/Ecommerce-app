import { Button, TextField } from "@mui/material";
import React from "react";
import styles from '../../styles/account/sign-up.module.scss';


const SignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.leftSide}>
          <p style={{ alignSelf: 'center', fontSize: '30px' }}>Sign up form</p>
          <div className={styles.form}>
            {/* <input placeholder="Email" className={styles.inputFields} /> */}
            <TextField
              variant="outlined"
              sx={{ backgroundColor: 'transparent' }}
              label="Email"
              className={styles.inputFields2}
            />
            <TextField
              variant="outlined"
              sx={{ backgroundColor: 'transparent', margin: '5vh 0vh 5vh 0vh' }}
              label="Password"
              className={styles.inputFields2}
            />
            <TextField
              variant="outlined"
              sx={{ backgroundColor: 'transparent' }}
              label="Repeat Password"
              className={styles.inputFields2}
            />
          </div>
          <Button variant="contained" style={{ width: '25%', alignSelf: 'center', margin: '4vh 0vh 0vh 0vh', backgroundColor: 'rgba(240, 46, 170, 0.2)', color: 'skyblue' }}>Sign Up</Button>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
// & #x26A0;