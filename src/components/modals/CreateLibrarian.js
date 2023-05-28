import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useState} from "react";
import {registration} from "../../http/userAPI";

const CreateLibrarian = ({show, onHide}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const addLibrarian = () => {
        registration(email, password, name, phone, 2).then(data => {
            setEmail("");
            setPassword("");
            setName("");
            setPhone("");
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
                    Добавить библиотекаря
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control
                    className='mt-3'
                    placeholder='Введите имя...'
                    onChange={e => setName(e.target.value)}
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Введите номер телефона...'
                    onChange={e => setPhone(e.target.value)}
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Введите email...'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Form.Control
                    className='mt-3'
                    placeholder='Введите пароль...'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addLibrarian}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};


export default CreateLibrarian;