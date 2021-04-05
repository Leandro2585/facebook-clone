import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 192px;
  flex-direction: row;
  align-items: center;
`

export const Card = styled.View`
  width: 106px;
  height: 170px;
  position: relative;
  margin-right: 8px;
`

export const CardStory = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 12px;
`

export const CardUser = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ffffff;
  border-radius: 20px;
  width: 39px;
  height: 39px;
  align-items: center;
  justify-content: center;
`

export const CardFooter = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  left: 9px;
`

export const Text = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #FFFFFF;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.4);
`

export const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #F0F2F5;
`
