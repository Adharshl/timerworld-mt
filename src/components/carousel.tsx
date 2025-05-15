import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CustomCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    const images = ['Image 1', 'Image 2', 'Image 3']; // Replace with actual images

    return (
        <div className="position-relative" style={{ height: '300px' }}>
            {/* Carousel Content */}
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={false}
                interval={null}
            >
                {images.map((label, i) => (
                    <Carousel.Item key={i}>
                        <div
                            className="bg-[#F0F0F0] d-flex justify-content-center align-items-center"
                            style={{ height: '300px' }}
                        >
                            <div>{label}</div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* Left Arrow */}
            <button
                className="position-absolute top-50 start-0 translate-middle-y btn"
                onClick={() => setIndex((index - 1 + images.length) % images.length)}
            >
                <FaChevronLeft size={20} />
            </button>

            {/* Right Arrow */}
            <button
                className="position-absolute top-50 end-0 translate-middle-y btn"
                onClick={() => setIndex((index + 1) % images.length)}
            >
                <FaChevronRight size={20} />
            </button>

            {/* Indicators */}
            <div className="d-flex justify-content-center mt-2">
                {images.map((_, i) => (
                    <div
                        key={i}
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            margin: '0 4px',
                            backgroundColor: index === i ? '#000' : '#ccc',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default CustomCarousel;