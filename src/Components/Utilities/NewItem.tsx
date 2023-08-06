import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle } from "react-icons/ai";

interface NewItemProps {
  name: string;
  path: string;
}

const NewItem: React.FC<NewItemProps> = ({ name, path }) => {
  return (
    <Link to={path} className="inline-block no-underline">
      <Button className="mb-4 flex items-center gap-1 bg-blue-500 font-bold" type="primary">
        <AiOutlinePlusCircle className="text-lg" /> {` New ${name}`}
      </Button>
    </Link>
  );
};

export default NewItem;
