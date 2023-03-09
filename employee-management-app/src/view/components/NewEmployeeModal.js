import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewEmployeeForm from "./NewEmployeeForm";

export default function NewEmployeeModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button color="primary" size="sm" onClick={toggle}>
        New People
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop="true"
        size="lg"
      >
        <ModalHeader toggle={toggle}>Add People</ModalHeader>
        <ModalBody>
          <NewEmployeeForm toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
}
