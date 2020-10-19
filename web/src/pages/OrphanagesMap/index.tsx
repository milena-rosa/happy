import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Map, TileLayer, Marker } from 'react-leaflet'
import { FiArrowRight, FiPlus } from 'react-icons/fi'

import { Container, Header, Footer, MarkerPopup } from './styles'
import mapIcon from '../../utils/mapIcon'
import mapMarkerImg from '../../assets/images/map-marker.svg'

import api from '../../services/api'

interface Orphanage {
  id: number
  latitude: number
  longitude: number
  name: string
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('/orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

  return (
    <Container>
      <aside>
        <Header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Header>

        <Footer>
          <strong>Pirassununga</strong>
          <span>São Paulo</span>
        </Footer>
      </aside>

      <Map
        center={[-21.9816765, -47.4196413]}
        zoom={15}
        style={{ height: '100%', width: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
          >
            <MarkerPopup>
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#fff" />
              </Link>
            </MarkerPopup>
          </Marker>
        ))}
      </Map>

      <Link to="/orphanages/create">
        <FiPlus size={32} color="#fff" />
      </Link>
    </Container>
  )
}

export default OrphanagesMap
