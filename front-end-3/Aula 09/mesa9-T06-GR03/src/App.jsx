import "./styles.css";
import {useState} from 'react';

function App() {

  const [notaBD, setNotaBD] = useState([]);
  const [notaFRONT, setNotaFRONT] = useState([]);
  const [notaBACK, setNotaBACK] = useState([]);

  const [totalBD, setTotalBD] = useState(0);
  const [totalFRONT, setTotalFRONT] = useState();
  const [totalBACK, setTotalBACK] = useState();

  const [err, setErr] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [n, setN] = useState("");

  const [disabled, setDisabled] = useState(0)

  function sumArray(arr) {
    let soma = 0;
    for ( var i = 0; i < arr.length; i++ ){
      soma += parseFloat(arr[i]);
   }
    return soma;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(parseFloat(n) >= 0 && parseFloat(n) <= 10){
      if (disciplina=="database"){
        setNotaBD([...notaBD, n])
        setTotalBD(sumArray(notaBD))
        setErr("")
        setDisabled(0);
      }
      else if (disciplina=="frontend"){
        setNotaFRONT([...notaFRONT, n])
        setTotalFRONT(sumArray(notaFRONT))
        setErr("")
        setDisabled(0);
      }
      else if (disciplina=="backend"){
        setNotaBACK([...notaBACK, n])
        setTotalBACK(sumArray(notaBACK))
        setErr("")
        setDisabled(0);
      } else {
        setErr("Disciplina Inválida");
        setDisabled(1);
      }
    } else {
      setErr("Valor Inválido");
    }
  }

  function selectionChange(e){
    setDisciplina(e.target.value)
    if (disciplina=="devops"){
      setDisabled(1);
    }
    setDisabled(0);
  }

  

  return (
    <div className="container">
      <h1>Média de Alunos por Disciplina</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container_input">
          <select onChange={selectionChange}>
            <option selected disabled>
              Selecione uma disciplina
            </option>
            <option value="database">Banco de Dados</option>
            <option value="backend">Desenvolvimento Backend</option>
            <option value="frontend">Desenvolvimento Frontend</option>
            <option value="devops">Devops</option>
          </select>
          <input value={n} onChange={(e) => setN(e.target.value)}/>
          <div>
            <span>{err}</span>
          </div>
        </div>
        <input type="submit" value="Salvar" disabled={disabled}/>
      </form>

      <div className="container">
        <table border="1" className="line_title">
          <thead>
            <tr>
              <th>Disciplina</th>
              <th>Quantidade de Alunos</th>
              <th>Média das notas dos alunos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Banco de Dados</td>
              <td>{notaBD.length}</td>
              <td>{totalBD/notaBD.length}</td>
            </tr>

            <tr>
              <td>Desenvolvimento Frontend</td>
              <td>{notaFRONT.length}</td>
              <td>{totalFRONT/notaFRONT.length}</td>
            </tr>

            <tr>
              <td>Desenolvimento Backend</td>
              <td>{notaBACK.length}</td>
              <td>{totalBACK/notaBACK.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
