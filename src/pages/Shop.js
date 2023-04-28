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

const Shop = observer(() => {

  const {book} = useContext(Context);

  useEffect(() => {

      fetchGenres().then(data => book.setTypes(data));
      fetchBooks().then(data => book.setBooks(data));
  }, [])


  return (
      <Container className='min-vh-100'>
        <Row className='mt-5'>
          <Col md={3}>
            <TypeBar/>
          </Col>

          <Col md={9}>
            <BookList/>
          </Col>
        </Row>
      </Container>
  )
});

export default Shop