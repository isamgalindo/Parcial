import './App.css';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Password from './Password';
function Login(props) {
    const [isShown, setIsShown] = useState(false);
    const [count, setCount] = useState(0);
    let [formValues, setFormValues] = useState({id: 1, email: '', password: '', role: true});
    const [errors, setErrors] = useState({ email: '', password: '' });


    const handleEmailChange = (e) => {

        setFormValues({ ...formValues, email: e.target.value });
        validateEmail(formValues.email);
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setFormValues({ ...formValues, password });
        validatePassword(password);
    };

    const clickSubmit = () => {
        validateEmail(formValues.email);
        if (!errors.email) {
            console.log(JSON.stringify(formValues));
            setIsShown(current => !current);
        /*
        validatePassword(formValues.password);
        if (!errors.email && !errors.password) {
            alert(JSON.stringify(formValues));
            */
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
    const handleCountNext = () => {
        console.log("Button clicked...");
        if (count >= 4) {
            setCount(4)} else 
            {setCount(count+1)};
        console.log(count);
        
    };

return (
    <div>
    <Card>
    <h1>Acceder</h1>
    <h2>Usa tu cuenta UniAlpes</h2>
    <Form >
        <Form.Group className="mb-6" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
            type= "email"
            placeholder="Enter email"
            onChange={handleEmailChange}
            value={formValues.email}
            style={{ borderColor: errors.email ? 'red' : '' }}
        />
        <Form.Text className="text-danger">{errors.email}</Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={clickSubmit}>
        Submit
        </Button>
        {isShown && <Password />}
    </Form>
    </Card>
    </div>
);
}
export default Login;