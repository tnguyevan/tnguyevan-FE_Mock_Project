import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
function PriceFilter(props) {

 const [checked, setChecked] = useState([]);

 const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);

 };
     useEffect(() => {
    props.getPriceFilter(checked);
  }, [checked]);
    return (
        <div>
             <ListGroup className='bg-light mt-5 rounded-0'>
                            <ListGroup.Item className='bg-danger text-white'>LỌC THEO GIÁ</ListGroup.Item>
                <ListGroup.Item><Form.Check onChange={handleCheck} value="1" type="checkbox" label=" ~ 500.000 ₫" /></ListGroup.Item>
                            <ListGroup.Item><Form.Check onChange={handleCheck} value="2" type="checkbox" label="500.000 ₫ ~ 800.000 ₫" /></ListGroup.Item>
                            <ListGroup.Item><Form.Check type="checkbox" onChange={handleCheck} value="3" label="800.000 ₫ ~ 1.000.000 ₫" /></ListGroup.Item>
                            <ListGroup.Item><Form.Check type="checkbox" onChange={handleCheck} value="4" label="1.000.000 ₫ ~ 2.000.000 ₫" /></ListGroup.Item>
                             <ListGroup.Item><Form.Check type="checkbox" onChange={handleCheck} value="5" label="2.000.000 ₫ ~" /></ListGroup.Item>
                        </ListGroup>
        </div>
    );
}

export default PriceFilter;