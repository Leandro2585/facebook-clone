import React from 'react'
import { ScrollView } from 'react-native'
import { Container } from './style'
import AppBar from '../../components/AppBar'
import ToolBar from '../../components/ToolBar'
import Users from '../../components/Users'
import Story from '../../components/Story'
import Feed from '../../components/Feed'

const Home: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <AppBar/>
        <ToolBar/>
        <Users/>
        <Story/>
        <Feed/>
      </ScrollView>
    </Container>
  )
}

export default Home
