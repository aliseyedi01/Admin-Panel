import React from "react";
import { Modal } from "antd";

interface ConfirmModalProps {
  title: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLoading: boolean;
  modalText: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  open,
  onConfirm,
  onCancel,
  confirmLoading,
  modalText,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      onOk={onConfirm}
      okButtonProps={{ className: "bg-blue-500" }}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
    >
      <p className="text-base">{modalText}</p>
    </Modal>
  );
};

export default ConfirmModal;
