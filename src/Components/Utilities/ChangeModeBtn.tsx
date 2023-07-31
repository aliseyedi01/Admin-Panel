// Icon
import { FaSun, FaRegMoon } from "react-icons/fa";
// antd
import { Button, Tooltip } from "antd";
// hooks
import useDarkMode from "@/Hooks/useDarkMode";
// redux
import { useAppDispatch } from "@/interface/utils";
import { disableDarkMode, enableDarkMode } from "@/store/slice/darkmodeSlice";

const ChangeModeBtn: React.FC = () => {
  const [darkMode, handleThemeChange] = useDarkMode();
  const dispatch = useAppDispatch();

  if (darkMode) {
    dispatch(enableDarkMode());
  } else {
    dispatch(disableDarkMode());
  }

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
