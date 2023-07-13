import { Button, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

const UserSingle = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5">
      <Tooltip title="Back">
        <Button type="primary" icon={<IoChevronBack />} onClick={() => navigate(-1)} />
      </Tooltip>
    </div>
  );
};

export default UserSingle;
