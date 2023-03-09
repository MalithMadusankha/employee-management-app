import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import UpdateEmployeeForm from "./UpdateEmployeeForm";

export default function UpdateEmployeeModal({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Button className="mx-2" color="primary" size="sm" onClick={toggle}>
        Edit
      </Button>
      <Modal
        isOpen={isOpen}
        toggle={toggle}
        className=""
        backdrop="true"
        size="lg"
      >
        <ModalHeader toggle={toggle}>Update People</ModalHeader>
        <ModalBody>
          <UpdateEmployeeForm item={item} toggle={toggle} />
        </ModalBody>
      </Modal>
    </>
  );
}
