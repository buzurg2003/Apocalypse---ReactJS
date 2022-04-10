import React, {Component} from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

class News extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md={"9"}>
                        <Card
                            className={"m-2"}
                            style={{
                                width: '100%',
                                margin: 'auto',
                                display: 'flex',
                                float: 'none',
                                flexDirection: 'row'}}
                            border={"white"}>
                            <img
                                width={150}
                                height={150}
                                className={"mr-3"}
                                src={"https://tengrinews.kz/userdata/news/2018/news_339605/thumb_m/photo_242948.jpg"}

                             alt={"Image Not Found"}/>
                            <Card.Body>
                                <h5>"Апокалипсис сегодня": в Сети показали последствия "восстания машин"</h5>
                                <p>
                                    В Сети стремительно набирает популярность постапокалиптическое видео, сделанное
                                    YouTube-каналом NIXOLAS. На записи запечатлен мир, захваченный роботами SpotMini.
                                    Планета превратилась в безжизненную пустыню, населенную техникой BostonDynamic и
                                    лишенную каких-либо признаков жизни.

                                </p>
                            </Card.Body>
                        </Card>
                        <Card
                            className={"m-2"}
                            style={{
                                width: '100%',
                                margin: 'auto',
                                display: 'flex',
                                float: 'none',
                                flexDirection: 'row'}}
                            border={"white"}>
                            <img
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    margin: 'auto',
                                    display: 'flex',
                                    float: 'none',
                                    flexDirection: 'row'}}
                                width={150}
                                height={150}
                                className={"mr-3"}
                                src={"https://s0.rbk.ru/v6_top_pics/resized/500x312_crop/media/img/3/45/755797620310453.jpeg"}

                             alt={"Image Not Found"}/>
                            <Card.Body>
                                <h5>Генсек ООН назвал четырех угрожающих миру «всадников Апокалипсиса»</h5>
                                <p>
                                    По его мнению, за последние годы напряженность во всем мире достигла
                                    наивысшего уровня, что ведет к риску разрушения международных отношений.
                                    Он призвал сосредоточиться на ключевых причинах кризиса
                                </p>
                            </Card.Body>
                        </Card>
                        <Card
                            className={"m-2"}
                            style={{
                                width: '100%',
                                margin: 'auto',
                                display: 'flex',
                                float: 'none',
                                flexDirection: 'row'}}
                            border={"white"}>
                            <img
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    margin: 'auto',
                                    display: 'flex',
                                    float: 'none',
                                    flexDirection: 'row'}}
                                width={150}
                                height={150}
                                className={"mr-3"}
                                src={"https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/3/87/756491624404873.jpg"}
                                alt={"Image Not Found"}
                            />
                            <Card.Body>
                                <h5>Ученые назвали самую безопасную страну в случае глобальной катастрофы</h5>
                                <p>
                                    Специалисты Университета Отаго (Новая Зеландия) определили страны, которые смогут
                                    стать убежищем для человечества в случае «глобальной катастрофической пандемии»,
                                    говорится в сообщении на сайте университета.
                                    Открытия в области биотехнологий (в частности, генной инженерии) могут привести к
                                    пандемии, которая может привести к вымиранию человечества, считает профессор
                                    Ник Уилсон.
                                </p>
                            </Card.Body>
                        </Card>
                        <Card
                            className={"m-2"}
                            style={{
                                width: '100%',
                                margin: 'auto',
                                display: 'flex',
                                float: 'none',
                                flexDirection: 'row'}}
                            border={"white"}>
                            <img
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    margin: 'auto',
                                    display: 'flex',
                                    float: 'none',
                                    flexDirection: 'row'}}
                                width={150}
                                height={150}
                                className={"mr-3"}
                                src={"https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/9/99/755117504627999.jpg"}
                                alt={"Image Not Found"}
                            />
                            <Card.Body>
                                <h5>МИД предупредил об угрозе «апокалиптического» сценария для КНДР</h5>
                                <p>
                                    Обострение ситуации вокруг КНДР может привести к «апокалиптическому» сценарию,
                                    заявил замглавы МИД России Игорь Моргулов. Единственным способом избежать этого
                                    является развитие мирного диалога
                                </p>
                            </Card.Body>
                        </Card>
                        <Card
                            className={"m-2"}
                            style={{
                                width: '100%',
                                margin: 'auto',
                                display: 'flex',
                                float: 'none',
                                flexDirection: 'row'}}
                            border={"white"}>
                            <img
                                style={{
                                    width: '150px',
                                    height: '150px',
                                    margin: 'auto',
                                    display: 'flex',
                                    float: 'none',
                                    flexDirection: 'row'}}
                                width={150}
                                height={150}
                                className={"mr-3"}
                                src={"https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/3/00/754598777029003.jpeg"}
                                alt={"Image Not Found"}
                            />
                            <Card.Body>
                                <h5>Найден новый календарь Майя без упоминаний о конце света</h5>
                                <p>
                                    В джунглях на севере Гватемалы в руинах одного из городов, когда-то принадлежавшего
                                    цивилизации Майя, археологи обнаружили еще один календарь, сообщает Reuters.
                                    Предполагается, что находка, принцип которой базируется на движение небесных светил,
                                    является самой ранней из когда-либо встречавшихся написанных систем исчисления
                                    времени.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={"3"}>
                        <h5 className={"text-center mt-5"}>Информация о сайте</h5>
                        <Card>
                            <ListGroup variant={"primary"}>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>ReactJS</ListGroup.Item>
                                <ListGroup.Item>React Router</ListGroup.Item>
                                <ListGroup.Item>Bootstrap</ListGroup.Item>
                                <ListGroup.Item>JSX</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className={"mt-2"} bg={"light"}>
                            <Card.Body>
                                <Card.Title>О сайте</Card.Title>
                                <Card.Text>
                                    Сайт написан на языке JavaScript с помощью ReactJS.
                                    Для перехода между страницами используется ReactRouter.
                                    Помимо этого, также используется Bootstrap.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default News;