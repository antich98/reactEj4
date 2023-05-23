import { Form, Button } from "react-bootstrap";

import React from 'react';
import ListaTareas from "./ListaTareas";

const formularioTarea = () => {
    return (
        <>
        <Form>
            <Form.Group className="mb-3 d-flex" controlId="tarea">
                <Form.Control type="text" placeholder="Ingrese una tarea" />
                <Button variant="primary">Agregar tarea</Button>
            </Form.Group>
        </Form>
        <ListaTareas />
        </>
    );
};

export default formularioTarea;