import Card from "react-bootstrap/Card";

function Carro(props) {
    return (
    <Card style={{ width: "18rem", height: "24rem" }} className="mb-3">
        <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={props.carro.partName}
        alt={props.carro.carMaker}
        />
        <Card.Body>
        <Card.Title>
            {props.carro.carModel}
        </Card.Title>
        <Card.Title>{props.carro.carMaker}</Card.Title>
        <Card.Text>{props.carro.carYear}</Card.Text>
        </Card.Body>
    </Card>
    );
}

export default Carro;