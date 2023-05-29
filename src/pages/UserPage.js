import React, {useEffect, useState} from 'react'
import { observer } from 'mobx-react-lite';
import userImage from  "../assets/userImg.png"
import {Container, Tab, Nav, Row, Col, Image} from 'react-bootstrap';

import {baseAppURl} from "../http/ingex";
import {BOOK_ROUTE} from "../utils/consts";
import {useNavigate, useParams} from "react-router-dom";
import {getUser} from "../http/librarianAPI";

const UserPage = observer ( () => {

    const [userData, setUserData] = useState({})
    const [userHistory, setUserHistory] = useState([])
    const navigate = useNavigate()

    const {id} = useParams();

    useEffect(() => {
        getUser(id).then(data => {
            setUserData(data.userData);
            setUserHistory(data.history);
        });
    }, [id])

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
                                    <Nav.Link eventKey="second">История</Nav.Link>
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
                                            <p>Очки лояльности: {}</p>
                                        </div>
                                        <div style={{width: 350, marginTop: 60}}>
                                            <p>{userData.fullName}</p>
                                            <p>{userData.mobilePhone}</p>
                                            <p>{userData.email}</p>
                                            <p>{userData.loyaltyPoints}</p>
                                        </div>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    {
                                        userHistory.length === 0 ?
                                            <h5>Нет записей</h5>
                                            :
                                            <div>
                                                <Row className='d-flex justify-content-center'>
                                                    <Col sm={6} ><h4>Основная информация</h4></Col>
                                                    <Col sm={3}><h4>Срок возврата</h4></Col>
                                                    <Col sm={3}><h4>Статус</h4></Col>
                                                </Row>
                                                {
                                                    userHistory.map(historyInfo =>
                                                        <Row  className='d-flex align-items-center' key={historyInfo._id}>
                                                            <Col sm={6} className='d-flex flex-row' >
                                                                <Image height={120} src={baseAppURl + historyInfo.book.imageUrl} style={{cursor: 'pointer', margin: 20}}  onClick={() => navigate(BOOK_ROUTE + "/" + historyInfo.book._id)}/>
                                                                <div className='d-flex flex-column ' style={{width: 350}}>
                                                                    <h5 className='d-flex justify-content-center' style={{cursor: 'pointer', marginTop: 15}}  onClick={() => navigate(BOOK_ROUTE + "/" + historyInfo.book._id)}
                                                                    >
                                                                        {historyInfo.book.title}
                                                                    </h5>
                                                                    <h5>{historyInfo.book.year} {historyInfo.book.authors}</h5>
                                                                </div>
                                                            </Col>
                                                            <Col sm={3} >
                                                                <h5 className='d-flex justify-content-center'>{historyInfo.returnDate.substring(0,10)}</h5>
                                                            </Col>
                                                            {
                                                                historyInfo.isGiven ?

                                                                    historyInfo.isReturned ?
                                                                        <Col sm={3} >
                                                                            <h5>Возвращена</h5>
                                                                        </Col>
                                                                        :
                                                                        <Col sm={3} >
                                                                            <h5>Не возвращена</h5>
                                                                        </Col>
                                                                    :
                                                                    <Col sm={3} >
                                                                        <h5>Не получена</h5>
                                                                    </Col>
                                                            }
                                                        </Row>
                                                    )
                                                }
                                            </div>
                                    }
                                </Tab.Pane>

                            </Tab.Content>
                        </Col>
                    </Row>

                </Tab.Container>
            </Container>
        </div>

    )
});

export default UserPage