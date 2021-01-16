import React from 'react';
import { Row, Container, Form, Button } from 'react-bootstrap';
import { VoidHandler } from '../shared/types';
import { ITeam } from '../classes/ITeam';
import 'react-dropdown/style.css';

type EventHandler = (event: any) => void;
interface IAddFormEmployeeProps {
  onCancelClick: VoidHandler;
  changeHandler: EventHandler;
  submitHandler: EventHandler;
  searchEventHandler: EventHandler;
  employeeUsers: ITeam;
  isButtonDisabled: boolean;
  first_name_error: string;
}

const AddFormEmployee = ({
  onCancelClick,
  changeHandler,
  submitHandler,
  searchEventHandler,
  employeeUsers,
  isButtonDisabled,
  first_name_error,
}: IAddFormEmployeeProps) => {
  return (
    <Row>
      <Container>
        <Form>
          <div className="mb-3">
            <h3>Enter The Details</h3>
          </div>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={changeHandler}
              name="first_name"
<<<<<<< HEAD:src/Component/AddFormEmployee.tsx
              value={employeeUsers.first_name}
              autoComplete="off"
=======
              value={employeeUser.first_name}
>>>>>>> master:src/Component/AddFormEmploye.tsx
            />
            <div>{first_name_error ? first_name_error : ''}</div>
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={changeHandler}
              name="last_name"
<<<<<<< HEAD:src/Component/AddFormEmployee.tsx
              value={employeeUsers.last_name}
=======
              value={employeeUser.last_name}
>>>>>>> master:src/Component/AddFormEmploye.tsx
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Address"
              onChange={changeHandler}
              name="email"
<<<<<<< HEAD:src/Component/AddFormEmployee.tsx
              value={employeeUsers.email}
=======
              value={employeeUser.email}
>>>>>>> master:src/Component/AddFormEmploye.tsx
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              onChange={changeHandler}
              name="phone"
<<<<<<< HEAD:src/Component/AddFormEmployee.tsx
              value={employeeUsers.phone}
=======
              value={employeeUser.phone}
>>>>>>> master:src/Component/AddFormEmploye.tsx
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
<<<<<<< HEAD:src/Component/AddFormEmployee.tsx
              placeholder="text"
              onChange={changeHandler}
              name="description"
              value={employeeUsers.description ? employeeUsers.description : ''}
=======
              placeholder="Description"
              onChange={onMychangeHandler}
              name="description"
              value={employeeUser.description}
>>>>>>> master:src/Component/AddFormEmploye.tsx
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Address"
              onChange={changeHandler}
              name="address"
<<<<<<< HEAD:src/Component/AddFormEmployee.tsx
              value={employeeUsers.address}
=======
              value={employeeUser.address}
>>>>>>> master:src/Component/AddFormEmploye.tsx
            />
          </Form.Group>
          <Button
            variant="primary"
            className="mr-3"
            onClick={submitHandler}
            disabled={isButtonDisabled}
          >
            Submit
          </Button>
          <Button variant="outline-secondary" onClick={onCancelClick}>
            Cancel
          </Button>
        </Form>
      </Container>
    </Row>
  );
};
export default AddFormEmployee;
