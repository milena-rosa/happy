import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import MapView from 'react-native-maps'
import { RectButton } from 'react-native-gesture-handler'

const mapHeight = Dimensions.get('window').height + 36

export const Container = styled.View`
  flex: 1;
`
export const Map = styled(MapView)`
  height: ${mapHeight}px;
  width: ${Dimensions.get('window').width}px;
`

export const CalloutContainer = styled.View`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  height: 46px;
  justify-content: center;
  padding: 0 16px;
  width: 160px;
`

export const CalloutText = styled.Text`
  color: #0089a5;
  font-family: 'Nunito_700Bold';
  font-size: 14px;
`

export const Footer = styled.View`
  align-items: center;
  background: #fff;
  border-radius: 20px;
  bottom: 32px;
  elevation: 3;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  left: 24px;
  padding-left: 24px;
  position: absolute;
  right: 32px;
`

export const FooterText = styled.Text`
  color: #8fa7b3;
  font-family: 'Nunito_700Bold';
`

export const CreateOrphanageButton = styled(RectButton)`
  align-items: center;
  background: #15c3d6;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  width: 56px;
`
