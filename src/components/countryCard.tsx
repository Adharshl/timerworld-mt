// components/CountryCard.tsx
import { Card, Row, Col, Image } from 'react-bootstrap';

interface CountryCardProps {
    name: string;
    region: string;
    flag: string;
}

const CountryCard = ({ name, region, flag }: CountryCardProps) => {
    return (
        <Card className="shadow-sm border mb-4" style={{ minHeight: '120px' }}>
            <Card.Body>
                <Row className="align-items-center">
                    <Col xs={4} md={3}>
                        <Image
                            src={flag}
                            alt={`${name} flag`}
                            rounded
                            fluid
                            style={{ maxHeight: '70px', objectFit: 'cover' }}
                        />
                    </Col>
                    <Col>
                        <h5 className="mb-1 fw-bold">{name}</h5>
                        <small className="text-muted">{region}</small>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CountryCard;