import React, {useEffect, useState} from 'react'
import { observer } from 'mobx-react-lite';
import userImage from  "../assets/userImg.png"
import {Container, Tab, Nav, Row, Col, Image, Button} from 'react-bootstrap';
import {getUserInfo, notRecieveBook, requestToReturnBook} from "../http/userAPI";
import {baseAppURl} from "../http/ingex";
import {BOOK_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const BookPage = observer ( () => {

    const [userData, setUserData] = useState({})
    const [userNotGivenBooks, setUserNotGivenBooks] = useState([])
    const [userActiveOrders, setUserActiveOrders] = useState([])
    const [userHistory, setUserHistory] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getUserInfo().then(data => {
            setUserData(data.userData);
            setUserNotGivenBooks(data.notGiven);
            setUserActiveOrders(data.active);
            setUserHistory(data.history);

        });
    }, [])

    return (
        <div style={{minHeight: "756px"}}>
            <Container style={{backgroundColor: "white", marginTop: "20px", paddingBottom: "20px", marginBottom: "20px", borderRadius: "30px"}}>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first" >
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

                    <Tab.Content className='mt-3'>
                        <Tab.Pane eventKey="first"  style={{height: "500px"}}>
                            First
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            Second
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            Third
                        </Tab.Pane>
                        <Tab.Pane eventKey="fourth">
                            Fourth
                        </Tab.Pane>

                    </Tab.Content>
                </Tab.Container>
            </Container>
        </div>

    )
});

export default BookPage