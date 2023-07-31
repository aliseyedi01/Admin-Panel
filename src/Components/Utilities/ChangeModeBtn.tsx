import { FaSun, FaRegMoon } from "react-icons/fa";
import { Button, Tooltip } from "antd";
import useDarkMode from "@/Hooks/useDarkMode";

const ChangeModeBtn: React.FC = () => {
  const [darkMode, handleThemeChange] = useDarkMode();
  return (
    <Tooltip title="Chang Mode">
      <Button type="ghost" className="p-1" onClick={handleThemeChange}>
        {darkMode ? (
          <FaSun className=" text-lg text-yellow-300 md:text-2xl" />
        ) : (
          <FaRegMoon className=" text-lg dark:text-white md:text-2xl" />
        )}
      </Button>
    </Tooltip>
  );
};

export default ChangeModeBtn;
