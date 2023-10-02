import './App.css';
import {  useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { FormattedMessage } from "react-intl";
import { useIntl } from "react-intl";

function Password(props) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email');
    const navigate = useNavigate();
    let [formValues, setFormValues] = useState({id: 1, email: email, password: '', role: true});
    const [errors, setErrors] = useState({ email: '', password: '' });
    const intl = useIntl();


    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setFormValues({ ...formValues, password });
        validatePassword(password);
    };

    const clickSubmit = () => {
        validatePassword(formValues.password);
        if (!errors.password) {
            console.log(JSON.stringify(formValues));
            navigate(`/Carros?role=${formValues.role}`);
        }
    };
    const validatePassword = (password) => {
        const passwordRegex = /^.{6,}$/;
        if (!passwordRegex.test(password)) {
            setErrors({
            ...errors,
            password: 'Password should have at least 6 characters',
        });
        } else {
            setErrors({ ...errors, password: '' });
        }
    };
    

return (
    <div>
    <Card>
    <h1>{email}</h1>
    <Form>
        <Form.Group className="mb-6" controlId="formBasicPassword">
        <Form.Label><FormattedMessage id="TP" /></Form.Label>
        <Form.Control
            type= "password"
            placeholder= {intl.formatMessage({ id: "PlacePass" })}
            onChange={handlePasswordChange}
            value={formValues.password}
            style={{ borderColor: errors.password ? 'red' : '' }}
        />
        <Form.Text className="text-danger">{errors.password}</Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
        <FormattedMessage id="Button" />
        </Button>
    </Form>
    </Card>
    </div>
);
}
export default Password;