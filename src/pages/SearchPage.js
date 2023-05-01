import React, {useContext, useEffect} from 'react'
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar';
import BookList from '../components/BookList';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {searchBooks} from "../http/bookAPI";
import Pages from "../components/Pages";
import SearchComponent from "../components/SearchComponent";
import {useParams} from "react-router-dom";

const SearchPage = observer(() => {

    const {book} = useContext(Context);
    const {SearchType, searchString} = useParams();

    useEffect(() => {
        searchBooks(searchString, SearchType, 1, book.myLimit).then(data => {
            book.setBooks(data.books)
            book.setTotalCount(data.count)
        });
    }, [])
    useEffect(() => {

        searchBooks(searchString, SearchType, book.page, book.myLimit).then(data => {
            book.setBooks(data.books)
            book.setTotalCount(data.count)
        })


    }, [book.page, searchString, SearchType])



    return (
        <Container className='min-vh-100' style={{marginBottom: "25px", zIndex: 25}}>
            <Container className="mt-3">
                <SearchComponent/>
            </Container>
            <Row className="mt-5">
                <Col md={1}>
                </Col>

                <Col md={9} style={{marginLeft:"3vw"}}>
                    <BookList/>
                    <Pages/>
                </Col>

            </Row>
        </Container>
    )
});

export default SearchPage