import React from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";

const profilepic = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
const twitter = "https://img.icons8.com/color/48/000000/twitter--v1.png";
const github = "https://img.icons8.com/fluency/48/000000/github.png";
const linkedin = "https://img.icons8.com/color/48/000000/linkedin.png";

export const Home = () => {

  return (
    <div className="home-body mt-5">
    <Container>
      <Row className="home-main-row">
        <Col>
          <Card className="p-5">
            <Card.Body>
                <Image src={profilepic} height={300} roundedCircle />
              <Card.Title>
                <h1>John Doe</h1>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <h2>Full Stack Developer</h2>
              </Card.Subtitle>
              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aut qui voluptas ab fugiat ratione temporibus dicta sunt doloremque nemo. Voluptate qui dolor possimus quisquam quia labore exercitationem perspiciatis tempore, voluptas ab, aliquam officia fuga ut aut vitae voluptatibus expedita quae molestias voluptatum eligendi! Obcaecati voluptate labore autem beatae? Corporis.
                </p>
              </Card.Text>
              <Card.Link href="/about">
                <Button variant="primary">About</Button>
              </Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
    </div>
  );
};