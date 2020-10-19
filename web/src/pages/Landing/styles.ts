import styled from 'styled-components'

import backgroundImage from '../../assets/images/landing.svg'

export const Container = styled.div`
  align-items: center;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

export const ContentWrapper = styled.div`
  align-items: flex-start;
  background: url(${backgroundImage}) no-repeat 80% center;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  max-height: 670px;
  max-width: 1100px;
  position: relative;
  width: 100%;

  main {
    max-width: 350px;
    h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }
    p {
      font-size: 24px;
      line-height: 34px;
      margin-top: 40px;
    }
  }

  a {
    align-items: center;
    background: #ffd666;
    border-radius: 30px;
    bottom: 0;
    display: flex;
    height: 80px;
    justify-content: center;
    position: absolute;
    right: 0;
    transition: background-color 0.2s;
    width: 80px;

    &:hover {
      background: #96feff;
    }
  }
`

export const Location = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  line-height: 34px;
  position: absolute;
  right: 0;
  text-align: right;
  top: 0;
  strong {
    font-weight: 800;
  }
`
