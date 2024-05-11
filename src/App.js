import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";

function App() {
  return (
      <div>
          <h1 className="title mb-5">Phone-book-app</h1>
          <Container>
              <Row>
                  <Col className="mt-3">
                      <ContactForm/>
                  </Col>

                  <Col className="mt-3">
                      <ContactList/>
                  </Col>
              </Row>
          </Container>
      </div>
  );
}

export default App;
