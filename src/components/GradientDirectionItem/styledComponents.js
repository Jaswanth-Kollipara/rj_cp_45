import styled from 'styled-components'

export const ButtonElement = styled.button`
    background-color: '#ffffff';
    opacity: ${props => (props.select ? 1 : 0.5)};
`
