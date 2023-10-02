import Card from "react-bootstrap/Card";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";

function Modificaciones(props) {
    const params = useParams();
    const [carro, setCarro] = useState({});
    const [model, setModel] = useState();
    const [maker, setMaker] = useState();
    const [year, setYear] = useState();
    const [available, setAvailable] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();


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
                <Card.Title>{carro.carModel}</Card.Title>
                <Card.Text><FormattedMessage id="CMA"/>: {props.sharedVariable.role ? (
                    <input
                        type="text"
                        value={maker}
                        onChange={(e) => setMaker(e.target.value)}
                    />
                ) : (
                    carro.carMaker
                )}</Card.Text>
                <Card.Text><FormattedMessage id="CMO" />: {props.sharedVariable.role ? (
                    <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                    />
                ) : (
                    carro.carModel
                )}</Card.Text>
                <Card.Text><FormattedMessage id="CY" />: {props.sharedVariable.role ? (
                    <input
                        type="text"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                ) : (
                    carro.carYear
                )}</Card.Text>
                <Card.Text><FormattedMessage id="AO" />: {props.sharedVariable.role ? (
                    <input
                        type="text"
                        value={available}
                        onChange={(e) => setAvailable(e.target.value)}
                    />
                ) : (
                    carro.available? <FormattedMessage id="yesLabel" /> : "No"
                )}</Card.Text>
                <Card.Text><FormattedMessage id="P" />: {props.sharedVariable.role ? (
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                ) : (
                    carro.price
                )}</Card.Text>
                <Card.Text><FormattedMessage id="Des" />: {props.sharedVariable.role ? (
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                ) : (
                    carro.description
                )}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Modificaciones;
