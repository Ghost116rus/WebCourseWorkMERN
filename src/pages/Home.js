import React, {useContext, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar';
import BookList from '../components/BookList';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBooks, fetchGenres} from "../http/bookAPI";
import ListGroup from "react-bootstrap/ListGroup";
import Pages from "../components/Pages";

const Home = observer(() => {

    const {book} = useContext(Context);


    return (
        <Container className='min-vh-100'>
            Hello WORLD
        </Container>
    )
});

export default Home