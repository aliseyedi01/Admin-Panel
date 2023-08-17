// react
import React from "react";
// antd
import { Modal, Spin } from "antd";
// icons
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = <LoadingOutlined className=" text-white" spin />;

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
      title={<span className="font-Montserrat">{title}</span>}
      open={open}
      onOk={onConfirm}
      confirmLoading={confirmLoading}
      onCancel={onCancel}
      footer={[
        <button
          key="back"
          className="mr-1 rounded-md bg-red-700 px-3 py-1 text-white"
          onClick={onCancel}
        >
          Cancel
        </button>,
        <button
          key="submit"
          className="rounded-md bg-blue-500 px-3 py-1 text-white"
          onClick={onConfirm}
          disabled={confirmLoading}
        >
          {confirmLoading ? (
            <span>
              Removing
              <Spin indicator={antIcon} className="ml-1" />
            </span>
          ) : (
            "Confirm"
          )}
        </button>,
      ]}
    >
      <p className="inline  font-Montserrat text-base">
        Are you sure to remove<p className="inline px-2 font-semibold">{modalText}</p>?
      </p>
    </Modal>
  );
};

export default ConfirmModal;
