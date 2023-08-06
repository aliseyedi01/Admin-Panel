// react
import React, { useState, useEffect } from "react";
// component
import ConfirmModal from "./ConfirmModal";
// types
import { Product } from "@/interface/product";
// redux
import { useDispatch } from "react-redux";
import { remove } from "@/store/slice/productSlice";

interface RemoveProductModalProps {
  product: Product;
}

const RemoveProductModal: React.FC<RemoveProductModalProps> = ({ product }) => {
  // redux
  const dispatch = useDispatch();
  // remove modal
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  useEffect(() => {
    setOpen(true);
    setModalText(`Are you sure to remove ${product.name} ?`);
  }, [product]);

  // confirm to remove user
  const handleOk = () => {
    setModalText(`Permanently Removing  : ${product.name}`);
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(remove(product.key));
      setOpen(false);
      setConfirmLoading(false);
    }, 1000);
  };
  return (
    <ConfirmModal
      title="Remove Product"
      open={open}
      onConfirm={handleOk}
      confirmLoading={confirmLoading}
      onCancel={() => setOpen(false)}
      modalText={modalText}
    />
  );
};

export default RemoveProductModal;
