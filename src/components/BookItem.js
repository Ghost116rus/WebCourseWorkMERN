import React from 'react';
import { Card, Col, Container, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BOOK_ROUTE } from '../utils/consts';


const BookItem = ({book}) => {
    const navigate = useNavigate()
    return (
      <Container className='{mt-3}' border={"light"} >
          <div className='d-flex flex-row'>
            <Image width={200} height={200} src={book.img} style={{cursor: 'pointer', margin: 20}}  onClick={() => navigate(BOOK_ROUTE + "/" + book.id)}/>
                <div className='d-flex flex-column' style={{width: 750}}>
                    <h3 className='d-flex justify-content-center' style={{cursor: 'pointer'}}  onClick={() => navigate(BOOK_ROUTE + "/" + book.id)}
                    >
                        {book.name}
                    </h3>

                    <h5>{book.year} {book.author}</h5>
                    <p className='text-justify'>{book.description}</p>
                </div>
          </div>

      </Container>
  )
}

export default BookItem