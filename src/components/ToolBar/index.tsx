import React from 'react'
import { Container, Row, Input, Divider, Menu, MenuText, Separator, BottomDivider } from './style'
import Avatar from '../Avatar'
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

const ToolBar = () => {
  return (
    <>
    <Container>
      <Row>
        <Avatar source={{ uri: 'https://github.com/Leandro2585.png' }}/>
        <Input placeholder="What's on your mind?"/>
      </Row>
      <Divider/>
      <Row>
        <Menu>
          <Ionicons name="ios-videocam" size={22} color="#F22337"/>
          <MenuText>Live</MenuText>
        </Menu>
        <Separator/>
        <Menu>
          <MaterialIcons name="photo-size-select-actual" size={20} color="#4caf50"/>
          <MenuText>Photo</MenuText>
        </Menu>
        <Separator/>
        <Menu>
          <MaterialCommunityIcons name="video-plus" size={22} color="#E141FC"/>
          <MenuText>Room</MenuText>
        </Menu>
      </Row>
    </Container>
    <BottomDivider/>
    </>
  )
}

export default ToolBar
