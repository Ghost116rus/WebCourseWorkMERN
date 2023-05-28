import React, {useState} from 'react';
import {Button, Dropdown, Form, Modal, Col, Row} from "react-bootstrap";

import {useEffect} from "react";
import {fetchLibrarians} from "../../http/adminAPI";


const DeleteLibrarian = ({show, onHide}) => {

    useEffect(() => {
        fetchLibrarians().then(data => {
            setList(data);
        });
    }, [])

    const [list, setList] = useState([]);
    const [libr, setLibr] = useState({});

    const delGenre = () => {
        alert('Hello');

        setLibr({});
        onHide();
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
                    Удалить библиотекаря
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="d-flex justify-content-center">
                        <Col md={6}>
                            <Dropdown className="mt-2 mb-2">
                                <Dropdown.Toggle>
                                    Выбрать библиотекаря
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {list.map(libra =>
                                        <Dropdown.Item key={libra._id} onClick={() => setLibr(libra)}>
                                            {(libra.email === null ? "" :  libra.email) + " " + (libra.fullName === null ? "" :  libra.fullName)}
                                        </Dropdown.Item>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex " style={{marginRight: 15, marginBottom:10, height: 40}} >
                                <div style={{ height: 40, paddingLeft: 5, paddingRight: 5, borderStyle: "solid", borderWidth: 3, borderRadius: "10px"}}>{libr.email + " " + libr.fullName}</div>
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

export default DeleteLibrarian;