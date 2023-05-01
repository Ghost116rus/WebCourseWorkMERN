import { observer } from 'mobx-react-lite'
import { React, useContext } from 'react'
import { Container, Row } from 'react-bootstrap';
import BookItem from './BookItem';
import { Context } from '..';

const BookList = observer(() => {
    const {book} = useContext(Context);
    return (
        <Container className='d-flex flex-wrap' style={{minHeight: '700px'}}>
            {book.books.length === 0 ?

                <div style={{marginLeft: "10vw"}}>
                    <h2>К сожалению, ничего не найдено</h2>
                </div>


                :
                book.books.map(book =>
                    <BookItem key={book._id} book={book}/>)

            }
        </Container>
    )
});

export default BookList