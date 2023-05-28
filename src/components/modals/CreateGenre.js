import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {createGenre} from "../../http/bookAPI";


const CreateGenre = ({show, onHide}) => {
    const [genre, setGenre] = useState('')

    const addGenre = () => {
        createGenre(genre).then(data => {
            setGenre("");
            onHide();
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить жанр
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        placeholder={"Введите название жанра"}
                        value={genre}
                        onChange={e => setGenre(e.target.value)}
                    />
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addGenre}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateGenre;