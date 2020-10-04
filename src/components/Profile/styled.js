import styled from 'styled-components'
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const ProfileWrapper = styled.section`
  color: #e6e6e6;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;

  ${media.lessThan("large")`
    padding: 3.5rem;
  `}
`

export const ProfileApresentation = styled.section`
`

export const ProfileAuthor = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem auto 1.5rem;

  ${media.lessThan("large")`
    font-size: 1.2rem;
    margin: 0 0 0 10px;
  `}
`

export const ProfilePosition = styled.small`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;

  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin-top: 0.2rem;
  `}
`

export const ProfileDescription = styled.p`
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.4;

  /* ${media.lessThan("large")`
    display: none;
  `} */
`
