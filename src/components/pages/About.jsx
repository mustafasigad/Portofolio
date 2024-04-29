import { Image, Card, Col, Row, Container } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="my-5">
      <Row>
        <Col xs={12} md={4}>
          <Image
            className="img-thumbnail rounded-circle mx-auto d-block"
            src="MUSTI.jpg"
            alt="Mustafa Sigad"
            fluid
          />
        </Col>
        <Col xs={12} md={8}>
          <Card id="about" className="shadow-sm">
            <Card.Body>
              <Card.Title as="h2" className="text-center mb-4">
                About Me
              </Card.Title>
              <p>
                I am an aspiring full stack developer with a background in systems
                engineering. I have experience with complex problem solving and various
                programming languages.
                I am now expanding my skillset into front-end and back-end web
                technologies. I am learning frameworks like React, Node.js, and MongoDB
                along with foundational HTML, CSS and JavaScript.
              </p>
              <p>
                Although new to web development, I leverage my engineering foundation to
                understand complex systems. I enjoy creating solutions from back-end
                architecture to user-friendly interfaces.
              </p>
              <p>
                As I continue honing my skills, I am excited to make an impact through
                responsive web applications. I'm eager to join a fast-paced development
                team.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}