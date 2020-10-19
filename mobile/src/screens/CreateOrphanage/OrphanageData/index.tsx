import React, { useCallback, useState } from 'react'
import { Switch } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import {
  Container,
  ImagesInput,
  Input,
  Label,
  NextButton,
  NextButtonText,
  SwitchContainer,
  Title,
  UploadedImagesContainer,
  UploadedImage
} from './styles'
import api from '../../../services/api'

interface OrphanageDataRouteParams {
  position: {
    latitude: number
    longitude: number
  }
}

const OrphanageData: React.FC = () => {
  const route = useRoute()
  const navigation = useNavigation()

  const { position } = route.params as OrphanageDataRouteParams

  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [openingHours, setOpeningHours] = useState('')
  const [openOnWeekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<string[]>([])

  const handleCreateOrphanage = useCallback(async () => {
    const { latitude, longitude } = position
    const data = new FormData()
    data.append('name', name)
    data.append('about', about)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('instructions', instructions)
    data.append('opening_hours', openingHours)
    data.append('open_on_weekends', String(openOnWeekends))
    images.forEach((image, index) => {
      data.append('images', {
        type: 'image/jpg',
        uri: image,
        name: `image_${index}.jpg`
      } as any)
    })

    await api.post('/orphanages', data)

    navigation.navigate('OrphanagesMap')
  }, [
    name,
    about,
    instructions,
    openingHours,
    openOnWeekends,
    position,
    images,
    navigation
  ])

  const handleSelectImages = useCallback(async () => {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync()

    if (status !== 'granted') {
      alert('Eita, precisamos das suas fotos. É eita atrás de vixe.')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images
    })

    if (result.cancelled) {
      return
    }

    const { uri: image } = result

    setImages([...images, image])
  }, [images])

  return (
    <Container contentContainerStyle={{ padding: 24 }}>
      <Title>Dados</Title>

      <Label>Nome</Label>
      <Input value={name} onChangeText={setName} />

      <Label>Sobre</Label>
      <Input
        style={{ height: 110 }}
        multiline
        value={about}
        onChangeText={setAbout}
      />

      {/* <Label>Whatsapp</Label>
      <Input /> */}

      <Label>Fotos</Label>

      <UploadedImagesContainer>
        {images.map(image => (
          <UploadedImage key={image} source={{ uri: image }} />
        ))}
      </UploadedImagesContainer>

      <ImagesInput onPress={handleSelectImages}>
        <Feather name="plus" size={24} color="#15b6d6" />
      </ImagesInput>

      <Title>Visitação</Title>

      <Label>Instruções</Label>
      <Input
        style={{ height: 110 }}
        multiline
        value={instructions}
        onChangeText={setInstructions}
      />

      <Label>Horário de visitas</Label>
      <Input value={openingHours} onChangeText={setOpeningHours} />

      <SwitchContainer>
        <Label>Atende final de semana?</Label>
        <Switch
          thumbColor="#fff"
          trackColor={{ false: '#ccc', true: '#39cc83' }}
          value={openOnWeekends}
          onValueChange={setOpenOnWeekends}
        />
      </SwitchContainer>

      <NextButton onPress={handleCreateOrphanage}>
        <NextButtonText>Cadastrar</NextButtonText>
      </NextButton>
    </Container>
  )
}

export default OrphanageData
