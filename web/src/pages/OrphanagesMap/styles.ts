import styled from 'styled-components'
import { Popup, PopupProps } from 'react-leaflet'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  width: 100vw;

  aside {
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px;
    width: 440px;
  }

  .leaflet-container {
    z-index: 5;
  }

  a {
    align-items: center;
    background: #15c3d6;
    bottom: 40px;
    border-radius: 20px;
    display: flex;
    height: 64px;
    justify-content: center;
    position: absolute;
    right: 40px;
    transition: background-color 0.2s;
    width: 64px;
    z-index: 1000;

    &:hover {
      background: #17d6eb;
    }
  }
`

export const Header = styled.header`
  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
  }

  p {
    line-height: 28px;
    margin-top: 24px;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  line-height: 27px;

  strong {
    font-weight: 800;
  }
`

export const MarkerPopup = styled(Popup).attrs<PopupProps>(() => ({
  closeButton: false
}))`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
    max-width: 240px;
    min-width: 240px;
  }

  .leaflet-popup-content {
    align-items: center;
    color: #0089a5;
    display: flex;
    font-size: 20px;
    font-weight: bold;
    height: 56px;
    justify-content: space-between;
    margin: 8px 12px;
    position: relative;

    a {
      align-items: center;
      background: #15c3d6;
      border-radius: 12px;
      box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
      display: flex;
      height: 40px;
      justify-content: center;
      position: absolute;
      top: calc(50% - 21px);
      right: 0;
      width: 40px;
    }
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`
