import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const React = require("react");
const Layout = require("./components/Layout.jsx");

class New extends React.Component {
  render() {
    return (
      <Layout>
        <main>
          <Container>
          <Row className="justify-content-center">
            <Form action="/products" method="POST" role="form">
              <Form.Group as={Col} controlId="">
                <Form.Label>Product Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Enter product name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="">
                <Form.Label>Product Description</Form.Label>
                <Form.Control
                  name="description"
                  type="text"
                  placeholder="Enter product description"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="">
                <Form.Label>Product Image</Form.Label>
                <Form.Control
                  name="img"
                  type="text"
                  placeholder="Enter product image"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="">
                <Form.Label>Product Price</Form.Label>
                <Form.Control
                  name="price"
                  type="text"
                  placeholder="Enter product price"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="">
                <Form.Label>Product Quantity</Form.Label>
                <Form.Control
                  name="qty"
                  type="text"
                  placeholder="Enter product quantity"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </Row>
          </Container>
        </main>
      </Layout>
    );
  }
}

module.exports = New;
