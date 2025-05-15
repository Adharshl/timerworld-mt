import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CountryCard from '../components/countryCard';

interface Country {
    name: string;
    region: string;
    flag: string;
}

interface CountriesPageProps {
    regionFilter: string;
}

const CountriesPage = ({ regionFilter }: CountriesPageProps) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(12);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all?fields=name,region,flag')
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    useEffect(() => {
        const filtered =
            regionFilter === 'All'
                ? countries
                : countries.filter((c) => c.region === regionFilter);
        setFilteredCountries(filtered);
        setVisibleCount(12);
    }, [regionFilter, countries]);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <Container className="my-4">
            {loading ? (
                <Row xs={1} sm={2} md={2} lg={2} xl={3} className="g-4">
                    {[...Array(6)].map((_, i) => (
                        <Col key={i}>
                            <Card className="h-100 p-3">
                                <div className="placeholder-glow">
                                    <div
                                        className="bg-secondary rounded mb-2"
                                        style={{ height: '80px' }}
                                    />
                                    <span className="placeholder col-6"></span>
                                    <span className="placeholder col-4"></span>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <>
                    <Row xs={1} sm={2} md={2} lg={2} xl={3} className="g-4">
                        {filteredCountries.slice(0, visibleCount).map((c, index) => (
                            <Col key={index}>
                                <CountryCard name={c.name} region={c.region} flag={c.flag} />
                            </Col>
                        ))}
                    </Row>

                    {visibleCount < filteredCountries.length && (
                        <div className="text-center mt-4">
                            <Button variant="outline-primary" onClick={handleLoadMore}>
                                Load More
                            </Button>
                        </div>
                    )}
                </>
            )}
        </Container>
    );
};

export default CountriesPage;
