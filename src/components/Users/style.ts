import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 58px;
  flex-direction: row;
  align-items: center;
`

export const Room = styled.TouchableOpacity`
  width: 135px;
  height: 40px;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border-width: 1px;
  border-color: #82b1ff;
  padding: 0 15px;
  margin-right: 12px;
`

export const User = styled.View`
  margin-right: 13px;
`

export const Text = styled.Text`
  color: #1777f2;
  font-size: 12px;
  padding-left: 6px;
`

export const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #F0F2F5;
`
