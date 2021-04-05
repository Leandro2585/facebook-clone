import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const Text = styled.Text`
  color: #3a86e9;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`

export const Row = styled.View`
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  width: 43px;
  height: 43px;
  border-radius: 21px;
  background: #eeeeee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`
