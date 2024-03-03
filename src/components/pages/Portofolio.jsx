import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const containerStyles = {
 
    background: '#fffcf2',
  
}



export default function Portofolio() {
 
  return (

    
    <Row xs={1} md={2} lg={3} className="g-4">

<Col xs={3} md={4} lg={3}>

      <Card style={containerStyles}>
      <Card.Img variant="top"   src="MUSTI.jpg"  />
        
        <Card.Body>
          
          <Card.Text>
            HTML Refactoring
          </Card.Text>
          <Card.Link href="https://github.com/mustafasigad/My_First_CSS_HTML_Code_refactoring">GIT REPO</Card.Link>
        <Card.Link href="https://mustafasigad.github.io/My_First_CSS_HTML_Code_refactoring/">Deploy</Card.Link>
        </Card.Body>
      
      </Card>
      
      </Col>

      <Col xs={3} md={4} lg={3}>
      <Card style={containerStyles}>
        <Card.Img  
          src="MUSTI.jpg" 
         
        />
        
        <Card.Body>
       
          <Card.Text>
          Generating Readme with NODE
          </Card.Text>
          <Card.Link href="https://github.com/mustafasigad/ReadMe_Challenge">GIT REPO</Card.Link>
        <Card.Link href=" https://drive.google.com/file/d/1fHfdLUAbVETAapaU-IG-aOmdm8kP8m8T/view">Video</Card.Link>
        </Card.Body>
      
      </Card>
      </Col>

      <Col xs={3} md={4} lg={3}>
      <Card style={containerStyles}>
        <Card.Img  
      src="MUSTI.jpg" 
        />
        
        <Card.Body>
        
          <Card.Text>
          Weather App with JAVaSCRIPT
          </Card.Text>
          <Card.Link href="https://github.com/mustafasigad/Daily_Pulse_WNews">GIT REPO</Card.Link>
        <Card.Link href="https://mustafasigad.github.io/Daily_Pulse_WNews/">Deploy</Card.Link>
        </Card.Body>
      
      </Card>
      </Col>
   
      <Col xs={3} md={4} lg={3}>
      <Card style={containerStyles}>
        <Card.Img  
          src="MUSTI.jpg" 
        />
        
        <Card.Body>
          
          <Card.Text>
            Day planner.
          </Card.Text>
          <Card.Link href="https://github.com/mustafasigad/Day_planner">GIT REPO</Card.Link>
        <Card.Link href="https://mustafasigad.github.io/Day_planner/">Deploy</Card.Link>
        </Card.Body>
      
      </Card>
      </Col>

      <Col xs={3} md={4} lg={3}>
      <Card style={containerStyles}>
        <Card.Img  
          src="MUSTI.jpg" 
        />
        
        <Card.Body>
      
          <Card.Text>
            Weather API.
          </Card.Text>
          <Card.Link href="https://github.com/mustafasigad/WEATHER_API">GIT REPO</Card.Link>
        <Card.Link href="https://mustafasigad.github.io/WEATHER_API/">Deploy</Card.Link>
        </Card.Body>
      
      </Card>
      </Col>

      <Col xs={3} md={4} lg={3}>
      <Card style={containerStyles}>
        <Card.Img  
          src="MUSTI.jpg" 
        />
        
        <Card.Body>
          
          <Card.Text>
            Note Taker with EXPRESS.
          </Card.Text>
          <Card.Link href="https://github.com/mustafasigad/Note_taker_expressjs">GIT REPO</Card.Link>
        <Card.Link href="https://drive.google.com/file/d/1fHfdLUAbVETAapaU-IG-aOmdm8kP8m8T/view">Video</Card.Link>
        </Card.Body>
      
      </Card>
      </Col>
   

  </Row>
);
}
