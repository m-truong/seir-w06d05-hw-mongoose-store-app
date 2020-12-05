import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const React = require("react");
const Layout = require("./components/Layout.jsx");

class Index extends React.Component {
  render() {
    const allProducts = this.props.products;
    return (
      <Layout>
          {/* MAYBE MOVE THIS TO LAYOUT.JSX */}
        <header id="" className="product-index-header">
          <h1 id="" className="">Product Index Page</h1>
          <nav>
          <Button href="/products/new">Create a Product Page</Button>
            {/* <a href="/products/new">Create a Product Page</a> */}
          </nav>
        </header>

        <main>
          <Container >
            <Row className="justify-content-around">

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>

            <Row className="justify-content-around">

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Row>

            <Row className="justify-content-around">

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title >Card Title</Card.Title>
                  <Card.Text className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

            </Row>

          </Container>

        </main>

        {/* <main class="container-fluid">
          <Button variant="primary">Primary React-Bootstrap Button</Button>{" "}
          <section class="row first-row">
            <div class="card">
              <img src="..." class="card-img-top" alt="product-img" />
              <div class="card-body">
                <h5 class="card-title">Product Name Goes Here</h5>
                <p class="card-text">Product Description</p>
                <a href="#" class="btn btn-secondary">
                  Show Edit Product
                </a>
              </div>
            </div>

            <div class="card">
              <img src="..." class="card-img-top" alt="product-img" />
              <div class="card-body">
                <h5 class="card-title">Product Name Goes Here</h5>
                <p class="card-text">Product Description</p>
                <a href="#" class="btn btn-secondary">
                  Show Edit Product
                </a>
              </div>
            </div>

            <div class="card">
              <img src="..." class="card-img-top" alt="product-img" />
              <div class="card-body">
                <h5 class="card-title">Product Name Goes Here</h5>
                <p class="card-text">Product Description</p>
                <a href="#" class="btn btn-secondary">
                  Show Edit Product
                </a>
              </div>
            </div>
          </section> */}
        {/* <section class="row second-row">
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="product-img" />
              <div class="card-body">
                <h5 class="card-title">Product Name Goes Here</h5>
                <p class="card-text">Product Description</p>
                <a href="#" class="btn btn-secondary">
                  Show Edit Product
                </a>
              </div>
            </div>

            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="product-img" />
              <div class="card-body">
                <h5 class="card-title">Product Name Goes Here</h5>
                <p class="card-text">Product Description</p>
                <a href="#" class="btn btn-secondary">
                  Show Edit Product
                </a>
              </div>
            </div>

            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="product-img" />
              <div class="card-body">
                <h5 class="card-title">Product Name Goes Here</h5>
                <p class="card-text">Product Description</p>
                <a href="#" class="btn btn-secondary">
                  Show Edit Product
                </a>
              </div>
            </div>
          </section>

          <section class="row third-row">
            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="product-img" />
              <div class="card-body">
                <h5 class="card-title">Product Name Goes Here</h5>
                <p class="card-text">Product Description</p>
                <a href="#" class="btn btn-secondary">
                  Show Edit Product
                </a>
              </div>
            </div>

            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="product-img" />
              <div class="card-body">
                <h5 class="card-title">Product Name Goes Here</h5>
                <p class="card-text">Product Description</p>
                <a href="#" class="btn btn-secondary">
                  Show Edit Product
                </a>
              </div>
            </div>

            <div class="card" style="width: 18rem;">
              <img src="..." class="card-img-top" alt="product-img" />
              <div class="card-body">
                <h5 class="card-title">Product Name Goes Here</h5>
                <p class="card-text">Product Description</p>
                <a href="#" class="btn btn-secondary">
                  Show Edit Product
                </a>
              </div>
            </div>
          </section> */}
      </Layout>
    );
  }
}

module.exports = Index;

{
  /* <ul>
              {this.props.products.map((product, i) => {
                return (
                  <li>
                    The <a href={`/products/${product._id}`}>{product.name}</a>{" "}
                    is
                    {product.description}
                    {fruit.readyToEat
                      ? `It is ready to eat`
                      : `It is not ready to eat`}
                  </li>
                  //   <a href=`/fruits/${i}`>Show fruit</a>
                );
              })}
            </ul> */
}
