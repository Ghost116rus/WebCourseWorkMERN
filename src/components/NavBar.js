import React, { useContext } from 'react';
import { Context } from '..';
import {useLocation, useNavigate} from 'react-router-dom';
import {
    ADMIN_ROUTE,
    BOOK_ROUTE, LIBRARIAN_ROUTE,
    LOGIN_ROUTE,
    SEARCH_ROUTE,
    SEARCHOME_ROUTE,
    SHOP_ROUTE,
    USER_ROUTE
} from '../utils/consts';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';
import {observer} from 'mobx-react-lite';
import eye from '../assets/eye.png'
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {useState} from "react";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const location = useLocation();
    const isSearch = (location.pathname === SHOP_ROUTE  || location.pathname.includes(BOOK_ROUTE))

    const logOut = () => {
        user.setIsAuth(false);

        if (location.pathname !== SEARCHOME_ROUTE) {
            navigate(SEARCHOME_ROUTE);
        }

        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
    }

    const [searchString, setSearchString] = useState('')
    let [searchType, SetSearchType] = useState(0)


    const search = () => {

        if (searchString.split(" ")[0].length !== 0)
        {
            navigate(SEARCH_ROUTE + "/" + searchType + "/" + searchString)
        } else {
            alert("Некорректно введена строка поиска");
        }
    }


    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container>
                <Container>
                    <Navbar.Brand href={SEARCHOME_ROUTE}>
                        <img
                        alt=""
                        src={eye}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />{' '}
                        Просвещеникус
                    </Navbar.Brand>
                    <Navbar.Brand style={{color:'white',textDecoration: 'none'}} href={SHOP_ROUTE}>Книги</Navbar.Brand>
                </Container>
                <Container className="d-flex justify-content-between">
                    {isSearch ?
                        <Form className="d-flex align-self-center" style={{minWidth: "350px", width:"25vw", height:40, marginRight:20}}>
                            <Form.Control
                                type="search"
                                placeholder="Поиск книги"
                                aria-label="Search"
                                onChange={e => setSearchString(e.target.value)}
                            />
                            <Dropdown as={ButtonGroup}>
                                <Button variant="success" style={{width: "80px"}} onClick={search}>Поиск</Button>

                                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => SetSearchType(0)} >По названию</Dropdown.Item>
                                    <Dropdown.Item onClick={() => SetSearchType(1)} >По автору</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                        </Form>
                        :
                        <div></div>
                    }
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{color: 'white', marginLeft: 20}}>
                            {localStorage.getItem("userRole") === "1" ?
                                <Button variant= {"outline-light"} style={{minWidth:"10vw"}} onClick={() => navigate(USER_ROUTE)}>Личный кабинет</Button>
                                :
                                <div>
                                    {localStorage.getItem("userRole") === "0" ?
                                        <Button variant={"outline-light"} style={{minWidth:"10vw"}} onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                                        :
                                        <Button variant={"outline-light"} style={{minWidth:"10vw"}} onClick={() => navigate(LIBRARIAN_ROUTE)}>Кабинет библиотекаря</Button>
                                    }
                                </div>
                            }
                            <Button variant= {"outline-light"} className="mr-10" onClick={() => logOut()}>Выйти</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                        </Nav>
                    }
                </Container>
            </Container>
      </Navbar>

    );
});

export default NavBar