import React, {useContext, useEffect, useState} from 'react'
import {Container, Image, NavLink, Button} from 'react-bootstrap'
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import {LOGIN_ROUTE} from '../utils/consts';
import {useParams} from "react-router-dom";
import {fetchOneBooks, getBookElVariant} from "../http/bookAPI";
import {baseAppURl} from "../http/ingex";
import {takeBook} from "../http/orderAPI";


const BookPage = observer ( () => {

    const [book, setBook] = useState({})
    const {id} = useParams();


    useEffect(() => {
        fetchOneBooks(id).then(data => setBook(data));
    }, [id])

    const {user} = useContext(Context);

    return (
        <Container style={{minHeight: "774px", backgroundColor: 'white', marginTop: "40px", paddingLeft: "20px", paddingTop: "20px", paddingBottom: "20px", marginBottom: "20px", borderRadius: "30px"}}>
            <h3 className='d-flex justify-content-center text-center'>{book.title}</h3>

            <div className='d-flex justify-content-center'><Image height={350} src={baseAppURl + book.imageUrl} style={{margin: 20}}/>
                <div style={{width: 150, marginTop: 60, marginLeft: "20px"}}>
                    <p>Авторы:</p>
                    <p>ISBN:</p>
                    <p>Издатель:</p>
                    <p>Год издания:</p>
                    <p>Жанры:</p>
                    <p>Объем:</p>
                </div>
                <div style={{width: 350, marginTop: 60}}>
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

                    {
                        book.hasOwnProperty('bookUrl') ? <Button style={{marginRight: 10}} onClick={() => getBookElVariant(baseAppURl + book.bookUrl, book.title)}>Ссылка на скачивание электронной версии</Button> :
                            <div style={{paddingRight: 5, marginTop: 10}} className='text-info'>К сожалению, данная книга не обладает электронной версией</div>
                    }
                    <Button style={{marginRight: 10}} onClick={() => takeBook(id)}>Взять физическую версию</Button>
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
            <div className='mt-5 mb-5 d-flex justify-content-center flex-column'><h3 className="text-center" style={{marginLeft: 15}}>Аннотация</h3>
                <text style={{overflowWrap: 'break-word'}}>{book.description}</text>
            </div>
        </Container>
    )
});

export default BookPage