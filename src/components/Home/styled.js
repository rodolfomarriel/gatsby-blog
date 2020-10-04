import styled from 'styled-components'
import media from "styled-media-query"

export const HomeWrapper = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #00B6FF; */

  position: fixed;
  top: 0;
  left: 0;

  ${media.lessThan("large")`
    flex-direction: column;
  `}
`

export const HomeSectionAvatar = styled.section`

  flex-direction: column;
  margin: 2rem;

  ${media.lessThan("large")`
  `}
`

export const HomeSectionInfo = styled.section`

  flex-direction: column;

  ${media.lessThan("large")`

  `}
`

export const HomeProfile = styled.section`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    margin-bottom: -2rem;
  `}
`

export const HomeSocialLinks = styled.nav`
  margin: 2rem -2rem;
  width: 100%;
`
