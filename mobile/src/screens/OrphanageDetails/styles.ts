import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import { RectButton } from 'react-native-gesture-handler'

interface ScheduleItemProps {
  color: string
}

export const Container = styled.ScrollView`
  flex: 1;
`

export const ImagesContainer = styled.View`
  height: 240px;
`

export const Image = styled.Image`
  height: 240px;
  resize-mode: cover;
  width: ${Dimensions.get('window').width}px;
`

export const DetailsContainer = styled.View`
  padding: 24px;
`

export const Title = styled.Text`
  color: #4d6f80;
  font-size: 30px;
  font-family: 'Nunito_700Bold';
`

export const Description = styled.Text`
  color: #5c8599;
  font-family: 'Nunito_600SemiBold';
  line-height: 24px;
  margin-top: 16px;
`

export const MapContainer = styled.View`
  background: #e6f7fb;
  border: 1.2px solid #b3dae2;
  border-radius: 20px;
  overflow: hidden;
  margin-top: 40px;
`

export const Map = styled(MapView)`
  height: 150px;
  width: 100%;
`

export const RoutesContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const RoutesText = styled.Text`
  color: #0089a5;
  font-family: 'Nunito_700Bold';
`

export const Separator = styled.View`
  height: 0.8px;
  background: #d3e2e6;
  margin: 40px 0;
  width: 100%;
`

export const ScheduleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`

export const ScheduleItem = styled.View<ScheduleItemProps>`
  background: ${props =>
    props.color === 'blue'
      ? '#e6f7fb'
      : props.color === 'red'
      ? '#fcf0f4'
      : '#edfff6'};
  border: 1px solid
    ${props =>
      props.color === 'blue'
        ? '#b3dae2'
        : props.color === 'red'
        ? '#ffbcd4'
        : '#a1e9c5'};
  border-radius: 20px;
  padding: 20px;
  width: 48%;
`

export const ScheduleText = styled.Text<ScheduleItemProps>`
  color: ${props =>
    props.color === 'blue'
      ? '#5c8599'
      : props.color === 'red'
      ? '#ff669d'
      : '#37C77F'};
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
  line-height: 24px;
  margin-top: 20px;
`

export const ContactButton = styled(RectButton)`
  align-items: center;
  background: #3cdc8c;
  border-radius: 20px;
  flex-direction: row;
  height: 56px;
  justify-content: center;
  margin-top: 40px;
`

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'Nunito_800ExtraBold';
  font-size: 16px;
  margin-left: 16px;
`
