import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../src/Navbar';
import Footer from '../src/Footer';
import {useState,useEffect} from "react"
import {db} from "../src/db/dbClient"
import {collection, getDocs, addDoc, updateDoc, doc, deleteDoc} from "firebase/firestore"


const theme = createTheme();

export default function SignIn() {


  //initialising states___________________________________________________________________________
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db,"Users")
  const [formValues, setFormValues] = React.useState({
      email: "",
      password: "",
    })
  const [disableBtn, setDisableBtn] = React.useState(true)
  const [emailError, setEmailError] = React.useState(false)
  const [pwdError, setPwdError] = React.useState(false)


    //useEffectHook to get data from database_____________________________________________________
  useEffect(()=>{

    const getUsers = async()=>{
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    }
    getUsers()
  }, [])

  console.log(users);

  // todo:
  //  validate data inform
  //  if false disable sign up button
  //  display error to form field


  React.useEffect(() => {
      if (formValues.email!="" && formValues.password!="" && pwdError==false && emailError==false) {
        // todo: form validation
        setDisableBtn(false)
      }else{
        setDisableBtn(true)
      }
      
    
  }, [formValues])


  const updateForm = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
    
    console.log(event.target.name);
    // validate password
    if (event.target.name === "password") {
      const isValidPassword = /^[A-Za-z0-9]\w{7,14}$/
      let isPwdValid = isValidPassword.test(formValues.password)
      setPwdError(!isPwdValid)
      // todo: disable signup button
    }

    // validate email
    else if (event.target.name === "email") {
      const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      let isEmailValid = isValidEmail.test(formValues.email)
      setEmailError(!isEmailValid)
      // todo: disable signup button
    }
  }


  const handleLogin =()=>{
    const userExists = users.some((user)=>{
    console.log(user.email);
    console.log(formValues.email);
    console.log(user.password);
    console.log(formValues.password);
      
     return user.email == formValues.email && user.password == formValues.password;
    })
    
    console.log(userExists);
    if(userExists){

    }else{
      const errDiv = document.querySelector(".wrong-entries")
      errDiv.style.display = "block"
    }
  }


  return (
    <>
    <Navbar/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 9,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #d0e1f0',
            padding: "6%",
            borderRadius: "10px",
          }}
          
        >
          <Avatar sx={{ m: 1, bgcolor: '#1F85DE' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Typography component="h1" variant="h5" display="none">
            Reset password
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1 }}>
          <div className="wrong-entries">
            Wrong email and password combination
          </div>
          <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter Email"
              name="email"
              autoComplete="email"
              autoFocus
              error={emailError}
              // value={title}
              onChange={updateForm}
            />
             
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              error={pwdError}
              // value={title}
              autoComplete="current-password"
              onChange={updateForm}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disableBtn}
              onClick = {handleLogin}
            >
              Log In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, display:'none' }}
            >
              SEND
            </Button>
            <Grid container >
              <Grid item xs>
                <Link href="#" variant="body2" fontSize={"0.7rem"}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" fontSize={"0.7rem"}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
    <Footer/>
    </>
  );
}