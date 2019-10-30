import styled from 'styled-components'
import { Link } from '@peajs/router'
import React from 'react'
import logo from './logo.svg'

const Logo = styled.img`
  display: inline-block;
  height: 32px;
  vertical-align: middle;
`
const Name = styled.h1`
  display: inline-block;
  margin: 0 0 0 12px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
  vertical-align: middle;
`
const Wrapper = styled.div`
  position: relative;
  height: 64px;
  padding-left: 24px;
  overflow: hidden;
  line-height: 64px;
  background: #002140;
  transition: all 0.3s;
`

export default () => (
  <Link to="/">
    <Wrapper>
      <Logo src={logo} alt="logo" />
      <Name>Tie</Name>
    </Wrapper>
  </Link>
)
