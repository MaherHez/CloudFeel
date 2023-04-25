import React from 'react'
import styled from 'styled-components'

const StyledWorkBox = styled.div`
height: 38rem;
width:32rem;
background-color: white;
border: 2px black solid;
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;;`;



function Workbox() {
  return (
    <StyledWorkBox></StyledWorkBox>
  )
}

export default Workbox