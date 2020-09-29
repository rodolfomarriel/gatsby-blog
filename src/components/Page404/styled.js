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
    z-index: -1;

    ${media.greaterThan('large')`
      height: 100%;
      width: 100%;
    `}

    ${media.lessThan('large')`
      /* height: 100%;
      width: 100%; */
      top: 24vh;
    `}

    ${media.between('800px', '1024px')`
      height: 100%;
      width: 100%;
    `}

    ${media.lessThan('small')`
      height: 100%;
      margin-top: -30vh;
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
export const NumeroErro = styled.section`
  font-size: 4em;
  font-weight: 700;
  color: #2D3965;
  margin: 2em 0;
  display: flex;
  justify-content: center;

  ${media.greaterThan('large')`
    display: none;
  `}
`;
