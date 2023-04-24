import { observer } from 'mobx-react-lite'
import { React, useContext } from 'react'
import { Container, Row } from 'react-bootstrap';
import BookItem from './BookItem';
import { Context } from '..';

const BookList = observer(() => {
    const {book} = useContext(Context);
    return (
        <Container className='d-flex flex-wrap'>
            {book.books.map(book =>
                <BookItem key={book.id} book={book}/>)
            }
        </Container>
    )
});

export default BookList