import React, {useEffect, useState} from 'react'
import { observer } from 'mobx-react-lite';
import {Container, Tab, Row, Col, Image, Button, Tabs} from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import {baseAppURl} from "../http/ingex";
import {BOOK_ROUTE, USERPAGE_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import {getActiveOrders, getOrdersToReturn} from "../http/orderAPI";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {giveBook, noGiveBook, noRecieveBook, recieveBook, searchUsers} from "../http/librarianAPI";

const LibrarianPage = observer ( () => {


    const [activeOrders, setActiveOrders] = useState([])
    const [ordersToReturn, setOrdersToReturn] = useState([])

    const [searchStr, setSearchString] = useState('')
    let [searchType, SetSearchType] = useState(0)
    const [searchUserArr, setSearchUserArr] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getActiveOrders().then(data => {
            setActiveOrders(data)
        });
        getOrdersToReturn().then(data => {
            setOrdersToReturn(data);
        })
    }, [])

    const search = () => {
        if (searchStr === "")
        {
            setSearchUserArr([]);
        } else {
            searchUsers(searchStr, searchType).then(data => {
                setSearchUserArr(data);
            })
        }

    }

    return (
        <div style={{minHeight: "756px"}}>
            <Container style={{backgroundColor: "white", marginTop: "20px", paddingLeft:"25px", paddingRight:"25px", paddingBottom: "20px", marginBottom: "20px", borderRadius: "30px"}}>
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="profile" title="Заявки на выдачу">
                        {
                            activeOrders.length === 0 ?
                                <h3>На данный момент нет заявок на получение книг</h3>
                                :
                                <div>
                                    <Row>
                                        <Col sm={4} ><h4>Основная информация</h4></Col>
                                        <Col sm={2}><h4>Читатель</h4></Col>
                                        <Col sm={2}><h4>Дата создания</h4></Col>
                                        <Col sm={4} className="d-flex justify-content-center"><h4>Действие</h4></Col>
                                    </Row>
                                    {
                                        activeOrders.map(orderInfo =>
                                            <Row  className='d-flex align-items-center' key={orderInfo._id}>
                                                <Col sm={4} className='d-flex flex-row'>
                                                    <Image height={100} src={baseAppURl + orderInfo.book.imageUrl} style={{cursor: 'pointer', margin: 20}}  onClick={() => navigate(BOOK_ROUTE + "/" + orderInfo.book._id)}/>
                                                    <div className='d-flex flex-column ' style={{width: 350}}>
                                                        <h6 className='d-flex justify-content-center' style={{cursor: 'pointer', marginTop: 15}}  onClick={() => navigate(BOOK_ROUTE + "/" + orderInfo.book._id)}
                                                        >
                                                            {orderInfo.book.title}
                                                        </h6>

                                                    </div>
                                                </Col>
                                                <Col sm={2} >
                                                    <h6 className='d-flex justify-content-center'
                                                        onClick={() => navigate(USERPAGE_ROUTE + "/" + orderInfo.reader._id)}
                                                        style={{cursor: 'pointer'}}>
                                                        {orderInfo.reader.fullName + " " + orderInfo.reader.email}</h6>
                                                </Col>
                                                <Col sm={2} >
                                                    <h5 className='d-flex justify-content-center'>{orderInfo.createdAt.substring(0,10)}</h5>
                                                </Col>
                                                <Col sm={2} >
                                                    <Button variant="success" onClick={() => giveBook(orderInfo._id)} style={{marginLeft:15}}>
                                                        Выдать книгу
                                                    </Button>
                                                </Col>
                                                <Col sm={2} >
                                                    <Button variant="dark" onClick={() => noGiveBook(orderInfo._id)} style={{marginLeft:15}}>
                                                        Отказать в выдаче
                                                    </Button>
                                                </Col>
                                            </Row>
                                        )
                                    }
                                </div>
                        }
                    </Tab>
                    <Tab eventKey="longer-tab" title="Заявки на возврат">
                        {
                            ordersToReturn.length === 0 ?
                                <h3>На данный момент нет заявок на возврат книг</h3>
                                :
                                <div>
                                    <Row>
                                        <Col sm={4} ><h4>Основная информация</h4></Col>
                                        <Col sm={2}><h4>Читатель</h4></Col>
                                        <Col sm={2}><h4>Срок возврата</h4></Col>
                                        <Col sm={4} className="d-flex justify-content-center"><h4>Действие</h4></Col>
                                    </Row>
                                    {
                                        ordersToReturn.map(orderInfo =>
                                            <Row  className='d-flex align-items-center' key={orderInfo._id}>
                                                <Col sm={4} className='d-flex flex-row'>
                                                    <Image height={100} src={baseAppURl + orderInfo.book.imageUrl} style={{cursor: 'pointer', margin: 20}}  onClick={() => navigate(BOOK_ROUTE + "/" + orderInfo.book._id)}/>
                                                    <div className='d-flex flex-column ' style={{width: 350}}>
                                                        <h6 className='d-flex justify-content-center' style={{cursor: 'pointer', marginTop: 15}}  onClick={() => navigate(BOOK_ROUTE + "/" + orderInfo.book._id)}
                                                        >
                                                            {orderInfo.book.title}
                                                        </h6>

                                                    </div>
                                                </Col>
                                                <Col sm={2} >
                                                    <h6 className='d-flex justify-content-center' onClick={() => navigate(USERPAGE_ROUTE + "/" + orderInfo.reader._id)}
                                                        style={{cursor: 'pointer'}}>
                                                        {orderInfo.reader.fullName + " " + orderInfo.reader.email}
                                                    </h6>
                                                </Col>
                                                <Col sm={2} >
                                                    <h5 className='d-flex justify-content-center'>{orderInfo.returnDate.substring(0,10)}</h5>
                                                </Col>
                                                <Col sm={2} >
                                                    <Button variant="success" onClick={() => recieveBook(orderInfo._id)} style={{marginLeft:15}}>
                                                        Принять книгу
                                                    </Button>
                                                </Col>
                                                <Col sm={2} >
                                                    <Button variant="dark" onClick={() => noRecieveBook(orderInfo._id)} style={{marginLeft:15}}>
                                                        Отказать в приемке
                                                    </Button>
                                                </Col>
                                            </Row>
                                        )
                                    }
                                </div>
                        }
                    </Tab>
                    <Tab eventKey="contact" title="Поиск читателя">
                        <Container className="d-flex justify-content-center"  style={{backgroundColor: "white", minWidth: "350px", width:"50vw", borderRadius: "30px"}}>
                            <Form className="d-flex align-self-center " style={{minWidth: "350px", width:"50vw", height:40, marginLeft: "5px", marginRight: "5px"}}>
                                <Form.Control
                                    type="search"
                                    placeholder= "Поиск читателя расширенный"
                                    aria-label="Search"
                                    value={searchStr || ""}
                                    onChange={e => setSearchString(e.target.value)}
                                />
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="success" style={{width: "150px"}} onClick={search}>Поиск</Button>

                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => SetSearchType(0)}>По имени</Dropdown.Item>
                                        <Dropdown.Item onClick={() => SetSearchType(1)}>По почте</Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form>
                        </Container>

                        {
                            searchUserArr.length === 0 ?
                                <div/>
                                :
                                <Container className="mt-3">
                                    <Table striped>
                                        <thead>
                                        <tr>
                                            <th>ФИО</th>
                                            <th>Почта</th>
                                            <th>Мобильный телефон</th>
                                            <th>Очки лояльности</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            searchUserArr.map(user =>
                                                <tr key={user._id} onClick={() => navigate(USERPAGE_ROUTE + "/" + user._id)} style={{cursor: 'pointer', marginTop: 15}}>
                                                    <td>{user.fullName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.mobilePhone}</td>
                                                    <td>{user.loyaltyPoints}</td>
                                                </tr>
                                            )

                                        }
                                        </tbody>
                                    </Table>


                                </Container>

                        }
                    </Tab>
                </Tabs>
            </Container>
        </div>

    )
});

export default LibrarianPage