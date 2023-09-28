import Card from "react-bootstrap/Card";

function Descripciones(props) {
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
        <Card.Text>Car maker: {props.carro.carMaker}</Card.Text>
        <Card.Text>Car Model: {props.carro.carYear}</Card.Text>
        <Card.Text>Car year: {props.carro.carYear}</Card.Text>
        <Card.Text>Available online: {props.carro.available}</Card.Text>
        <Card.Text>Price: {props.carro.price}</Card.Text>
        </Card.Body>
    </Card>
    );
}

export default Descripciones;