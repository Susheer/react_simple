import { Form, Button, Card } from "react-bootstrap";
import { useState } from "react";
export default ({ selectedEmployee, onSubmit, goBack }) => {
  const [name, setName] = useState(selectedEmployee.name);
  const [domain, setDomain] = useState(selectedEmployee.domain);
  const [email, setEmail] = useState(selectedEmployee.email);
  //------------------------------------------------------------------
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onDomainChange = (e) => {
    setDomain(e.target.value);
  };

  return (
    <Card>
      <Card.Header>Edit employee information </Card.Header>
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
              readOnly
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
            Edit Employee
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
