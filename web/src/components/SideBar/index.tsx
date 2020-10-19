import React from 'react'
import { useHistory } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'
import { Container, Footer } from './styles'
import mapMarkerImg from '../../assets/images/map-marker.svg'

const SideBar: React.FC = () => {
  const { goBack } = useHistory()

  return (
    <Container>
      <img src={mapMarkerImg} alt="Happy" />

      <Footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </Footer>
    </Container>
  )
}

export default SideBar
