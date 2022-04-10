import React, { Component } from 'react';
import {Button, Container, Card, Row, Col, ListGroup} from 'react-bootstrap';

class Games extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={"9"}>
                        <h2 className={"text-center"}>Игры про апокалипсис</h2>

                        <Card
                            border={"primary"}>
                            <Card.Body>
                                <Card.Title>Outbreak: Contagious Memories</Card.Title>
                                <Card.Img
                                    variant={"top"}
                                    src={"https://cdn.cloudflare.steamstatic.com/steam/apps/1772950/capsule_616x353.jpg?t=1649260497"}/>
                                <Card.Text>
                                    Outbreak: Contagious Memories — увлекательная ролевая игра, созданная по подобию олдскульной классики, такой как Resident Evil и Silent Hill. Присоединяйтесь к Лидии, оказавшейся в наполненном ожившими мертвецами городе. Храбрая девушка берет на себя роль лидера среди кучки уцелевших людей. Проложите себе дорогу через запутанные улицы и столкнитесь со сложными загадками. Столкнитесь с нехваткой ресурсов и думайте на ходу: стоит ли тратить патроны на зомби или лучше рискнуть и пойти в обход? Конечно, не факт, что там не затаился кто похуже.
                                </Card.Text>
                                <Button href={"https://s1.torent-igruha.com/1994-outbreak-contagious-memories.html"} variant={"primary"}>Скачать</Button>
                            </Card.Body>
                        </Card>
                        <Card
                            bg={"primary"}
                            text={"light"}>
                            <Card.Img
                                variant={"top"}
                                src={""}/>
                            <Card.Body>
                                <Card.Title>Expedition Zero</Card.Title>
                                <Card.Img
                                    variant={"top"}
                                    src={"https://images.gamewatcherstatic.com/image/file/3/7f/119213/i0ssIKwazOTHZxZAJUZSm30TVf1IoAUYk1soZjsOuXg.jpg"}/>
                                <Card.Text>
                                    Expedition Zero - Survival Horror с видом от первого лица, шутер, в котором вам придется столкнуться с мистическими событиями, жуткими кровожадными тварями, и опасностями, поджидающими главного героя на каждом шагу. Вы отправитесь в роли главного героя в Сибирь, в глубинку, где произошел некий инцидент. Там, в глубинах леса, где расположилась исследовательская научная секретная база, вышел из-под контроля какой-то эксперимент, после чего и начали происходить странные вещи. Мало того, что в лесу теперь обитает много разных жутких монстров, так еще и животные заражены страшным вирусом, и люди обезумили. И вот, в такой атмосфере вам теперь и придется выживать.
                                </Card.Text>
                                <Button href={"https://s1.torent-igruha.com/1991-expedition-zero.html#sel=1:2,1:3"} variant={"light"}>Скачать</Button>
                            </Card.Body>
                        </Card>
                        <Card border={"primary"}>
                            <Card.Img
                                variant={"top"}
                                src={""}/>
                            <Card.Body>
                                <Card.Title>The Planet Crafter</Card.Title>
                                <Card.Img
                                    variant={"top"}
                                    src={"https://steamrip.com/wp-content/uploads/2022/03/the-planet-crafter-preinstalled-steamrip.jpg.webp"}/>
                                <Card.Text>
                                    The Planet Crafter – симулятор выживания и терраформирования, в котором вам придется отправиться на далекую планету, непригодную для человека, и сделать ее новым домом для людей…
                                    События игры начинают происходить в тот самый момент, когда главного героя, то есть Вас, отправляют на непригодную для жизни человека планету с целью попробовать адаптировать ее к людям. Звучит даже странно, но поверьте, это возможно, и вы теперь сами сможете в этом убедиться. Но для этого придется изрядно потрудиться.
                                </Card.Text>
                                <Button href={"https://s1.torent-igruha.com/1799-the-planet-crafter.html"} variant={"primary"}>Скачать</Button>
                            </Card.Body>
                        </Card>
                        <Card
                            bg={"primary"}
                            text={"light"}>
                            <Card.Img
                                variant={"top"}
                                src={""}/>
                            <Card.Body>
                                <Card.Title>DayZ</Card.Title>
                                <Card.Img
                                    variant={"top"}
                                    src={"https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/4458811/6ab4b8163f923321055729f61dcc0ff9511616f5.png"}/>
                                <Card.Text>
                                    Сначала появился тактический шутер Operation Flashpoint: Cold War Crisis, его приемником стала игра Armed Assault, или просто Arma. На смену ей пришел сиквел, Arma 2, который позже обзавелся модом DayZ. Мод, посвященный выживанию в мире зомби-апокалипсиса, был выпущен в 2012 году, а уже на следующий год разработчики, студия Bohemia Interactive, представили полноценную игру на основе этого мода — DayZ Standalone.
                                </Card.Text>
                                <Button href={"https://s1.torent-igruha.com/622-dayz.html"} variant={"light"}>Скачать</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={"3"}>
                        <h5 className={"text-center mt-5"}>Категории</h5>
                        <Card>
                            <ListGroup variant={"primary"}>
                                <ListGroup.Item>Выживание</ListGroup.Item>
                                <ListGroup.Item>Хоррор</ListGroup.Item>
                                <ListGroup.Item>Драки</ListGroup.Item>
                                <ListGroup.Item>Квесты</ListGroup.Item>
                                <ListGroup.Item>Приключения</ListGroup.Item>
                                <ListGroup.Item>Онлайн игры</ListGroup.Item>
                                <ListGroup.Item>Открытый мир</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>

                </Row>


            </Container>

        );
    }
}

export default Games;