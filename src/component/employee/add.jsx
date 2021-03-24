import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
export default ({ onSubmit, goBack }) => {
  const [name, setName] = useState();
  const [domain, setDomain] = useState();
  const [email, setEmail] = useState();
  //------------------------------------------------------------------
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onDomainChange = (e) => {
    setDomain(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Card>
      <Card.Header>Add new employee </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={onNameChange}
              type="text"
              value={name}
              placeholder="e.g Jon carry"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Domain</Form.Label>
            <Form.Control
              onChange={onDomainChange}
              type="text"
              value={domain}
              placeholder="e.g Software engineer"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={onEmailChange}
              type="email"
              value={email}
              placeholder="e.g Carry@gmail.com"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              onSubmit({ name: name, domain: domain, email: email });
            }}
          >
            Add Employee
          </Button>{" "}
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              goBack();
            }}
          >
            Back
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};
