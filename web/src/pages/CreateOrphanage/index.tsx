import React, { ChangeEvent, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { Map, Marker, TileLayer } from 'react-leaflet'
import { LeafletMouseEvent } from 'leaflet'
import { FiPlus, FiXCircle } from 'react-icons/fi'

import SideBar from '../../components/SideBar'
import {
  Container,
  CreateOrphanageForm,
  InputBlock,
  ButtonSelect,
  ConfirmButton,
  SelectOpenOnWeekends,
  ImagesContainer
} from './styles'
import mapIcon from '../../utils/mapIcon'
import api from '../../services/api'

interface ImageProps extends File {
  url: string
}

export default function CreateOrphanage() {
  const history = useHistory()
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0
  })
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [openingHours, setOpeningHours] = useState('')
  const [openOnWeekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<ImageProps[]>([])

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng

    setPosition({
      latitude: lat,
      longitude: lng
    })
  }, [])

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault()

      const { latitude, longitude } = position
      const data = new FormData()
      data.append('name', name)
      data.append('about', about)
      data.append('latitude', String(latitude))
      data.append('longitude', String(longitude))
      data.append('instructions', instructions)
      data.append('opening_hours', openingHours)
      data.append('open_on_weekends', String(openOnWeekends))
      images.forEach(image => {
        data.append('images', image)
      })

      await api.post('/orphanages', data)
      history.push('/app')
    },
    [
      name,
      about,
      position,
      instructions,
      openingHours,
      openOnWeekends,
      images,
      history
    ]
  )

  const handleSelectImages = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (!event.target.files) {
        return
      }

      const selectedImages = Object.values(event.target.files)

      selectedImages.forEach(image => {
        const imageURL = URL.createObjectURL(image)
        Object.assign(image, { url: imageURL })
      })
      setImages(selectedImages as ImageProps[])
    },
    []
  )

  const handleDeleteImage = useCallback(
    (imageURL: string) => {
      const updatedImages = images.filter(image => image.url !== imageURL)
      setImages(updatedImages)
    },
    [images]
  )

  return (
    <Container>
      <SideBar />

      <main>
        <CreateOrphanageForm onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-21.9816765, -47.4196413]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <InputBlock>
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="about"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="images">Fotos</label>

              <ImagesContainer>
                {images.map(image => (
                  <div key={image.name}>
                    <img src={image.url} alt={name} />
                    <button
                      type="button"
                      onClick={() => handleDeleteImage(image.url)}
                    >
                      <FiXCircle size={24} color="#ff669d" />
                    </button>
                  </div>
                ))}
                <label htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </ImagesContainer>
              <input
                multiple
                type="file"
                id="image[]"
                onChange={handleSelectImages}
              />
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={event => {
                  setInstructions(event.target.value)
                }}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="opening_hours">Horário de funcionamento</label>
              <input
                id="opening_hours"
                value={openingHours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <ButtonSelect>
                <SelectOpenOnWeekends
                  type="button"
                  openOnWeekends={openOnWeekends}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </SelectOpenOnWeekends>
                <SelectOpenOnWeekends
                  type="button"
                  openOnWeekends={!openOnWeekends}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </SelectOpenOnWeekends>
              </ButtonSelect>
            </InputBlock>
          </fieldset>

          <ConfirmButton type="submit">Confirmar</ConfirmButton>
        </CreateOrphanageForm>
      </main>
    </Container>
  )
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
