import styled from "styled-components";
import { css } from "styled-components";

export const Title = styled.h1`
${({ theme, Light }) => css`
color: ${Light ? theme.colors.white : theme.colors.primaryColor}
`}
`