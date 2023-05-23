import { Form, Button } from "react-bootstrap";
import React, { useState } from 'react';
import ListaTareas from "./ListaTareas";

const formularioTarea = () => {
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTareas([...tarea, tarea]);
        setTarea('');
    }
    return (
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
                <Form.Control 
                type="text" 
                placeholder="Ingrese una tarea" 
                onChange={(e) => setTarea(e.target.value)} value={tarea} />
                <Button variant="primary">Agregar tarea</Button>
            </Form.Group>
        </Form>
        <ListaTareas />
        </>
    );
};

export default formularioTarea;