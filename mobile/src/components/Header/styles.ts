import styled from 'styled-components/native'
import { BorderlessButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  align-items: center;
  background: #f9fafc;
  border-bottom-width: 1px;
  border-color: #dde3f0;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  padding-top: 56px;
`

export const Title = styled.Text`
  color: #8fa7b3;
  font-family: 'Nunito_600SemiBold';
  font-size: 16px;
`

export const Button = styled(BorderlessButton)``
