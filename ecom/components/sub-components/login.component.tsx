import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";

const Login = () => {

  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginHandler = async (email: string, password: string) => {

    try {
      const data = await axios.post('api/user/login', { email: email, password: password })
        .then(res => res.data)
        .then(data => {
          localStorage.setItem('login', JSON.stringify(data.user))
          // setTimeout(() => {
          //   router.push('/')
          // }, 1000)
          console.log('USER DATA')
        }
        )
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        />
      </div>
      <div>
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          fullWidth
          onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
          type="password"
        />
      </div>
      <div>
        <button onClick={() => loginHandler(email, password)}>Log in</button>
      </div>
    </div>
  )
}

export default Login;