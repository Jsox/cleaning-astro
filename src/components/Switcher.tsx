import { persistentAtom } from "@nanostores/persistent";
import { useEffect, useRef, useState } from "react";

export default function Switcher() {
  const switcher = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(true);
  const theme = persistentAtom<"dark" | "light">("theme", "dark");
  function changeTheme() {
    // if (e) e.preventDefault();
    const htmlTag = document.getElementsByTagName("html")[0];

    if (htmlTag.className.includes("dark")) {
      htmlTag.className = "light";
      theme.set("light");
    } else {
      htmlTag.className = "dark";
      theme.set("dark");
    }
    setChecked(theme.get() !== "dark");
  }

  function initTheme() {
    const htmlTag = document.getElementsByTagName("html")[0];
    htmlTag.className = theme.get();
    setChecked(theme.get() !== "dark");
  }

  useEffect(() => {
    initTheme();
  }, [switcher]);

  return (
    <div className="fixed top-1/4 -right-2 z-50">
      <span className="relative inline-block rotate-90">
        <input
          onChange={changeTheme}
          checked={checked}
          id={"switcher"}
          type="checkbox"
          className="checkbox opacity-0 absolute"
        />
        <label
          className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"
          htmlFor="switcher"
        >
          <i className="uil uil-moon text-[20px] text-blue-200"></i>
          <i className="uil uil-sun text-[20px] text-blue-800"></i>
          <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7"></span>
        </label>
      </span>
    </div>
  );
}
