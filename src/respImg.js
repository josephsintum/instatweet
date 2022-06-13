import { css } from "@emotion/css"
import React from "react"

export const RespImg = ({ src, alt="" }) => <img src={src} className={css`
  height: auto;
  width: 100%;
`} alt={alt} />