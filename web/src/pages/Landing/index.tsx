import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

import { Container, ContentWrapper, Location } from './styles'
import logoImg from '../../assets/images/logo.svg'

const Landing: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <img src={logoImg} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Pirassununga</strong>
          <span>São Paulo</span>
        </Location>

        <Link to="/app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </ContentWrapper>
    </Container>
  )
}

export default Landing
