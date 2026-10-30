import { useState, useEffect, useRef } from "react";

const MODES = [
  { value: "light",  label: "Light" },
  { value: "dark",   label: "Dark" },
  { value: "system", label: "System" },
];

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function ThemeToggle() {
  const [mode, setMode] = useState(() => localStorage.getItem("theme-mode") || "system");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const apply = (m) => {
      const resolved = m === "system" ? getSystemTheme() : m;
      document.documentElement.setAttribute("data-theme", resolved);
    };

    apply(mode);
    localStorage.setItem("theme-mode", mode);

    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const onChange = () => apply("system");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
  }, [mode]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = MODES.find((m) => m.value === mode);

  return (
    <div className="flex justify-end" ref={dropdownRef}>
      <div className="relative">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="btn btn-sm gap-1"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <span>{current.label}</span>
          <svg
            className={`w-3 h-3 fill-current transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>

        {open && (
          <ul
            role="listbox"
            className="absolute right-0 mt-1 z-50 min-w-[100px] rounded-lg shadow-lg border border-base-content/20 bg-base-200 py-1 overflow-hidden"
          >
            {MODES.map(({ value, label }) => (
              <li key={value} role="option" aria-selected={mode === value}>
                <button
                  onClick={() => {
                    setMode(value);
                    setOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-sm text-left hover:bg-base-300 transition-colors ${
                    mode === value ? "font-semibold text-primary" : ""
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ThemeToggle;
