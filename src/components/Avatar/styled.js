import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'

export const AvatarWrapper = styled(Img)`
  /* border-radius: 50%; */
  height: 20.75rem;
  margin: auto;
  width: 20.75rem;
  filter: grayscale(1);

  -webkit-box-shadow: 2px -2px 4px 2px rgba(41,41,41,1);
  -moz-box-shadow: 2px -2px 4px 2px rgba(41,41,41,1);
  box-shadow: 2px -2px 4px 2px rgba(41,41,41,1);

  ${media.lessThan("large")`
    height: 10.875rem;
    width: 10.875rem;
  `}
`
