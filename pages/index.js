import * as React from "react"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import { Button, Grid } from "@mui/material"
import Navbar from "../src/Navbar"
import Footer from "../src/Footer"
import { RespImg } from "../src/respImg"
import Link from "../src/Link"
import { css } from "@emotion/css"


export default function Index() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid sm={12} md={7}>
            <img
              style={{
                width: "75%",
                height: "auto",
              }}
              src="/images/img2.png"
            ></img>
          </Grid>
          <Grid sm={12} md={5}>
            <Typography variant="h3" fontWeight={600}>InstaTweet</Typography>
            <br />
            <Typography variant="p" component="p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Typography>
            <br />
            <Link href="/signup" noLinkStyle className={css`text-decoration: none`}>
              <Button variant="outlined">Sign Up</Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container padding={2} spacing={4} maxWidth="lg" mt={8} textAlign="center">
          <Grid md={4} xs={12} padding={2}>
            <RespImg src="/images/img1.png" />
            <Typography variant="body2" color="initial">Nisi in officia Lorem velit minim Lorem
              ut eiusmod adipisicing aliquip voluptate labore. Dolore sit .</Typography>
          </Grid>
          <Grid md={4} xs={12} padding={2}>
            <RespImg src="/images/img5.png" />
            <Typography variant="body2" color="initial">Nisi in officia Lorem velit minim Lorem
              ut eiusmod adipisicing aliquip voluptate labore. Dolore sit .</Typography>
          </Grid>
          <Grid md={4} xs={12} padding={2}>
            <RespImg src="/images/img6.png" />
            <Typography variant="body2" color="initial">Nisi in officia Lorem velit minim Lorem
              ut eiusmod adipisicing aliquip voluptate labore. Dolore sit .</Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
