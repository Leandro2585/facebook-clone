import React from 'react'
import { Container, User, UserActive } from './style'

interface AvatarProps {
  status?: boolean;
  story?: boolean;
  source: {
    uri: string;
  }
}

const Avatar: React.FC<AvatarProps> = ({ source, status, story }: AvatarProps) => {
  return (
    <Container>
      <User source={source} story={story}/>
      { status && <UserActive isActive={status}/>}
    </Container>
  )
}

export default Avatar
