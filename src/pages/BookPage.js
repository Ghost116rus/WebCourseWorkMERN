import React, {useContext, useEffect, useState} from 'react'
import {Container, Image, NavLink, Button} from 'react-bootstrap'
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE } from '../utils/consts';
import {useParams} from "react-router-dom";
import {fetchOneBooks} from "../http/bookAPI";
import {baseAppURl} from "../http/ingex";


const BookPage = observer ( () => {

    const [book, setBook] = useState({})
    const {id} = useParams();

    useEffect(() => {
        fetchOneBooks(id).then(data => setBook(data));
    })

    const {user} = useContext(Context);

    return (
        <Container className='mt-5' style={{minHeight: "728px"}}>
            <h3 className='d-flex justify-content-center text-center'>{book.title}</h3>
            <div className='d-flex justify-content-center'><Image width={300} height={300} src={baseAppURl + book.imageUrl} style={{margin: 20}}/><div style={{width: 150, marginTop: 60}}>
                <p>Авторы:</p>
                <p>ISBN:</p>
                <p>Издатель:</p>
                <p>Год издания:</p>
                <p>Жанры:</p>
                <p>Объем:</p>
            </div><div style={{width: 350, marginTop: 60}}>
                <p>{book.authors}</p>
                <p>{book.isbn}</p>
                <p>{book.publisher}</p>
                <p>{book.year}</p>
                <p>{book.genres}</p>
                <p>{book.volume}</p>
            </div>
            </div>
            <div className='d-flex justify-content-center'>{user.isAuth ?
                <div className='d-flex'>
                    <Button style={{marginRight: 10}}>Ссылка на скачивание электронной версии</Button>
                    <Button style={{marginRight: 10}}>Взять физическую версию</Button>
                    <p className="mt-2" > Доступное количество: {book.count}</p>
                </div>
                :
                <div>{
                    user.isAuth ? <div> Вот ссылка </div> : <div className='m-auto d-flex'>
                        <p className='text-info' style={{paddingRight: 5}}> Книга Вам недоступна, для получения доступа необходимо </p>
                        <NavLink className='text-warning' href={LOGIN_ROUTE}> Авторизоваться</NavLink>
                    </div>
                }
                </div>
            }
            </div>
            <div className='mt-5 mb-5 d-flex justify-content-center flex-column'><h3 className="text-center" style={{marginLeft: 15}}>Аннотация</h3><p>{book.description}</p>
            </div>
        </Container>
    )
});

export default BookPage