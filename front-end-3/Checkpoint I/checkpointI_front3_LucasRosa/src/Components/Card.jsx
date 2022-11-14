import './Card.css';

function Card(props) {

    return (
    <div className='divCards' style={{backgroundColor: props.cor}}>
        <div className='divCard'>
            <h1>{props.nome}</h1>
            <h3>{props.cor}</h3>
        </div>  
    </div>
    )
}

export default Card;