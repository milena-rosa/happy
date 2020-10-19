import React, { useCallback, useState } from 'react'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'

import { Feather } from '@expo/vector-icons'
import {
  CalloutContainer,
  CalloutText,
  Container,
  CreateOrphanageButton,
  Footer,
  FooterText,
  Map
} from './styles'
import mapMarker from '../../assets/images/map-marker.png'
import api from '../../services/api'

interface Orphanage {
  id: number
  name: string
  latitude: number
  longitude: number
}
const OrphanagesMap: React.FC = () => {
  const navigation = useNavigation()
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useFocusEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  })

  const handleNavigateToOrphanageDetails = useCallback(
    (id: number) => {
      navigation.navigate('OrphanageDetails', { id })
    },
    [navigation]
  )

  const handleNavigateToCreateOrphanage = useCallback(() => {
    navigation.navigate('SelectMapPosition')
  }, [navigation])

  return (
    <Container>
      <Map
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -21.9816652,
          longitude: -47.4196327,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapMarker}
            calloutAnchor={{
              x: 0.5,
              y: -0.2
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude
            }}
          >
            <Callout
              style={{ height: 46 }}
              tooltip
              onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
            >
              <CalloutContainer>
                <CalloutText>{orphanage.name}</CalloutText>
              </CalloutContainer>
            </Callout>
          </Marker>
        ))}
      </Map>

      <Footer>
        <FooterText>
          {orphanages.length === 1
            ? '1 orfanato encontrado'
            : `${orphanages.length} orfanatos encontrados`}
        </FooterText>

        <CreateOrphanageButton onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#fff" />
        </CreateOrphanageButton>
      </Footer>
    </Container>
  )
}

export default OrphanagesMap
