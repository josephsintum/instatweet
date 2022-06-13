import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Button, Grid } from "@mui/material"
import Navbar from "../src/Navbar"
import Footer from "../src/Footer"

export default function Index() {
  return (
    <>
    <Navbar/>
    <Container maxWidth="lg">
        <Grid container alignItems="center">
        <Grid sm={12} md={8}>
          <img
            style={{
              width: "75%",
              height: "auto",
            }}
            src="/images/person_vr.jpg"
          ></img>
        </Grid>
        <Grid sm={12} md={4}>
          <Typography variant="h2">InstaTweet</Typography>
          <br />
          <Typography variant="p" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
          <br />
          <Button variant="outlined">Sign Up</Button>
        </Grid>
      </Grid>
    </Container>
    <Footer/>
    </>
  )
}
