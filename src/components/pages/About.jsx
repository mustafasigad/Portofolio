import { Image } from 'react-bootstrap';
export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Image 
       
        className="img-thumbnail" 
        src="MUSTI.jpg"  
        alt="Mustafa Sigad" 
        width={100}
        height={100} 
      />
      <section id="about">
      
      
      <p>
        I am an aspiring full stack developer with a background in systems 
        engineering. I have experience with complex problem solving and various 
        programming languages.
     

      
        I am now expanding my skillset into front-end and back-end web 
        technologies. I am learning frameworks like React, Node.js, and MongoDB 
        along with foundational HTML, CSS and JavaScript.  
    
  </p>
      
        Although new to web development, I leverage my engineering foundation to 
        understand complex systems. I enjoy creating solutions from back-end 
        architecture to user-friendly interfaces. 
    

      <p>
        As I continue honing my skills, I am excited to make an impact through 
        responsive web applications. I'm eager to join a fast-paced development 
        team.
      </p>
    
    </section>
    </div>
  );
}

