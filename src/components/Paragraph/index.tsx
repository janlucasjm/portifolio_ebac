import React from "react";
import { Paragraph as ParagraphStyle} from './styles'

export type Props = {
  children: string;
  type?: 'principal' | 'secundario'; //em TS podemos limitar a tipagem
}

const Paragraph = ({ children, type = 'principal'}: Props) => (
  <ParagraphStyle type={type}>{children}</ParagraphStyle>
)

export default Paragraph
