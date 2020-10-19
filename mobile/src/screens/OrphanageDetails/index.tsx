import React, { useCallback, useEffect, useState } from 'react'
import { ScrollView, Linking } from 'react-native'
import { Marker } from 'react-native-maps'
import { useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import {
  Container,
  ImagesContainer,
  Image,
  DetailsContainer,
  Title,
  Description,
  MapContainer,
  Map,
  RoutesContainer,
  RoutesText,
  Separator,
  ScheduleContainer,
  ScheduleItem,
  ScheduleText
  // ContactButton,
  // ContactButtonText
} from './styles'
import mapMarkerImg from '../../assets/images/map-marker.png'
import api from '../../services/api'

interface OrphanageDetailsRouteParams {
  id: number
}

interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: string
  open_on_weekends: boolean
  images: Array<{
    id: number
    url: string
  }>
}

const OrphanageDetails: React.FC = () => {
  const route = useRoute()
  const [orphanage, setOrphanage] = useState<Orphanage>()

  const { id } = route.params as OrphanageDetailsRouteParams

  const handleOpenGoogleMapsRoutes = useCallback(() => {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`
    )
  }, [orphanage?.latitude, orphanage?.longitude])

  useEffect(() => {
    api.get(`orphanages/${id}`).then(response => setOrphanage(response.data))
  }, [id])

  if (!orphanage) {
    return (
      <Container>
        <Title>Carregando...</Title>
      </Container>
    )
  }
  return (
    <Container>
      <ImagesContainer>
        <ScrollView horizontal pagingEnabled>
          {orphanage.images.map(image => (
            <Image
              key={image.id}
              source={{
                uri: image.url
              }}
            />
          ))}
        </ScrollView>
      </ImagesContainer>

      <DetailsContainer>
        <Title>{orphanage.name}</Title>
        <Description>{orphanage.about}</Description>

        <MapContainer>
          <Map
            initialRegion={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker
              icon={mapMarkerImg}
              coordinate={{
                latitude: orphanage.latitude,
                longitude: orphanage.longitude
              }}
            />
          </Map>

          <RoutesContainer onPress={handleOpenGoogleMapsRoutes}>
            <RoutesText>Ver rotas no Google Maps</RoutesText>
          </RoutesContainer>
        </MapContainer>

        <Separator />

        <Title>Instruções para visita</Title>
        <Description>{orphanage.instructions}</Description>

        <ScheduleContainer>
          <ScheduleItem color="blue">
            <Feather name="clock" size={40} color="#2ab5d1" />
            <ScheduleText color="blue">
              Segunda à Sexta {orphanage.opening_hours}
            </ScheduleText>
          </ScheduleItem>
          {orphanage.open_on_weekends ? (
            <ScheduleItem color="green">
              <Feather name="info" size={40} color="#39cc83" />
              <ScheduleText color="green">Atendemos fim de semana</ScheduleText>
            </ScheduleItem>
          ) : (
            <ScheduleItem color="red">
              <Feather name="info" size={40} color="#ff669d" />
              <ScheduleText color="red">
                Não atendemos fim de semana
              </ScheduleText>
            </ScheduleItem>
          )}
        </ScheduleContainer>

        {/* <ContactButton onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton> */}
      </DetailsContainer>
    </Container>
  )
}

export default OrphanageDetails
