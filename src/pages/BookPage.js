import React, { useContext } from 'react'
import { Container, Image,  NavLink, Button } from 'react-bootstrap'
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE } from '../utils/consts';

const BookPage = observer ( () => {
  const book = {
    id: 1, name: "Математический анализ. Пособие для 1-2 курсов", authors: "DanilK, KDanil, KDanilA",
    description: "Если мы доживем до 100 лет, то станет ли продолжительнее и наша карьера? Будут ли рабочие места для всех желающих? А может, к тому времени нас как специалистов уже заменят роботы? Как долголетие изменит нашу жизнь в целом? Технологический прогресс не сопровождался необходимыми инновациями в наших социальных структурах. В эпоху беспрецедентных перемен мы еще не открыли для себя новые способы жить.",
    year: 2021, img: 'https://cdn1.ozone.ru/multimedia/1005276967.jpg',
    isbn: "895220467", publisher: "Альпина",
    genres: "Научная фантастика, Учебное пособие",
    volume: 168, isClosed: false,
  }

  const {user} = useContext(Context);

  return (
    <Container className='mt-3' >

          <h3 className='d-flex justify-content-center'>{book.name}</h3>

          <div className='d-flex justify-content-center'>
            <Image width={300} height={300} src={book.img} style={{margin: 20}}/>
            <div style={{width: 150, marginTop: 60}}>
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

          <div className='d-flex justify-content-center'>
            {book.isClosed || user.isAuth ?

                <div className='d-flex'>
                  <Button style={{marginRight: 10}}>Ссылка на скачивание электронной версии</Button>
                  <Button>Взять физическую версию</Button>
                </div>
                  :
                <div>
                {
                    user.isAuth ?
                    <div> Вот ссылка </div>
                    : 
                    <div className='m-auto d-flex'>
                      <p className='text-info' style={{paddingRight: 5}}> Книга Вам недоступна, для получения доступа необходимо </p>
                      <NavLink className='text-warning' href={LOGIN_ROUTE}> Авторизоваться</NavLink>
                    </div>
                }                 
                </div>

                }
          </div>

          <div className='d-flex justify-content-center flex-column'>
            <h3 style={{marginLeft: 15}}>Аннотация</h3>
            <p>{book.description}</p>
          </div>

    </Container>
  )
});

export default BookPage