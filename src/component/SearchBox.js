import React, {useState} from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
    const [keyword, setKeyword] = useState("");
    const dispatch = useDispatch();

    const searchContact = () => {
        dispatch({ type: "SEARCH_CONTACT", payload: { keyword } });
    };

    const keypressEnter = (event) => {
        if (event.key === "Enter") {
            searchContact();
        }
    };

    return (
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름을 입력해주세요." onKeyPress={(event) => keypressEnter(event)}
                              value={ keyword } onChange={(e) => setKeyword(e.target.value)} />
            </Col>
            <Col lg={2}>
                <Button onClick={() => searchContact()}>검색</Button>
            </Col>
        </Row>
    );
};

export default SearchBox;