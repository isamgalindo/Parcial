import Carro from "./Carro";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Descripciones from "./Descripciones";

const { useEffect, useState } = require("react");

function Carros() {
    const [carros, setCarros] = useState([]);
    useEffect(() => {
    const URL = "https://raw.githubusercontent.com/isamgalindo/Parcial/master/datos.json";
    fetch(URL)
    .then((data) => data.json())
    .then((data) => {
        setCarros(data);
    });
    }, 
    []);
    return (
    <div className="container">
    <h2 className="mt-2">Listado de carros</h2>
    <hr></hr>
    <Row>
    {carros.map((carro) => (
        <Col key={carro.carModel}>
        <Carro carro={carro} />
        </Col>
    ))}
    </Row>
    </div>
);
}

export default Carros;