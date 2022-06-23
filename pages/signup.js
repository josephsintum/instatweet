import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Footer from "../src/Footer"
import { css } from "@emotion/css"
import Navbar from "../src/Navbar"

export default function SignUp() {
  const [formValues, setFormValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [disableBtn, setDisableBtn] = React.useState(true)
  const [emailError, setEmailError] = React.useState(false)
  const [pwdError, setPwdError] = React.useState(false)

  // todo:
  //  validate data inform
  //  if false disable sign up button
  //  display error to form field

  React.useEffect(() => {
    for (let [_, value] of Object.entries(formValues)) {
      if (!value) {
        // todo: form validation
        setDisableBtn(true)
        return
      }
      setDisableBtn(false)
    }
  }, [formValues])

  let errMsg 
  let helperMsg = ""

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const formData = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    }

    // Regex
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const isValidPassword = /^[A-Za-z0-9]\w{7,14}$/

    // check all inputs
    if (data.getAll(event.currentTarget)) {
      helperMsg = "fields must be filled"
      errMsg = true

    } else if (isValidEmail.test(formData.email)) {/* set erros msg*/ }
    else if (isValidPassword.test(formData.password)) { /* set erros msg*/ }

    // call the backend function
    fetch("/api/signup", { method: "POST", body: JSON.stringify(formData) })
  }

  const updateForm = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))

    // validate password
    if (event.target.name === "password") {
      const isValidPassword = /^[A-Za-z0-9]\w{7,14}$/
      let isPwdValid = isValidPassword.test(formValues.password)
      setPwdError(!isPwdValid)
      // todo: disable signup button
    }

    // validate email
    if (event.target.name === "email") {
      const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      setEmailError(!isValidEmail.test(formValues.email))
      // todo: disable signup button
    }
  }

  return (
    <>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px  solid  #d0e1f0",
            padding: "6%",
            borderRadius: "10px",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  // error={errMsg}
                  // helperText={helperMsg}
                  value={formValues.firstName}
                  onChange={updateForm}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  value={formValues.lastName}
                  onChange={updateForm}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  error={emailError}
                  value={formValues.email}
                  onChange={updateForm}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={pwdError}
                  value={formValues.password}
                  onChange={updateForm}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disableBtn}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="/login"
                  variant="body2"
                  className={css`
                    text-decoration: none;
                  `}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
