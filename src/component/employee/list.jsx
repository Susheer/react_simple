import { Table, Button, Card } from "react-bootstrap";
export default ({ employees, onEdit, onDelete, shAddFrm }) => {
  return (
    <Card>
      <Card.Header>
        Employee list{" "}
        <Button
          style={{ float: "right" }}
          variant="info"
          onClick={() => {
            shAddFrm();
          }}
        >
          Add New Employee
        </Button>{" "}
      </Card.Header>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Domain</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        {employees.map((employee) => (
          <tr key={employee.email}>
            <td>{employee.name}</td>
            <td>{employee.domain}</td>
            <td>{employee.email}</td>
            <td>
              <Button
                variant="primary"
                onClick={() => {
                  onEdit(employee);
                }}
              >
                Edit
              </Button>{" "}
              <Button
                variant="primary"
                onClick={() => {
                  onDelete(employee);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </Table>
    </Card>
  );
};
