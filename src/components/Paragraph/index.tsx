import React from "react";
import { Paragraph as ParagraphStyle} from './styles'

export type Props = {
  children: string;
  type?: 'principal' | 'secundario'; //em TS podemos limitar a tipagem
  fontSize?: number;
}

const Paragraph = ({ children, type = 'principal', fontSize }: Props) => (
  <ParagraphStyle fontSize={fontSize} type={type}>{children}</ParagraphStyle>
)

export default Paragraph
