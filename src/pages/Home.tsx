import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { setRegion } from '../store/slices/filterSlice';
import CustomCarousel from '../components/carousel';
import CountriesPage from '../containers/CountriesPage';
import Footer from '../containers/Footer';
import { useState } from 'react';

const regions = ['All', 'Asia', 'Europe', 'Africa', 'Americas', 'Oceania'];

const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const filter = useSelector((state: RootState) => state.filter.region);
    const [expanded, setExpanded] = useState(false);

    return (
        <Container fluid className="pt-3 px-3 px-md-5">
            <Row className="align-items-center mb-3">
                <Col xs={12}>
                    {/* Desktop Tabs */}
                    <div className="d-none d-md-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Countries</h5>
                        <div>
                            {regions.map((f) => (
                                <span
                                    key={f}
                                    onClick={() => dispatch(setRegion(f))}
                                    style={{
                                        cursor: 'pointer',
                                        marginLeft: '1rem',
                                        fontWeight: filter === f ? '600' : '400',
                                        borderBottom: filter === f ? '2px solid black' : 'none',
                                        color: filter === f ? 'black' : '#999',
                                        paddingBottom: '2px',
                                    }}
                                >
                                    {f}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="d-flex d-md-none justify-content-between align-items-center">
                        <h5 className="mb-0">Countries</h5>
                        <Dropdown show={expanded} onToggle={() => setExpanded(!expanded)}>
                            <Dropdown.Toggle
                                variant="outline-secondary"
                                size="sm"
                                id="dropdown-basic"
                            >
                                {filter}
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="end">
                                {regions.map((f) => (
                                    <Dropdown.Item
                                        key={f}
                                        onClick={() => {
                                            dispatch(setRegion(f));
                                            setExpanded(false);
                                        }}
                                        active={filter === f}
                                    >
                                        {f}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>

            <Row className="align-items-center mb-4">
                <Col xs={5} sm={4} md={5}>
                    <hr />
                </Col>
                <Col xs={2} sm={4} md={2} className="text-center">
                    <h2 className="fw-bold mb-0">WELCOME</h2>
                </Col>
                <Col xs={5} sm={4} md={5}>
                    <hr />
                </Col>
            </Row>

            <Row className="mb-5 gy-3">
                <Col xs={12} md={4} className="order-1 order-md-2">
                    <div
                        className="bg-[#F0F0F0] d-flex justify-content-center align-items-center"
                        style={{ height: '100%', minHeight: '300px' }}
                    >
                        Frame
                    </div>
                </Col>

                <Col xs={12} md={8} className="order-2 order-md-1">
                    <CustomCarousel />
                </Col>
            </Row>

            <CountriesPage regionFilter={filter} />
            <Footer />
        </Container>
    );
};

export default HomePage;