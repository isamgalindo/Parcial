import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';

function Carro(props) {
    const navigate = useNavigate();
    
    const clickCard = () => {
        navigate('/Modificaciones/'+ props.carro.carModel);
        
    }
    
    return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3" onClick={clickCard}>
        <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={props.carro.image}
        alt={props.carro.carMaker}
        />
        <Card.Body>
        <Card.Title>
            {props.carro.carModel}
        </Card.Title>
        <Card.Title>{props.carro.carMaker}</Card.Title>
        <Card.Text>{props.carro.price}-{props.carro.carYear}</Card.Text>
        </Card.Body>
    </Card>
    );
}

export default Carro;