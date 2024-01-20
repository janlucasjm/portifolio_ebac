import React from "react"
import Title from "../../components/Title"
import Avatar from "../../components/Avatar"
import Paragraph from "../../components/Paragraph"
import { Descricao, BotaoTema, SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Title fontSize={20}>Jan Lucas</Title>
        <Paragraph type="secundario" fontSize={16}>janlucasjm</Paragraph>
        <Descricao type="principal" fontSize={12}>Engenheiro Front-end</Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
)

export default Sidebar
