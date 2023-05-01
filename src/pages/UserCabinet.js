import React, {useContext, useEffect, useState} from 'react'

import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE } from '../utils/consts';
import {useParams} from "react-router-dom";
import {fetchOneBooks} from "../http/bookAPI";
import {baseAppURl} from "../http/ingex";


import  { Container, Tab, Nav, Row, Col  } from 'react-bootstrap';

const BookPage = observer ( () => {

    const [book, setBook] = useState({})
    const {id} = useParams();


    const {user} = useContext(Context);

    return (
        <Container>
            <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-4">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Дизайн</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Команда</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Программирование</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Фреймворки</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Библиотеки</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className='mt-3'>
                            <Tab.Pane eventKey="first">
                                <img className="d-block w-100" src="https://phoenix-site.ru/wp-content/uploads/2022/02/website-block-box-figma-wireframe-kit-resources.jpg" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img className="d-block w-100" src="https://www.beboss.ru/new/files/ae/62/161440804356-p-biznes-fon-temnii-68-7c-ceo.1200x630.jpg" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img className="d-block w-100" src="https://www.it-world.ru/upload/iblock/3f6/6c5bvtxl1zu15ocotsmcsk1e6k2xi6ew/shutterstock_1033853617.jpg" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <img className="d-block w-100" src="https://lh3.googleusercontent.com/3wiGlRk-_x2dW5s1AZ8rU0prhqU0JEqjb6PMVXA-xKGWQ-G5zcPqYxeEFGTgLTvSjxB0bhSGS8oVSHIh66WaR50ROsEDIoTmqKppb_Laa07gRt3cYx-Lv_jgpwP-LKZjBERU0-fK" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <img className="d-block w-100" src="https://pro-dachnikov.com/uploads/posts/2023-01/1673714900_pro-dachnikov-com-p-foto-moya-domashnyaya-biblioteka-foto-63.jpg" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>

            </Tab.Container>
        </Container>
    )
});

export default BookPage