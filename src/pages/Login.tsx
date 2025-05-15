import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        keepSignedIn: false,
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Simulate authentication
        const isAuthenticated = formData.username === 'admin' && formData.password === 'admin123';

        if (isAuthenticated) {
            // Redirect to HomePage
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
            <Row className="w-100" style={{ maxWidth: '1000px' }}>
                {/* Left Side: Form */}
                <Col md={6} className="px-4">
                    <h3 className="fw-bold mb-3">Sign In</h3>
                    <p>
                        New user? <a href="#">Create an account</a>
                    </p>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formUsername" className="mb-3">
                            <Form.Control
                                type="text"
                                name="username"
                                placeholder="Username or email"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 d-flex align-items-center">
                            <Form.Check
                                type="checkbox"
                                name="keepSignedIn"
                                label="Keep me signed in"
                                checked={formData.keepSignedIn}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Button variant="dark" className="w-100 mb-3" type="submit">
                            Sign In
                        </Button>

                        <div className="text-center my-3">
                            <hr />
                            <span className="bg-white px-2 position-relative" style={{ top: '-20px' }}>
                                Or Sign In With
                            </span>
                        </div>
                        <div className="d-flex justify-content-center gap-3 mb-3">
                            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube].map((Icon, index) => (
                                <div
                                    key={index}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        border: '1px solid #000',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                    }}
                                >
                                    <Icon size={16} />
                                </div>
                            ))}
                        </div>
                    </Form>
                </Col>

                <Col md={6} className="d-none d-md-flex align-items-center justify-content-center">
                    <img
                        src="https://www.svgrepo.com/show/527964/walking.svg"
                        alt="Illustration"
                        style={{ maxWidth: '80%', maxHeight: '400px' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default LoginPage;