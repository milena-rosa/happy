import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Map, Marker, TileLayer } from 'react-leaflet'
// import { FaWhatsapp } from 'react-icons/fa'
import { FiClock, FiInfo } from 'react-icons/fi'

import SideBar from '../../components/SideBar'
import {
  Container,
  Images,
  Details,
  DetailsContent,
  MapContainer,
  OpenDetails,
  Hour,
  OpenOnWeekends,
  ImageButton
  // ContactButton
} from './styles'
import mapIcon from '../../utils/mapIcon'
import api from '../../services/api'

interface Orphanage {
  id: number
  latitude: number
  longitude: number
  name: string
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: string
  images: Array<{
    id: number
    url: string
  }>
}

interface OrphanageParams {
  id: string
}

const Orphanage: React.FC = () => {
  const { id } = useParams<OrphanageParams>()

  const [orphanage, setOrphanage] = useState<Orphanage>()
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    api.get(`/orphanages/${id}`).then(response => {
      setOrphanage(response.data)
    })
  }, [id])

  if (!orphanage) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <SideBar />
      <main>
        <Details>
          <img
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <Images>
            {orphanage.images.map((image, index) => (
              <ImageButton
                active={activeImageIndex === index}
                type="button"
                key={image.id}
                onClick={() => {
                  setActiveImageIndex(index)
                }}
              >
                <img src={image.url} alt={orphanage.name} />
              </ImageButton>
            ))}
          </Images>

          <DetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>
            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />

                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <Hour>
                <FiClock size={32} color="#15b6d6" />
                {orphanage.opening_hours}
              </Hour>
              {orphanage.open_on_weekends ? (
                <OpenOnWeekends openOnWeekends>
                  <FiInfo size={32} color="#39cc83" />
                  Atendemos <br />
                  fim de semana
                </OpenOnWeekends>
              ) : (
                <OpenOnWeekends openOnWeekends={false}>
                  <FiInfo size={32} color="#ff669d" />
                  Não atendemos <br />
                  fim de semana
                </OpenOnWeekends>
              )}
            </OpenDetails>

            {/* <ContactButton>
              <FaWhatsapp size={20} color="#fff" />
              Entrar em contato
            </ContactButton> */}
          </DetailsContent>
        </Details>
      </main>
    </Container>
  )
}

export default Orphanage
