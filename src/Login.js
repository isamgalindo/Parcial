import './App.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

function Login() {
    const navigate = useNavigate();
    let [formValues, setFormValues] = useState({id: 1, email: '', password: '', role: true});
    const [errors, setErrors] = useState({ email: '', password: '' });
    const intl = useIntl();


    const handleEmailChange = (e) => {
        setFormValues({ ...formValues, email: e.target.value });
        validateEmail(formValues.email);
    };

    const clickSubmit = () => {
        validateEmail(formValues.email);
        if (!errors.email) {
            //console.log(JSON.stringify(formValues));
            navigate(`/Password?email=${formValues.email}`);
            sessionStorage.setItem("username", formValues.email);
        }
    };

    const validateEmail = (email) => {
        // Basic email format validation using a regular expression
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            setErrors({ ...errors, email: 'Invalid email format' });
        } else {
            setErrors({ ...errors, email: '' });
        }
    };
    return (
    <div>
    <Card>
    <h1><FormattedMessage id="Acc" /></h1>
    <h2><FormattedMessage id="UniAlpes" /></h2>
    <Form >
        <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label><FormattedMessage id="Email" /></Form.Label>
        <Form.Control
            type= "email"
            placeholder={intl.formatMessage({ id: "PlaceEmail" })}
            onChange={handleEmailChange}
            value={formValues.email}
            style={{ borderColor: errors.email ? 'red' : '' }}
        />
        <Form.Text className="text-danger">{errors.email}</Form.Text>
        </Form.Group>
        <Button variant="primary" onClick={clickSubmit}> <FormattedMessage id="Button" /></Button>
    </Form>
    </Card>
    </div>
);
}
export default Login;