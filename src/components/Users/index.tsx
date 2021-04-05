import React from 'react'
import { ScrollView } from 'react-native'
import { Container, Room, Text, User, BottomDivider } from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Avatar from '../Avatar'

const Users = () => {
  return (
    <>
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 11 }}
      >
        <Room>
          <MaterialCommunityIcons name="video-plus" size={26} color="#E141FC"/>
          <Text>Create Room</Text>
        </Room>
        { [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <User key={index}>
            <Avatar status={!(index > 3)} source={{ uri: 'https://github.com/Leandro2585.png' }}/>
          </User>
        ))}

      </ScrollView>
    </Container>
    <BottomDivider/>
    </>
  )
}

export default Users
