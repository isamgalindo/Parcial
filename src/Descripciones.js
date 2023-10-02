import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Descripciones(props) {
    console.log(props.sharedVariable.role);
    const params = useParams();
    const [carro, setCarro] = useState({});
    useEffect(() => {
    const URL =
    "https://raw.githubusercontent.com/isamgalindo/Parcial/master/datos.json";
    fetch(URL)
    .then((data) => data.json())
    .then((data) => {
        setCarro(data.find((carro) => carro.carModel === params.carroCarModel));
    });
    },
    [params.carroCarModel]);
    return (
    <Card style={{ width: "18rem", height: "40rem" }} className="mb-3">
        <Card.Img
        style={{ height: "14rem" }}
        variant="top"
        src={carro.image}
        alt={carro.carMaker}
        />
        <Card.Body>
        <Card.Title>
            {carro.carModel}
        </Card.Title>
        <Card.Text>Car maker: {carro.carMaker}</Card.Text>
        <Card.Text>Car Model: {carro.carModel}</Card.Text>
        <Card.Text>Car year: {carro.carYear}</Card.Text>
        <Card.Text>Available online: {carro.available}</Card.Text>
        <Card.Text>Price: {carro.price}</Card.Text>
        <Card.Text>Description: {carro.description}</Card.Text>
        </Card.Body>
    </Card>
    );
}

export default Descripciones;