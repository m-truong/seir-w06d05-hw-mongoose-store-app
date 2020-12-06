import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const React = require("react");
const Layout = require("./components/Layout.jsx");


class Show extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <Layout>
        <main>
          <Container>
            <Row className="justify-content-md-center">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <hr/>
                  {/* <Card.Text className="card-text">
                    {product.description}
                  </Card.Text> */}
                  {product.price > 0 ? (
                    <Card.Text>Price ${product.price}</Card.Text>
                  ) : (
                    <Card.Text>Cannot purchase</Card.Text>
                  )}
                  {product.qty > 0 ? (
                    <Card.Text>{product.qty} remaining</Card.Text>
                  ) : (
                    <Card.Text>Out of stock</Card.Text>
                  )}
                  {product.price > 0 ? (
                    <Button href="" variant="primary">
                      Buy Product
                    </Button>
                  ) : (
                    <Card.Text>Please check back again later</Card.Text>
                  )}
                  <hr />
                  <Button href="" variant="info">
                    Edit Product
                  </Button>
                  <hr />
                  <Button href="" variant="danger">
                    Delete Product
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </main>
      </Layout>
    );
  }
}

module.exports = Show;
