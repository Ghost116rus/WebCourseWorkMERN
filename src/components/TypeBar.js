import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
  
    const {book} = useContext(Context);
    return (
        <ListGroup>
            {book.types.map(type =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}} 
                    active={type._id === book.selectedType._id}
                    onClick={() => book.setSelectedType(type)}
                    key={type._id}
                >
                    {type.name}
                </ListGroup.Item>)}

        </ListGroup>
    
  );
});

export default TypeBar