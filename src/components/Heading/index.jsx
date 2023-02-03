import * as Styled from './styles'

export const Heading = ({ children, Light = false }) => {
    return <Styled.Title Light={Light}>{children}</Styled.Title>
}
