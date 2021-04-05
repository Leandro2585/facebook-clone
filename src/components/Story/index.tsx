import React from 'react'
import { Container, Card, CardStory, CardUser, CardFooter, Text, BottomDivider } from './style'
import { ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Avatar from '../Avatar'

const Story = () => {
  return (
    <>
    <Container>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ paddingLeft: 11 }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(index => (
          <Card key={index}>
            <CardStory source={ index === 1 ? ({ uri: 'https://github.com/Leandro2585.png' }) : ({ uri: 'https://images.squarespace-cdn.com/content/v1/5cac31db7eb88c68ba9c894b/1604438944112-YS1OQJYV9ZXQM1W5ZT9U/ke17ZwdGBToddI8pDm48kFWxnDtCdRm2WA9rXcwtIYR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Uf_TT3g97i6_XmO-qcQt4zAfXqdI_5B_HjrxMT8d5xsm3WUfc_ZsVm9Mi1E6FasEnQ/Tarrawa+Atoll+3-2.png?format=1000w' }) }/>
            <CardUser>
              {index === 0
                ? <AntDesign name="plus" size={24} color="#1777f2"/>
                : <Avatar story={index < 4} source={{ uri: 'https://github.com/Leandro2585.png' }}/>}
            </CardUser>
            <CardFooter>
              <Text>{ index === 1 ? 'Add To Story' : 'Leandro R' }</Text>
            </CardFooter>
          </Card>
        ))}

      </ScrollView>
    </Container>
    <BottomDivider/>
    </>
  )
}

export default Story
