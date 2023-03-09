import React, { useState } from "react";
import { Button, Modal, ModalBody, Alert } from "reactstrap";
import { DeleteEmployeeHandler } from "../../controller/EmployeeHandler";

export default function ConfirmationModal({ id }) {
  const [isOpen, setIsOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const deleteHadler = () => {
    try {
      setIsLoading(true);
      DeleteEmployeeHandler(id);
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
    }
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button color="danger" className="mx-2" size="sm" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalBody className="text-danger m-3">
          <h5> Are you sure, You want to delete this employee </h5>
          {isLoading ? (
            <Alert color="primary"> Loading . . .</Alert>
          ) : isSuccess ? (
            <Alert color="success"> Employee Deleted</Alert>
          ) : (
            isError && <Alert color="danger"> Employee is not Updated</Alert>
          )}
          <div className="mt-5 d-flex justify-content-center">
            <Button className="mx-2" color="secondary" onClick={toggle}>
              Cancel
            </Button>
            <Button className="mx-2" color="danger" onClick={deleteHadler}>
              Confirm
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
