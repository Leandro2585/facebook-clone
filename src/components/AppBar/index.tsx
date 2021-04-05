import React from 'react'
import { Container, Text, Row, Button } from './style'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

const AppBar = () => {
  return (
    <Container>
      <Text>Devbook</Text>
      <Row>
        <Button>
          <Feather name="search" size={29} color="black"/>
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={29}
          />
        </Button>
      </Row>
    </Container>
  )
}

export default AppBar
