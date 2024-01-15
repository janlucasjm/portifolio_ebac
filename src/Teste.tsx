import React from 'react'
import styled from 'styled-components'

type BotaoProps = { //criando tipagem das propriedades costumizaveis
  principal: boolean
  fontSize?: string // dizendo que é opcicional usando '?'
}

const Botao = styled.button<BotaoProps>/*usado para criar um objeto costumizado e edita-lo usando CSS*/`
  background-color:${(props) => (props.principal ? 'green' : 'red')};
  cursor: pointer;
  font-size: ${(props) => props.fontSize || '16px'}
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="18px" principal>Clique Aqui</Botao>

      <Botao fontSize="14px" principal={false}>Cancelar</Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo> {/* essa propriedade 'as' é usada para mudar a tag html para a que eu desejar */}
    </>
  )
}

export default Teste
