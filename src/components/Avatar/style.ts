import styled, { css } from 'styled-components/native'

interface UserProps {
  isActive?:boolean;
  story?: boolean;
}

export const Container = styled.View`
  width: 40px;
  height: 40px;
  position: relative;
`

export const User = styled.Image<UserProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: #1777f2;
  border-width: ${props => props.story ? '3px' : 0};
`

export const UserActive = styled.View<UserProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  position: absolute;
  bottom: -2px;
  right: -2px;
  border-width: 2px;
  border-color: #FFFFFF;
  ${(props) => props.isActive === true ? css`background: #4bcb16;` : css`background: #F22337;`}
`
