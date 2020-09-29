import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { shade } from 'polished'
import media from 'styled-media-query'

export const Animate = styled.section`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  svg {
    background: var(--background);
    position: fixed;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;

    ${media.lessThan('large')`
      top: 24vh
    `}

    ${media.lessThan('small')`
      top: 34vh
    `}
  }
`

export const Titulo = styled.div`
  color: black;
  text-align: center;
  padding: 2em 0 0;
  font-size: 3.5em;
`

export const ButtonLink = styled(AniLink)`
  display: grid;
  grid-gap: 15px;
  justify-content: center;

  text-decoration: none;
  color: var(--white);

  font-weight: 700;
  transition: background-color 0.2s;

  &:hover {
    color: ${shade(0.1, '#00B6FF')};
  }
`
