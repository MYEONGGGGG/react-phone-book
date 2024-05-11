import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactItem = ({item}) => {

    const dispatch = useDispatch();

    const removeContact = (val) => {
        dispatch({ type: "REMOVE_CONTACT", payload: { name: val.name, phoneNumber: val.phoneNumber } });
    };

    return (
        <Row className="contact-item mt-3 ms-2 me-1 pt-2 pb-2">
            <Col lg={2}>
                <img src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
                     alt="user" width="50px"/>
            </Col>
            <Col lg={8}>
                <div className="fw-bold">
                    { item.name }
                </div>
                <div className="fw-light">
                    { item.phoneNumber }
                </div>
            </Col>
            <Col lg={1} className="text-center">
                <Button className="btn-close btn-outline-light" onClick={ () => removeContact(item) } />
            </Col>
            <Col lg={1}/>
        </Row>
    );
};

export default ContactItem;