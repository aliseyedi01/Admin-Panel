// state management
import { useDispatch } from "react-redux/es/exports";
import { remove } from "@/store/slice/userSlice";
import ConfirmModal from "@/Components/Modal/ConfirmModal";
import React, { useEffect, useState } from "react";
import { DataType } from "@/interface/user";

interface RemoveUserModalProps {
  user: DataType;
}

const RemoveUserModal: React.FC<RemoveUserModalProps> = ({ user }) => {
  // redux
  const dispatch = useDispatch();
  // remove modal
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  useEffect(() => {
    setOpen(true);
    setModalText(user.name);
  }, [user]);

  // confirm to remove user
  const handleOk = () => {
    setModalText(user.name);
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(remove(user.key));
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  return (
    <ConfirmModal
      title="Remove User"
      open={open}
      onConfirm={handleOk}
      confirmLoading={confirmLoading}
      onCancel={() => setOpen(false)}
      modalText={modalText}
    />
  );
};

export default RemoveUserModal;
