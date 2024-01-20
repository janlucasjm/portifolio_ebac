import styled from "styled-components";
import { Props } from '.'


export const Paragraph = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: normal;
  color: ${(props) => (props.type === 'principal' ? '#282A35' : '#949494')};
  line-height: 22px;
`
