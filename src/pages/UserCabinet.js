import React, {useContext, useEffect, useState} from 'react'

import { Context } from '..';
import { observer } from 'mobx-react-lite';
import userImage from  "../assets/userImg.png"



import {Container, Tab, Nav, Row, Col, Image} from 'react-bootstrap';
import {baseAppURl} from "../http/ingex";

const BookPage = observer ( () => {

    const [userEntity, setUserEntity] = useState({})

    const {user} = useContext(Context);

    return (
        <div style={{minHeight: "756px"}}>
            <Container style={{backgroundColor: "white", marginTop: "20px", paddingBottom: "20px", marginBottom: "20px", borderRadius: "30px"}}>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-4">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Личные данные</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Неполученные книги</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Невозращенные книги</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">История</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className='mt-3'>
                                <Tab.Pane eventKey="first"  style={{height: "500px"}}>
                                    <div className='d-flex justify-content-center'><Image height={350} src={userImage} style={{margin: 20}}/>
                                        <div style={{width: 200, marginTop: 60, marginLeft: "20px"}}>
                                            <p>Полное имя:</p>
                                            <p>мобильный телефон:</p>
                                            <p>email:</p>
                                            <p>Очки лояльности:</p>
                                        </div>
                                        <div style={{width: 350, marginTop: 60}}>
                                            <p>{userEntity.fullName}</p>
                                            <p>{userEntity.mobilePhone}</p>
                                            <p>{userEntity.email}</p>
                                            <p>{userEntity.loyaltyPoints}</p>
                                        </div>
                                    </div>
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
                                    <img className="d-block w-100" src="https://www.it-world.ru/upload/iblock/3f6/6c5bvtxl1zu15ocotsmcsk1e6k2xi6ew/shutterstock_1033853617.jpg" />
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
        </div>

    )
});

export default BookPage