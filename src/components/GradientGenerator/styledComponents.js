import styled from 'styled-components'

export const BackgroundImage = styled.div`
    background-image: linear-gradient( to ${props =>
      props.direction}, ${props => props.color1}  ,${props => props.color2});
`
