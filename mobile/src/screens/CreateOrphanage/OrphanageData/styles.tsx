import styled from 'styled-components/native'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.ScrollView`
  flex: 1;
`

export const Title = styled.Text`
  border-bottom-color: #d3e2e6;
  border-bottom-width: 0.8px;
  color: #5c8599;
  font-size: 24px;
  font-family: 'Nunito_700Bold';
  margin-bottom: 32px;
  padding-bottom: 24px;
`

export const Label = styled.Text`
  color: #8fa7b3;
  font-family: 'Nunito_600SemiBold';
  margin-bottom: 8px;
`

export const Input = styled.TextInput`
  background: #fff;
  border: 1.4px solid #d3e2e6;
  border-radius: 20px;
  height: 56px;
  margin-bottom: 16px;
  padding: 18px 24px;
  text-align-vertical: top;
`

export const ImagesInput = styled.TouchableOpacity`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1.4px dashed #96d2f0;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  margin-bottom: 32px;
`

export const UploadedImagesContainer = styled.View`
  flex-direction: row;
`

export const UploadedImage = styled.Image`
  border-radius: 20px;
  height: 64px;
  margin-bottom: 32px;
  margin-right: 8px;
  width: 64px;
`

export const SwitchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`

export const NextButton = styled(RectButton)`
  align-items: center;
  background: #15c3d6;
  border-radius: 20px;
  height: 56px;
  justify-content: center;
  margin-top: 32px;
`

export const NextButtonText = styled.Text`
  font-family: 'Nunito_800ExtraBold';
  font-size: 16px;
  color: #fff;
`
