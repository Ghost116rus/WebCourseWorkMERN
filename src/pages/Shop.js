import React, {useContext, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar';
import BookList from '../components/BookList';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBooks, fetchGenres} from "../http/bookAPI";
import Pages from "../components/Pages";

const Shop = observer(() => {

  const {book} = useContext(Context);

  useEffect(() => {

      fetchGenres().then(data => book.setTypes(data));
      fetchBooks(null, 1, book.myLimit).then(data => {
          book.setBooks(data.books)
          book.setTotalCount(data.count)
      });
  }, [])
  useEffect(() => {
      fetchBooks(book.selectedType.name, book.page, book.myLimit).then(data => {
          book.setBooks(data.books)
          book.setTotalCount(data.count)
      })
  }, [book.page, book.selectedType])


  return (
      <Container className='min-vh-100' style={{marginBottom: "25px", zIndex: 25}}>
        <Row className="mt-5">
          <Col md={3}>
            <TypeBar/>
          </Col>

          <Col md={9} >
            <BookList/>
              <Pages/>
          </Col>

        </Row>
      </Container>
  )
});

export default Shop