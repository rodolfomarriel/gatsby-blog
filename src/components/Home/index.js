import React from 'react'
import Profile from '../Profile'
import SocialLinks from '../SocialLinks'
import Avatar from '../Avatar'
import ParticlesBg from 'particles-bg'

import * as S from './styled'

const Home = () => {

  return (
    <S.HomeWrapper>
      <S.HomeSectionInfo>
        <S.HomeProfile>
          <Profile />
        </S.HomeProfile>
        <S.HomeSocialLinks>
          <SocialLinks />
        </S.HomeSocialLinks>
      </S.HomeSectionInfo>
      <S.HomeSectionAvatar>
        <Avatar />
      </S.HomeSectionAvatar>
      <ParticlesBg type="lines" bg={true} />
    </S.HomeWrapper>
  )
}

export default Home
