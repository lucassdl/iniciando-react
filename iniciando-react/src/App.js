import React from 'react';

function App(props){

  const modificarNome = (event) => {
    console.log(event.target.value)
  }

  const criaComboBox = () =>{
    const opcoes = ['-- Selecione --', 'Bahia', 'Flu de Feira', 'Vitoria da Conquista', 'Ipitanga', 'Camaçari']
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}  
      </select>
    )
  }

    const MeuComboBox = () => criaComboBox()

    return(
      <>
        <input type="text" className="texto-centralizado" value={props.nome} onChange={modificarNome} />
        <h1>Olá {props.nome} sua idade é {props.idade}</h1>
        <MeuComboBox />
      </>
    )
}

export default App;