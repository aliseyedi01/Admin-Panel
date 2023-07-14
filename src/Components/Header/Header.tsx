// redux
import { Button } from "antd";
import { useDispatch } from "react-redux/es/exports";
// icons
import { ChangeModeBtn } from "..";
import { FaAlignJustify } from "react-icons/fa";
import { open } from "@/store/slice/menuSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    dispatch(open());
  };

  return (
    <div className="surface flex h-16 w-full items-center justify-between bg-gray-300 px-5">
      <div className="flex items-center">
        <Button
          type="ghost"
          onClick={handleMenuOpen}
          className="mr-2 md:hidden"
          icon={<FaAlignJustify />}
        />
      </div>
      <div>
        <ChangeModeBtn />
      </div>
    </div>
  );
};

export default Header;
