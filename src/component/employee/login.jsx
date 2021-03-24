import { Form, Button } from "react-bootstrap";
export default ({ selectedEmployee, fn, goBack }) => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="e.g Jon carry" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Domain</Form.Label>
        <Form.Control type="text" placeholder="e.g Software engineer" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="e.g Carry@gmail.com" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        onClick={() => {
          fn();
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
  );
};
