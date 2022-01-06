import React from 'react'
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const profilepic = "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
const js = "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-javascript-is-a-high-level-interpreted-programming-language-logo-color-tal-revivo.png"
const reactjs = "https://img.icons8.com/color/48/000000/react-native.png"
const python = "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-python-an-interpreted-high-level-general-purpose-programming-language-logo-shadow-tal-revivo.png"
const nodejs = "https://img.icons8.com/color/48/000000/nodejs.png"

export const About = () => {

    let navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };


    return (
        <div className="home-body mt-5">
            <Container>
            <Row className="home-main-row">
                <Col>
                <Card>
                    <Card.Body>
                        <Image src={profilepic} height={300} roundedCircle />
                    <Card.Title>
                        <h1>About Me</h1>
                    </Card.Title>
                    <Card.Text>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cumque repudiandae nulla, distinctio, temporibus animi natus ab inventore cum dolorum veniam optio? Pariatur quis nemo odit! Autem, nisi. Maxime ut quibusdam doloribus odio quaerat eveniet aliquam beatae? Ad quasi earum minima perferendis porro modi autem dicta, voluptatibus placeat consequuntur quod voluptate incidunt maiores voluptatum. At fuga provident veritatis voluptatibus similique repudiandae unde laboriosam quas molestias animi eligendi odio, praesentium tenetur. Consequatur, hic quos. Tempore, quaerat. Reiciendis veniam aut magnam soluta aperiam exercitationem? Recusandae accusantium rem ad dicta voluptatem saepe. Voluptates voluptatum aliquid soluta fugit at repellendus autem laborum nemo veritatis!
                        </p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt mollitia est facilis maiores a voluptatem blanditiis sed illum, id amet fuga commodi aut officiis doloribus, rem, ad nulla doloremque quia quas voluptates minus asperiores. Ducimus modi consequuntur aliquid, quidem vero nulla quaerat? Culpa accusamus cum impedit numquam sunt eius quam.</p>
                        <h3>My Skills</h3>
                        <ul className="myskills">
                            <li><Image src={js}></Image></li>
                            <li><Image src={reactjs}></Image></li>
                            <li><Image src={python}></Image></li>
                            <li><Image src={nodejs}></Image></li>
                        </ul>
                        <div className="back-next-button">
                            <Button onClick={handleBack} variant="dark">
                                Back
                            </Button>
                        </div>
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default About
