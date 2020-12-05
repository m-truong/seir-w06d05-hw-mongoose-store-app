import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const React = require("react");
const Layout = require("./components/Layout.jsx");

class New extends React.Component {
  render() {
    return (
      <Layout>
        <Container>
          <Form action="/products" method="POST" role="form">
            <Form.Row>

              <Form.Group as={Col} controlId="">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="" placeholder="Enter product name" />
              </Form.Group>


            </Form.Row>

            <Form.Group controlId="">
              <Form.Label>Product Description</Form.Label>
              <Form.Control placeholder="Enter product description" />
            </Form.Group>


            <Form.Row>
              <Form.Group as={Col} controlId="">
                <Form.Label>Product Image Link</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="">
                <Form.Label>Price</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="">
                <Form.Label>Quantity</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            
          </Form>
        </Container>
      </Layout>
    );
  }
}

module.exports = New;
