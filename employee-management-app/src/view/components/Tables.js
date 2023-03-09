import { useState, useEffect } from "react";
import {
  FormGroup,
  Card,
  CardHeader,
  CardFooter,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
} from "reactstrap";
import GetEmployeeHandler, {
  FilterEmployeeHandler,
} from "../../controller/EmployeeHandler";
import ConfirmationModal from "./ConfirmationModal";
import NewEmployeeModal from "./NewEmployeeModal";
import UpdateEmployeeModal from "./UpdateEmployeeModal";
// core components
// import Header from "components/Headers/Header.js";

const Tables = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    GetEmployeeHandler().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  const handleSelectChange = async (event) => {
    const employe_type = event.target.value;
    const res = await FilterEmployeeHandler(employe_type);
    setData(res);
  };

  return (
    <>
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow mt-3 mx-5">
              <CardHeader className="border-0 mt-3">
                <div className="d-flex justify-content-between">
                  <div>
                    <h2 className="">People</h2>
                  </div>
                  <div className="d-flex justify-content-end">
                    <FormGroup className="mx-2">
                      <Input
                        type="select"
                        name="select"
                        style={{ width: 150 }}
                        id="exampleSelect"
                        value={selectedOption}
                        onChange={handleSelectChange}
                        size="sm"
                      >
                        <option value="All">Employee Type</option>
                        <option value="Full Time">Full Time</option>
                        <option value="Part Time">Part Time</option>
                        <option value="Contract Basis">Contract Basis</option>
                        <option value="Other">Other</option>
                      </Input>
                    </FormGroup>
                    <div>
                      <NewEmployeeModal />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush mt-3" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Employee ID</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Employee Type</th>
                    <th scope="col">Experience</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {data?.map((item, index) => (
                    <tr key={index}>
                      <td>{item.display_name}</td>
                      <td>{item.employee_id}</td>
                      <td>{item.designation}</td>
                      <td>{item.employee_type}</td>
                      <td>{item.experience}</td>
                      <td className="text-right">
                        <UpdateEmployeeModal item={item} />
                        <ConfirmationModal id={item._id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;
