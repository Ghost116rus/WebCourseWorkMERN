import React, {useState} from 'react'
import {Button, Container} from "react-bootstrap";
import CreateGenre from "../components/modals/CreateGenre";
import CreateBook from "../components/modals/CreateBook";
import CreateLibrarian from "../components/modals/CreateLibrarian";

const Admin = () => {

    const[genreVisible, setGenreVisible] = useState(false)
    const[bookVisible, setBookVisible] = useState(false)
    const[libraVisible, setLibraVisible] = useState(false)

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
                Добавить менеджера
            </Button>
            <CreateGenre show={genreVisible} onHide={() => setGenreVisible(false)}/>
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
            <CreateLibrarian show={libraVisible} onHide={() => setLibraVisible(false)}/>


        </Container>
  )
}

export default Admin