import React, {useState} from 'react'
import {Button, Container} from "react-bootstrap";
import CreateGenre from "../components/modals/CreateGenre";
import CreateBook from "../components/modals/CreateBook";
import CreateLibrarian from "../components/modals/CreateLibrarian";
import DeleteGenre from "../components/modals/DeleteGenre";
import DeleteLibrarian from "../components/modals/DeleteLibrarian";

const Admin = () => {

    const[genreVisible, setGenreVisible] = useState(false)
    const[bookVisible, setBookVisible] = useState(false)
    const[libraVisible, setLibraVisible] = useState(false)
    const[genreDelete,  setGenreDelete] = useState(false)
    const[libraDelete,  setLibraDelete] = useState(false)

    return (
        <Container className="d-flex flex-column" style={{minHeight: "800px"}}>
            <Button
                variant={"outline-dark"}
                className="mt-2 p-2"
                onClick={() => setGenreVisible(true)}
            >
                Добавить жанр
            </Button>
            <Button
                variant={"outline-info"}
                className="mt-2 p-2"
                onClick={() => setBookVisible(true)}
            >
                Добавить книгу
            </Button>
            <Button
                variant={"outline-info"}
                className="mt-2 p-2"
                onClick={() => setLibraVisible(true)}
            >
                Добавить библиотекаря
            </Button>
            <Button
                variant={"outline-info"}
                className="mt-5 p-2"
                onClick={() => setGenreDelete(true)}
            >
                Удалить жанр
            </Button>
            <Button
                variant={"outline-info"}
                className="mt-2 p-2"
                onClick={() => setLibraDelete(true)}
            >
                Удалить библиотекаря
            </Button>
            <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
            <CreateLibrarian show={libraVisible} onHide={() => setLibraVisible(false)}/>
            <DeleteGenre show={genreDelete} onHide={() => setGenreDelete(false)}/>
            <DeleteLibrarian show={libraDelete} onHide={() => setLibraDelete(false)}/>


        </Container>
  )
}

export default Admin