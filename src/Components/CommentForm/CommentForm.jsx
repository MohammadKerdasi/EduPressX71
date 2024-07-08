import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import ContactTitle from "../ContactTitle/ContactTitle";
import './CommentForm.css'


    const CommentForm  = () => {
        return (
            <div div className="block">
            <ContactTitle  Title='Contact Us' subTitle='Your email address will not be published. Required fields are marked *'/>
        <Form className="Mk-Form">
            <Row className="Mk-Coulmn">
            <Col className="Mk-form-padding">
                <Form.Control
                placeholder="Name*"
                className="Mk-placeholder-padding"
                />
            </Col>
            <Col className="Mk-form-padding">
                <Form.Control
                placeholder="Email*"
                className="Mk-placeholder-padding"
                />
            </Col>
            </Row>
            <FloatingLabel
            controlId="floatingTextarea2"
            style={{ paddingTop: 20, paddingBottom: 20 }}
            >
            <Form.Control
                as="textarea"
                placeholder="Comment"
                style={{ height: "110px" }}
                />
            </FloatingLabel>
            <div className="Mk-checkbox">
            <Form.Check aria-label="option 1" />
            <p>Save my name, email in this brower for the next time I comment</p>
            </div>
            <button className="MK-Contact-Btn">
                <p>Posts comment</p>
            </button>
        </Form>
        </div>
    );
};


export default CommentForm;

