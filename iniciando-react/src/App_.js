import React from 'react';

class App extends React.Component{

  state = {
    nome:''
  }

  // constructor(){
  //   super()
  //   this.modificarNome = this.modificarNome.bind(this)
  // }

  modificarNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  criaComboBox = () =>{
    const opcoes = ['-- Selecione --', 'Bahia', 'Flu de Feira', 'Vitoria da Conquista', 'Ipitanga', 'Camaçari']
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)

    return(
      <select>
        {comboBoxOpcoes}  
      </select>
    )
  }

  componentDidMount(){
    console.log('Executou o componentDidMount') 
  }

  render(){
    console.log('Executou o render') 
    
    const MeuComboBox = () => this.criaComboBox()

    return(
      <React.Fragment>
        <input type="text" value={this.state.nome} onChange={this.modificarNome} />
        <h1>Olá {this.props.nome} sua idade é {this.props.idade}</h1>
        <MeuComboBox />
      </React.Fragment>
    )
  }
}

export default App;