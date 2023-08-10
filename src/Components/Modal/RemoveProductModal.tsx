// react
import React, { useState, useEffect } from "react";
// component
import ConfirmModal from "./ConfirmModal";
// types
import { Product } from "@/interface/product";
import { BlogType } from "@/interface/blog";
// redux
import { useDispatch } from "react-redux";
import { removeProduct } from "@/store/slice/productSlice";
import { removeBlog } from "@/store/slice/blogSlice";

type Item = Product | BlogType;

interface RemoveItemModalProps {
  item: Item;
  type: "product" | "blog";
}

const RemoveProductModal: React.FC<RemoveItemModalProps> = ({ item, type }) => {
  // redux
  const dispatch = useDispatch();
  // remove modal
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  // dynamically title
  const [modalTitle, setModalTitle] = useState("Remove Item");

  useEffect(() => {
    setOpen(true);
    setModalText(item.name);

    if (type === "product") {
      setModalTitle("Remove Product");
    } else {
      setModalTitle("Remove Blog");
    }
  }, [item]);

  // confirm to remove user
  const handleOk = () => {
    setModalText(item.name);
    setConfirmLoading(true);
    setTimeout(() => {
      if (type === "product") {
        dispatch(removeProduct(item.key));
      } else {
        dispatch(removeBlog(item.key));
      }
      setOpen(false);
      setConfirmLoading(false);
    }, 500);
  };

  return (
    <ConfirmModal
      title={modalTitle}
      open={open}
      onConfirm={handleOk}
      confirmLoading={confirmLoading}
      onCancel={() => setOpen(false)}
      modalText={modalText}
    />
  );
};

export default RemoveProductModal;
