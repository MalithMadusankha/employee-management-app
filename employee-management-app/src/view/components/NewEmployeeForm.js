import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Alert,
} from "reactstrap";
import { CreateEmployeeHandler } from "../../controller/EmployeeHandler";

export default function NewEmployeeForm({ toggle }) {
  const [full_name, setFull_name] = useState("");
  const [name_with_initials, setName_with_initials] = useState("");
  const [display_name, setDisplay_name] = useState("");
  const [gender, setGender] = useState("");
  const [date_of_birth, setDate_of_birth] = useState("");
  const [mobile_number, setMobile_number] = useState("");
  const [designation, setDesignation] = useState("");
  const [employee_type, setEmployee_type] = useState("");
  const [email, setEmail] = useState("");
  const [join_date, setJoin_date] = useState("");
  const [experience, setExperience] = useState(null);
  const [salary, setSalary] = useState(null);
  const [personal_notes, setPersonal_notes] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // submit form data to server or perform other actions
    let employeeObj = {
      full_name,
      name_with_initials,
      display_name,
      gender,
      date_of_birth,
      mobile_number,
      designation,
      employee_type,
      email,
      join_date,
      experience,
      salary,
      personal_notes,
    };
    try {
      console.log("e", employeeObj);
      const res = await CreateEmployeeHandler(employeeObj);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {/* full name */}
        {isLoading ? (
          <Alert color="primary"> Loading . . .</Alert>
        ) : isSuccess ? (
          <Alert color="success"> Employee Created</Alert>
        ) : (
          isError && <Alert color="danger"> Employee is not Created</Alert>
        )}

        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="full_name">
                Full Name*
              </Label>
              <Input
                type="text"
                name="full_name"
                id="full_name"
                placeholder="Kalawala Dewage Rathnasiri"
                required
                value={full_name}
                onChange={(e) => setFull_name(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Name With Initital & Display Name */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="name_with_initital">
                Name With Initital*
              </Label>
              <Input
                type="text"
                name="name_with_initital"
                id="name_with_initital"
                placeholder="K.D.Rathnasiri"
                required
                value={name_with_initials}
                onChange={(e) => setName_with_initials(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="display_name">
                Preferred / Display Name
              </Label>
              <Input
                type="text"
                name="display_name"
                id="display_name"
                placeholder="D Rathnasiri"
                value={display_name}
                onChange={(e) => setDisplay_name(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Gender & Date Of Birth */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="gender">
                Gender
              </Label>
              <Input
                type="select"
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="date_of_birth">
                Date Of Birth
              </Label>
              <Input
                type="date"
                name="date_of_birth"
                id="date_of_birth"
                value={date_of_birth}
                onChange={(e) => setDate_of_birth(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Email & Mobile Number */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="email">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="malith2gm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="mobile_number">
                Mobile Number
              </Label>
              <Input
                type="tel"
                name="mobile_number"
                id="mobile_number"
                placeholder="0770699151"
                value={mobile_number}
                onChange={(e) => setMobile_number(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Designation & Employee Type */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="designation">
                Designation
              </Label>
              <Input
                type="text"
                name="designation"
                id="designation"
                placeholder="malith2gm.com"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="mobile_number">
                Employee Type
              </Label>
              <Input
                type="select"
                name="select"
                id="exampleSelect"
                value={employee_type}
                onChange={(e) => setEmployee_type(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract Basis">Contract Basis</option>
                <optio value="Other">Other</optio>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        {/* Join Date & Experience */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="join_date">
                Join Date
              </Label>
              <Input
                type="date"
                name="join_date"
                id="join_date"
                value={join_date}
                onChange={(e) => setJoin_date(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="mobile_number">
                Experience
              </Label>
              <Input
                type="select"
                name="select"
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              >
                <option value="">Select Experience</option>
                <option value="1">01 Year</option>
                <option value="1">02 Year</option>
                <option value="1">03 Year</option>
                <option value="1">04 Year</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        {/* Salary */}
        <Row>
          <Col>
            <FormGroup>
              <Label className="text-primary" for="salary">
                Salary
              </Label>
              <Input
                type="text"
                name="gender"
                id="salary"
                placeholder="450000"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {/* Personl Notes */}
        <FormGroup>
          <Label className="text-primary" for="personal_notes">
            Personl Notes
          </Label>
          <Input
            type="textarea"
            name="personal_notes"
            id="personal_notes"
            value={personal_notes}
            onChange={(e) => setPersonal_notes(e.target.value)}
          />
        </FormGroup>
        <div className="mt-5 d-flex justify-content-end">
          <Button
            className="mx-2"
            color="secondary"
            onClick={() =>
              isError || isSuccess ? window.location.reload() : toggle()
            }
          >
            Cancel
          </Button>
          <Button color="success" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </>
  );
}
