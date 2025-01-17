import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import MapView from 'react-native-maps'

const mapHeight = Dimensions.get('window').height + 36

export const Container = styled.View`
  flex: 1;
  position: relative;
`

export const Map = styled(MapView)`
  height: ${mapHeight}px;
  width: ${Dimensions.get('window').width}px;
`

export const NextButton = styled(RectButton)`
  align-items: center;
  background-color: #15c3d6;
  border-radius: 20px;
  bottom: 40px;
  justify-content: center;
  height: 56px;
  left: 24px;
  position: absolute;
  right: 24px;
`

export const NextButtonText = styled.Text`
  color: #fff;
  font-family: 'Nunito_800ExtraBold';
  font-size: 16px;
`
