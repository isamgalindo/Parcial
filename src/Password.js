import './App.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Carros from './Carros';
function Password() {
    const [isShown, setIsShown] = useState(false);
    let [formValues, setFormValues] = useState({id: 1, email: '', password: '', role: true});
    const [errors, setErrors] = useState({ email: '', password: '' });


    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setFormValues({ ...formValues, password });
        validatePassword(password);
    };

    const clickSubmit = () => {
        validatePassword(formValues.password);
        if (!errors.password) {
            console.log(JSON.stringify(formValues));
            setIsShown(current => !current);
        /*
        validatePassword(formValues.password);
        if (!errors.email && !errors.password) {
            alert(JSON.stringify(formValues));
            */
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
    <Card>?
    <h1>@</h1>
    <Form>
        <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control
            type= "password"
            placeholder="Enter password"
            onChange={handlePasswordChange}
            value={formValues.password}
            style={{ borderColor: errors.password ? 'red' : '' }}
        />
        <Form.Text className="text-danger">{errors.password}</Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
        Submit
        </Button>
    </Form>
    {isShown && <Carros />}
    </Card>
    </div>
);
}
export default Password;