import React, {useContext, useState} from 'react';
import {Button, Dropdown, Form, Modal, Col, Row} from "react-bootstrap";
import {Context} from "../../index";
import {useEffect} from "react";
import {createBook, createMedia, fetchGenres} from "../../http/bookAPI";
import {deleteGenre} from "../../http/adminAPI";


const DeleteGenre = ({show, onHide}) => {

    useEffect(() => {
        fetchGenres().then(data => book.setTypes(data));
    }, [])

    const {book} = useContext(Context)
    const [genre, setGenre] = useState({});

    const delGenre = () => {
        deleteGenre(genre._id).then(
            data => {
                setGenre({});
                onHide();
            }
        );
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
                    Удалить жанр
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="d-flex justify-content-center">
                        <Col md={6}>
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle>
                                    Удалить жанр
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {book.types.map(type =>
                                        <Dropdown.Item key={type._id} onClick={() => setGenre(type)}>
                                            {type.name}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex " style={{marginRight: 15, marginBottom:10, height: 40}} >
                                <div style={{ height: 40, paddingLeft: 5, paddingRight: 5, borderStyle: "solid", borderWidth: 3, borderRadius: "10px"}}>{genre.name}</div>
                            </div>
                        </Col>
                    </Row>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={delGenre}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteGenre;