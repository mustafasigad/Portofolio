import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const sendEmail = async (data) => {
    setSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await emailjs.send(
        'service_jmc86px',
        'template_uht29fb',
        data,
        'qwLIk-RSGTICFgmx8'
      );
      console.log('Email sent successfully!', response.status, response.text);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError('An error occurred while sending the email. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={{ span: 6, offset: 2 }}>
          <h1 className="text-center mb-4">Contact Us</h1>
          <div className="mb-4">
            {submitError && <Alert variant="danger">{submitError}</Alert>}
            {submitSuccess && <Alert variant="success">Your message has been sent successfully!</Alert>}
          </div>
          <Form onSubmit={handleSubmit(sendEmail)} noValidate>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                {...register('name', { required: true })}
                type="text"
                placeholder="Enter your name"
                isInvalid={errors.name}
              />
              {errors.name && <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>}
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                type="email"
                placeholder="name@example.com"
                isInvalid={errors.email}
              />
              {errors.email && (
                <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                {...register('message', { required: true })}
                as="textarea"
                rows={4}
                placeholder="Write your message here..."
                isInvalid={errors.message}
              />
              {errors.message && <Form.Control.Feedback type="invalid">Please enter a message.</Form.Control.Feedback>}
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}