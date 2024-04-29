import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const portfolioItems = [
    {
        title: 'Database interaction with mysQL and NODEJS',
        imgSrc: 'mysql.jpg', // Replace with actual image URL or path
        gitRepo: 'https://github.com/mustafasigad/mysql_business_department',
        videoLink: 'https://drive.google.com/file/d/1_jgu-2yS_gMih-aXCH1-ZLnyCGQnNagR/view',
    },
 
    {
        title: 'Day planner',
        imgSrc: 'dayplanner.jpg',
        gitRepo: 'https://github.com/mustafasigad/Day_planner',
        deployment: 'https://mustafasigad.github.io/Day_planner/',
    },
    {
        title: 'Weather API',
        imgSrc: 'weatherforcastApi.jpg', // Replace with actual image URL or path
        gitRepo: 'https://github.com/mustafasigad/WEATHER_API',
        deployment: 'https://mustafasigad.github.io/WEATHER_API/',
    },
    {
        title: 'MERN googlesearch to SearchBooks',
        imgSrc: 'MERN_searchBooks.jpg', // Replace with actual image URL or path
        gitRepo: 'https://github.com/mustafasigad/MERN_SearchBooks',
        // videoLink: 'https://drive.google.com/file/d/1fHfdLUAbVETAapaU-IG-aOmdm8kP8m8T/view',
    },
    {
        title: 'Expense Tracker ',
        imgSrc: 'expenseTracker.jpg', // Replace with actual image URL or path
        gitRepo: 'https://github.com/BudgetBuddy887/expenseTracker',
        deployment: 'https://budgetbuddytracker.onrender.com/',
    },
    {
        title: 'Daily News and Weather ',
        imgSrc: 'weatherNews.jpg', // Replace with actual image URL or path
        gitRepo: 'https://github.com/mustafasigad/Daily_Pulse_WNews',
        deployment: 'https://mustafasigad.github.io/Daily_Pulse_WNews/',
    },
    {
        title: 'Showcasing MVC framework by creating a TravelBlog ',
        imgSrc: 'jsonB.jpg', // Replace with actual image URL or path
        gitRepo: 'https://github.com/MustafeMohamoud1/JBTravelBlog',
        deployment: 'https://jbtravelblogfinal-84a20cc94acf.herokuapp.com/',
    },
];

const cardStyle = {
    backgroundColor: '#80ff80', // Green color
};

export default function Portfolio() {
    return (
        <Container className="my-5" >
            <h2 className="text-center mb-4">Portfolio</h2>
            <Row>
                {portfolioItems.map((item, idx) => (
                    <Col key={idx} xs={12} md={6} lg={4} className="mb-4">
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={item.imgSrc}/>
                            <Card.Body >
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Link href={item.gitRepo}>Git Repo</Card.Link>
                                {item.deployment && (
                                    <Card.Link href={item.deployment}>Deployment</Card.Link>
                                )}
                                {item.videoLink && (
                                    <Card.Link href={item.videoLink}>Video</Card.Link>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}