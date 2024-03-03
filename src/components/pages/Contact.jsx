import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();  
    // Submit logic    
  }
  return (
    <div>
      <h1>Contact</h1>
      <Form onSubmit={handleSubmit}>
        
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    
        <Form.Control type="text" placeholder="Enter your name" className="w-50"/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      
        <Form.Control type="email" placeholder="name@example.com" className="w-50"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
     
        <Form.Control as="textarea" rows={3}  className="w-50"  placeholder="Write your message here." />
      </Form.Group>
     
      <Button className="py-20" variant="primary" type="submit">
  Submit  
</Button>
    </Form>
 

    </div >
  );
}

