import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import apocalypse1 from "../assets/Apocalypse1.jpg";
import apocalypse2 from "../assets/Apocalypse2.jpg";
import apocalypse3 from "../assets/Apocalypse3.jpg";

class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={ apocalypse1 }
                        alt={"Apocalypse1"}
                    />
                    <Carousel.Caption>
                        <h3>Апокалипсис</h3>
                        <p>вселенская катастрофа, конец света и полный трындец всему.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={ apocalypse2 }
                        alt={"Apocalypse2"}
                    />
                    <Carousel.Caption>
                        <h3>Апокалипсис</h3>
                        <p>В дословном переводе с греческого на русский слово апокалипсис означает «откровение».</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"d-block w-100"}
                        src={ apocalypse3 }
                        alt={"Apocalypse3"}
                    />
                    <Carousel.Caption>
                        <h3>Апокалипсис</h3>
                        <p>Слово «апокалипсис» приобрело мрачный оттенок и стало обозначать вселенское бедствие, конец света или просто большую трагедию в жизни человека.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;