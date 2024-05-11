import React from "react";
import {Col, Row} from "react-bootstrap";

const ContactItem = () => {

    return (
        <Row>
            <Col lg={2}>
                <img src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
                     alt="user" width="50px"/>
            </Col>
            <Col lg={10}>
                <div>
                    name
                </div>
                <div>
                    number
                </div>
            </Col>
        </Row>
    );
};

export default ContactItem;