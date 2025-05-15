import { Container } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container fluid className="text-center py-4 mt-5">
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
            <p className="mb-1 small fw-medium">Example@email.com</p>
            <p className="mb-0 small text-muted">
                Copyright © 2020 Name. All rights reserved.
            </p>
        </Container>
    );
};

export default Footer;