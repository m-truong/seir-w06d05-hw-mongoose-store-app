import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  render() {
    const products = this.props.products;
    return (
      <Layout>
        <header id="" className="product-index-header"></header>

        <main>
          <Container>
            {this.props.products.map((product, i) => {
              return (
                <Row className="justify-content-md-center">
                  <Card style={{ width: "18rem" }}>
                    <a href={`/products/${product._id}`}>
                      <Card.Img variant="top" src={product.img} />{" "}
                    </a>
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text className="card-text">
                        {product.description}
                      </Card.Text>
                      <Card.Text>Price: ${product.price}</Card.Text>
                      <Card.Text>{product.qty} remaining</Card.Text>
                      <Button
                        href={`/products/${product._id}`}
                        variant="primary"
                      >
                        Show Product Page
                      </Button>
                    </Card.Body>
                  </Card>
                </Row>
              );
            })}
          </Container>
        </main>
      </Layout>
    );
  }
}

module.exports = Index;
