import React from 'react'
import { View } from 'react-native'
import Avatar from '../Avatar'
import { Container, Header, Row, Time, UserName, Post, Photo, FooterCount, Footer, IconCount, TextCount, Separator, FooterMenu, Button, Icon, Text, BottomDivider } from './style'
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const Feed = () => {
  return (
    <>
      {[1, 2, 3, 4, 5].map(index => (
        <Container key={index}>
          <Header>
            <Row>

              <Avatar source={{ uri: 'https://github.com/Leandro2585.png' }}/>

              <View style={{ paddingLeft: 10 }}>
                <UserName> Leandro Real</UserName>
                <Row>
                  <Time>9m</Time>
                  <Entypo name="dot-single" size={12} color="#747476"/>
                  <Entypo name="globe" size={10} color="#747476"/>
                </Row>
              </View>
            </Row>

            <Entypo name="dots-three-horizontal" size={15} color="#222121"/>

          </Header>

          <Post>
            Crie na prática uma aplicação utilizando React Native e Typescript.
          </Post>
          <Photo source={{ uri: 'https://blog.crowdbotics.com/content/images/2020/12/ReactNativeWebFeaturedIMage.png' }}/>
          <Footer>
            <FooterCount>
              <Row>
                <IconCount>
                  <AntDesign name="like1" size={12} color="#FFFFFF"/>
                </IconCount>
                <TextCount>192 likes</TextCount>
                <TextCount>3k comments</TextCount>
              </Row>
            </FooterCount>

            <Separator/>

            <FooterMenu>
              <Button>
                <Icon>
                  <AntDesign name="like2" size={20} color="#424040"/>
                </Icon>
                <Text>Like</Text>
              </Button>
              <Button>
                <Icon>
                  <MaterialCommunityIcons name="comment-outline" size={20} color="#424040"/>
                </Icon>
                <Text>Comment</Text>
              </Button>
              <Button>
                <Icon>
                  <MaterialCommunityIcons name="share-outline" size={20} color="#424040"/>
                </Icon>
                <Text>Share</Text>
              </Button>
            </FooterMenu>
          </Footer>
          <BottomDivider/>
        </Container>
      ))}
    </>
  )
}

export default Feed
