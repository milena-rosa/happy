import React, { useCallback, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { MapEvent, Marker } from 'react-native-maps'

import { Container, Map, NextButton, NextButtonText } from './styles'
import mapMarkerImg from '../../../assets/images/map-marker.png'

const SelectMapPosition: React.FC = () => {
  const navigation = useNavigation()
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0
  })

  const handleNextStep = useCallback(() => {
    navigation.navigate('OrphanageData', { position })
  }, [navigation, position])

  const handleSelectMapPosition = useCallback((event: MapEvent) => {
    setPosition(event.nativeEvent.coordinate)
  }, [])

  return (
    <Container>
      <Map
        initialRegion={{
          latitude: -21.9816652,
          longitude: -47.4196327,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
        onPress={handleSelectMapPosition}
      >
        {position.latitude !== 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{
              latitude: position.latitude,
              longitude: position.longitude
            }}
          />
        )}
      </Map>
      {position.latitude !== 0 && (
        <NextButton onPress={handleNextStep}>
          <NextButtonText>Próximo</NextButtonText>
        </NextButton>
      )}
    </Container>
  )
}

export default SelectMapPosition
