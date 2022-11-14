import { useState } from 'react'
import './App.css'
import Card from './Components/Card';

function App() {

  const [nome, setNome] = useState("")
  const [cor, setCor] = useState("")

  const [card, setCard] = useState([])

  const regexColor = /^#([A-Fa-f0-9]{5})$/;

  const [disabled, setDisabled] = useState(0);

  const [cont, setCont] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    if(!disabled) {
      
      setCard([...card, {
        nome: nome,
        cor: cor
      } ]);
    }

    setCont(cont+1);

  }

  function inputChange(e) {
    console.log(nome.length);
    if(cont >0){
      if(nome.length > 3 && regexColor.test(cor)) {
        setDisabled(0);
      } else {
        setDisabled(1);
      }
    }
  }

  function sNome(e) {
    setNome(e.target.value);
    inputChange();
  }

  function sCor(e) {
    setCor(e.target.value);
    inputChange();
  }

  return (
    <div>
      <div className='divform'  style={disabled && cont>0?{backgroundColor: "rgba(255, 112, 112, 0.4)"}:{backgroundColor: "#151515"}}>
        <h1><b>ADICIONAR NOVA COR</b></h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <div className='divnome'>
              <label>Nome</label>
              <input type="text" onChange={sNome} placeholder="Insira o nome da Cor Favorita"/>
            </div>
            <div className='divcor'>
              <label>Cor</label>
              <input type="text" onChange={sCor} placeholder="Insira o código da cor em Hexadecimal"/>
            </div>
          </div>
          <div>
            <input type="submit" value="Adicionar" disabled={disabled} className="inputbutton"/>
          </div>
        </form>
      </div>
      <div>
        <span>{disabled && cont>0? "Por favor, verifique os dados inseridos no formulário" : ""}</span>
      </div>
      <div>
        <h1>CORES FAVORITAS</h1>
      </div>
      <div className='containerCards'>
        {
          card.map((e)=> {
            return(
              <Card nome={e.nome} cor={e.cor}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
