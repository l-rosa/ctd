import './styles.css';

function App() {
  return (
    <>
      <h1 style={
        {
          color:'red'
        }
      }>
        TESTE@</h1>
        <p>Meu Conteudo</p>
        <button onClick={() => alert("ok")} className="teste-botao">Pressione</button>
    </>
  );
}

export default App;
