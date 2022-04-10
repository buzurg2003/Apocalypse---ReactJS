import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

class Movies extends Component {
    render() {
        return (
            <Container>
                <h2 className={"text-center"}>Фильмы про апокалипсис</h2>
                <Tab.Container id={"left-tabs-example"} defaultActiveKey={"first"} >
                    <Row>
                        <Col sm={3}>
                            <Nav variant={"pills"} className={"flex-column mt-2"}>
                                <Nav.Item>
                                    <Nav.Link eventKey={"first"}>День, когда загорелась Земля</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"second"}>День, когда остановилась Земля</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"third"}>Дитя человеческое</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"fourth"}>Добро пожаловать в Zомбилэнд</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey={"fifth"}>Книга жизни: В ожидании Апокалипсиса</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className={"mt-3"}>
                                <Tab.Pane eventKey={"first"}>
                                    <img
                                        className={"d-block w-100"}
                                        src={"https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/55325fa4-794f-469f-aff3-d0ebadfa5847/1200x630"}
                                        alt={"Image Not Found"}/>
                                    <p>
                                        <p> <b> Про что фильм «День, когда загорелась Земля» </b> </p>
                                        Ряд ядерных испытаний, проведенных американцами совместно с СССР, привел к тому, что планета Земля начала крутиться
                                        вокруг своей оси в обратную сторону и приближаться к Солнцу. Похоже, скоро всем наступит безоговорочный конец. Чем он
                                        ближе, тем больше активизируется пресса: журналисты разоблачают скандалы, закручивают интрижки и вообще готовятся к
                                        встрече с Создателем.
                                        <p> <b> В главных ролях: </b> </p>
                                        <p> Джанет Манро, Лео МакКерн, Эдвард Джадд, Майкл Гудлифф, Бернард Браден,Реджинальд Бекуив, Джин Андерсон,Рене Эшерсон,
                                            Артур Кристиансен, John Adams </p>
                                        <p>
                                            <a href={"https://filmix.ac/filmi/drama/139121-den-kogda-zagorelas-zemlya-1961.html"}>
                                                Смотреть фильм
                                            </a>
                                        </p>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"second"}>
                                    <img
                                        className={"d-block w-100"}
                                        src={"https://i.ytimg.com/vi/vKhocYqL4Uc/maxresdefault.jpg"}
                                        alt={"Image Not Found"}/>
                                    <p>
                                        В разгар холодной войны в Вашингтоне совершает посадку летающая тарелка: в ней прибывают посланник Клаату и его
                                        могучий робот Горт, делегированные федерацией планет, чтобы поставить народам Земли ультиматум о прекращении ядерных
                                        испытаний. Запаниковавшие военные открывают по космолету огонь и ранят посланника. Клаату осознает, что единственный
                                        способ договориться с землянами — это узнать их изнутри: он совершает побег из госпиталя и начинает собственное
                                        исследование планеты.
                                        <p> <b> В главных ролях: </b> </p>
                                        <p> Майкл Ренни, Патриша Нил, Хью Марлоу, Сэм Джаффе, Билли Грэй, Фрэнсис Бавьер, Лок Мартин, Патрик Ахерн,
                                            Уолтер Бэйкон, Рэма Бай </p>
                                        <p>
                                            <a href={"https://gidonline.io/film/den-kogda-zemlya-ostanovilas/"}>
                                                Смотреть фильм
                                            </a>
                                        </p>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"third"}>
                                    <img
                                        className={"d-block w-100"}
                                        src={"https://media.kg-portal.ru/movies/c/childrenofmen/posters/childrenofmen_3.jpg"}
                                        alt={"Image Not Found"}/>
                                    <p>
                                        2027 год. Мир погряз в анархии, причиной которой стало массовое бесплодие. Над человечеством нависла угроза полного
                                        вымирания. Лишенный иллюзий бюрократ превращается в чемпиона гонки на выживание в Лондоне, раздираемом клановыми
                                        войнами противоборствующих группировок. Именно он встает на защиту «последней надежды человечества» - беременной женщины,
                                        которую надо доставить в безопасное место под присмотр врачей…
                                    </p>
                                    <p> <b> В главных ролях: </b> </p>
                                    <p> Клайв Оуэн, Клэр-Хоуп Эшити, Джулианна Мур, Майкл Кейн, Чарли Ханнэм, Чиветель Эджиофор, Пэм Феррис, Дэнни Хьюстон,
                                        Питер Муллан, Темина Санни </p>
                                    <p>
                                        <a href={"https://kinogo.biz/13095-ditja-chelovecheskoe.html"}>
                                            Смотреть фильм
                                        </a>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"fourth"}>
                                    <img
                                        className={"d-block w-100"}
                                        src={"https://www.recenzent.org.ua/wp-content/uploads/2018/09/zombieland-main.jpg"} alt={"Image Not Found"}/>
                                    <p>
                                        После нашествия зомби в США небольшая группа выживших скитается по стране от побережья к побережью, сражаясь с
                                        живыми мертвецами. Они решают остановиться в парке развлечений, надеясь, что там будут в безопасности.
                                    </p>
                                    <p> <b> В главных ролях: </b> </p>
                                    <p> Джесси Айзенберг, Вуди Харрельсон, Эмма Стоун, Эбигейл Бреслин, Билл Мюррей, Эмбер Хёрд, Дерек Граф, Сизар Агирр,
                                        Джейкоб Дж. Экинс, Хантер Элдридж </p>
                                    <p>
                                        <a href={"http://baskino.me/films/boeviki/1447-dobro-pozhalovat-v-zombilend.html"}>
                                            Смотреть фильм
                                        </a>
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey={"fifth"}>
                                    <img
                                        className={"d-block w-100"}
                                        src={"https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/6e4d6afe-6958-495c-8743-a7a7006b06f0/1200x630"}
                                        alt={"Image Not Found"}/>
                                    <p>
                                        В канун Миллениума 31 декабря 1999 года с трапа самолета в Нью-Йоркском аэропорту сходит Иисус Христос в компании с
                                        ассистенткой Магдаленой. В руках у него - ноутбук, а в нем заветная Книга Жизни. Вскоре к ним присоединится Сатана.
                                        За 1 день, проведенный в компьютеризированном сошедшем с ума мире, Христос должен решить, настало ли время для
                                        Апокалипсиса.
                                    </p>
                                    <p> <b> В главных ролях: </b> </p>
                                    <p> Мартин Донован, Пи Джей Харви, Дэйв Симондз, Томас Джей Райан, Михо Никайдо, Д.Дж. Мендел, Катрин Хардт, Джеймс Урбаняк,
                                        Анна Колер,
                                        Мартин Пфефферкорн </p>
                                    <p>
                                        <a href={"https://kinoprokat.site/18153-kniga-zhizni-v-ozhidanii-apokalipsisa.html"}>
                                            Смотреть фильм
                                        </a>
                                    </p>
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default Movies;