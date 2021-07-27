import { Carousel } from "react-bootstrap";

const CarouselDiv = () => {
    return (
        <>
            <Carousel className="my-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "200px" }}
                        src="./Image/Python.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "250px" }}
                        src="./Image/Cyber.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default CarouselDiv;