import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal, Col, Row} from "react-bootstrap";
import {Context} from "../../index";
import {useEffect} from "react";
import {fetchGenres} from "../../http/bookAPI";


const CreateBook = ({show, onHide}) => {

    useEffect(() => {

        fetchGenres().then(data => book.setTypes(data));
    })

    const {book} = useContext(Context)

    const [info, setInfo] = useState([]);

    const [genre, setGenre] = useState([]);

    const addInfo = () => {
        setInfo([...info, { authorName: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    function containsObject(id, list) {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i].number === id) {
                return true;
            }
        }

        return false;
    }

    const addGenre = (value, num) => {
        if (!containsObject(num, genre))
            setGenre([...genre, { name: value, number: num}])
    }

    const removeGenre = (number) => {
        setGenre(genre.filter(i => i.number !== number))
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
                    Добавить книгу
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите название книги"
                    />
                    <Row style={{marginBottom: 20}}>
                        <Col md={3}>
                            <Button
                                variant={"outline-dark"}
                                onClick={addInfo}
                                style={{marginTop: 40}}
                            >
                                Добавить автора
                            </Button>
                        </Col>
                        <Col md={9}>
                            <div className="d-flex flex-wrap">
                                {info.map(i =>
                                    <div className="d-flex " style={{marginRight: 15, height: 60}} key={i.number}>
                                        <Form.Control
                                            className="mt-3"
                                            placeholder="Введите ФИО автора"
                                        />
                                        <Button variant={"outline-danger"} style={{height: 40, marginTop: 18}} onClick={() => removeInfo(i.number)}>x</Button>
                                    </div>)
                                }
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={3}>
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle>
                                    Добавьте жанры
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {book.types.map(type =>
                                        <Dropdown.Item key={type._id} onClick={() => addGenre(type.name, type._id)}>
                                            {type.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md={9}>
                            <div className="d-flex flex-wrap">

                                {genre.map(i =>
                                    <div className="d-flex " style={{marginRight: 15, marginBottom:10, height: 40}}  key={i.number}>
                                        <div style={{ height: 40, paddingLeft: 5, paddingRight: 5, borderStyle: "solid", borderWidth: 3, borderRadius: "10px"}}>{i.name}</div>
                                        <Button variant={"outline-danger"} style={{height: 40}} onClick={() => removeGenre(i.number)}>x</Button>
                                    </div>)
                                }
                            </div>
                        </Col>


                    </Row>

                    <hr/>

                    <Form.Control
                        className="mt-3"
                        placeholder="Введите описание книги"
                        style={{height: 150}}
                    />

                    <hr/>
                    <Row style={{marginTop: 20}}>
                        <Col md={5} >
                            <h5 style={{marginTop: 20}}>Вставьте изображение книги</h5>
                        </Col>
                        <Col md={7}>
                            <Form.Control
                                className="mt-3"
                                placeholder="Вставьте изображение книги"
                                type="file"
                            />
                        </Col>
                    </Row>

                    <Row style={{marginTop: 10, marginBottom: 10}}>
                        <Col md={5} >
                            <h5 style={{marginTop: 20}}>Загрузить файл книги</h5>
                        </Col>
                        <Col md={7}>
                            <Form.Control
                                className="mt-3"
                                placeholder="Загрузить файл книги"
                                type="file"
                            />
                        </Col>
                    </Row>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBook;