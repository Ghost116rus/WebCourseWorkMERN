import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BOOK_ROUTE } from '../utils/consts';
import {baseAppURl} from "../http/ingex";


const BookItem = ({book}) => {
    const navigate = useNavigate()
    return (
      <Container className='{mt-3}' border={"light"} style={{backgroundColor: "white", paddingTop: "20px", paddingBottom: "20px", marginBottom: "10px", borderRadius: "30px"}}>
          <div className='d-flex flex-row'>
            <Image height={250} src={baseAppURl + book.imageUrl} style={{cursor: 'pointer', margin: 20}}  onClick={() => navigate(BOOK_ROUTE + "/" + book._id)}/>
                <div className='d-flex flex-column' style={{width: 750}}>
                    <h3 className='d-flex justify-content-center' style={{cursor: 'pointer'}}  onClick={() => navigate(BOOK_ROUTE + "/" + book._id)}
                    >
                        {book.title}
                    </h3>

                    <h5>{book.year} {book.authors}</h5>
                    <p className='text-justify'>{book.description}</p>
                </div>
          </div>

      </Container>
  )
}

export default BookItem