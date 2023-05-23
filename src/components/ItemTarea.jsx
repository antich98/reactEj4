import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

const ItemTarea = () => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>
            Ejemplo de tarea
            <Button variant="danger">Borrar</Button>
        </ListGroup.Item>
    );
};

export default ItemTarea;