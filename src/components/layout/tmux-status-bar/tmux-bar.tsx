"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import Link from "next/link";

const windows = [
  { id: 0, name: "blog", link: "/" },
//  { id: 1, name: "logs", link: "/logs" },
  { id: 1, name: "about", link: "/about-me" },
  { id: 2, name: "books", link: "/book" },
//  { id: 4, name: "contact", link: "/contact" },
];

//TODO: Not my proudest component, I have to redo this in the future
const TmuxStatusBar = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({ bottom: 0, left: 0 });
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    windows.forEach((window) => {
      if (window.link === pathname) {
        setActiveWindowIndex(window.id);
      }
    });
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const session = "Blog";
  const user = "coronado";
  const pane = `0:${activeWindowIndex}`;
  const host = "ThinkPad T14 Gen 2";

  const formattedTime = time
    ? time.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : "--:--:--";

  const formattedDate = time
    ? time.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
      })
    : "-- --- --";

  const colors = {
    base: "#1e1e2e",
    mantle: "#181825",
    crust: "#11111b",
    text: "#cdd6f4",
    subtext0: "#a6adc8",
    subtext1: "#bac2de",
    surface0: "#313244",
    surface1: "#45475a",
    surface2: "#585b70",
    mauve: "#cba6f7",
    pink: "#f5c2e7",
    blue: "#89b4fa",
    lavender: "#b4befe",
    sapphire: "#74c7ec",
    teal: "#94e2d5",
  };

  return (
    <>
      <style jsx>{`
        .powerline-arrow-right {
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }
        .powerline-arrow-left {
          clip-path: polygon(0 50%, 100% 0, 100% 100%);
        }
        .menu-popup {
          animation: slideUp 0.12s ease-out;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <footer
        className="h-8 text-xs flex items-center font-mono relative"
        style={{ backgroundColor: colors.base }}
      >
        <div className="flex h-full items-center">
          <div
            className="px-4 font-bold flex items-center h-full relative"
            style={{ backgroundColor: colors.pink, color: colors.base }}
          >
            {session}
            <div
              className="absolute -right-3 top-0 bottom-0 w-3 powerline-arrow-right z-10"
              style={{ backgroundColor: colors.pink }}
            />
          </div>

          <div
            className="hidden sm:flex px-6 font-bold items-center h-full relative pl-6"
            style={{ backgroundColor: colors.surface1, color: colors.text }}
          >
            {user}
            <div
              className="absolute -right-3 top-0 bottom-0 w-3 powerline-arrow-right z-10"
              style={{ backgroundColor: colors.surface1 }}
            />
          </div>

          <div
            className="hidden sm:flex px-6 items-center h-full pl-6"
            style={{ backgroundColor: colors.surface0, color: colors.subtext0 }}
          >
            {pane}
          </div>
        </div>

        <div
          className="hidden sm:flex flex-grow justify-center items-center gap-6 font-bold opacity-75"
          style={{ color: colors.subtext0 }}
        >
          {windows.map((win, index) => (
            <Link
              key={win.id}
              href={win.link}
              onClick={() => setActiveWindowIndex(win.id)}
              className="cursor-pointer transition-colors"
              style={{
                color: index === activeWindowIndex ? colors.pink : colors.subtext0,
              }}
              onMouseEnter={(e) => {
                if (index !== activeWindowIndex) {
                  e.currentTarget.style.color = colors.subtext1;
                }
              }}
              onMouseLeave={(e) => {
                if (index !== activeWindowIndex) {
                  e.currentTarget.style.color = colors.subtext0;
                }
              }}
            >
              {win.id}:{win.name}
            </Link>
          ))}
        </div>

        <div className="flex sm:hidden flex-grow justify-center items-center">
          <button
            ref={buttonRef}
            onClick={() => {
              if (!menuOpen && buttonRef.current) {
                const rect = buttonRef.current.getBoundingClientRect();
                setMenuPos({
                  bottom: window.innerHeight - rect.top + 4,
                  left: rect.left + rect.width / 2,
                });
              }
              setMenuOpen((v) => !v);
            }}
            className="flex flex-col gap-[4px] items-center justify-center w-6 h-6 opacity-75 hover:opacity-100 transition-opacity"
            aria-label="Toggle navigation"
          >
            <span
              className="block w-4 h-[1.5px] transition-all duration-150"
              style={{
                backgroundColor: menuOpen ? colors.pink : colors.subtext0,
                transform: menuOpen ? "translateY(5.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-4 h-[1.5px] transition-all duration-150"
              style={{
                backgroundColor: menuOpen ? colors.pink : colors.subtext0,
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-4 h-[1.5px] transition-all duration-150"
              style={{
                backgroundColor: menuOpen ? colors.pink : colors.subtext0,
                transform: menuOpen ? "translateY(-5.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>

          {menuOpen && typeof document !== "undefined" && createPortal(
            <div
              ref={menuRef}
              className="menu-popup fixed border rounded text-xs font-mono font-bold z-[9999] overflow-hidden -translate-x-1/2"
              style={{
                backgroundColor: colors.mantle,
                borderColor: colors.surface1,
                minWidth: "140px",
                bottom: menuPos.bottom,
                left: menuPos.left,
              }}
            >
              {windows.map((win, index) => (
                <Link
                  key={win.id}
                  href={win.link}
                  onClick={() => {
                    setActiveWindowIndex(win.id);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 transition-colors"
                  style={{
                    backgroundColor:
                      index === activeWindowIndex ? colors.surface0 : "transparent",
                    color:
                      index === activeWindowIndex ? colors.pink : colors.subtext0,
                  }}
                  onMouseEnter={(e) => {
                    if (index !== activeWindowIndex) {
                      e.currentTarget.style.backgroundColor = colors.surface0;
                      e.currentTarget.style.color = colors.subtext1;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (index !== activeWindowIndex) {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = colors.subtext0;
                    }
                  }}
                >
                  <span style={{ color: colors.surface2 }}>{win.id}:</span>
                  {win.name}
                </Link>
              ))}
            </div>,
            document.body
          )}
        </div>

        <div className="ml-auto flex h-full items-center">
          <div
            className="hidden sm:flex px-6 items-center h-full relative pr-6"
            style={{ backgroundColor: colors.surface0, color: colors.subtext0 }}
          >
            <div
              className="absolute -left-3 top-0 bottom-0 w-3 powerline-arrow-left z-10"
              style={{ backgroundColor: colors.surface0 }}
            />
            {formattedDate}
          </div>

          <div
            className="px-6 flex items-center h-full relative pr-6"
            style={{ backgroundColor: colors.surface1, color: colors.text }}
          >
            <div
              className="absolute -left-3 top-0 bottom-0 w-3 powerline-arrow-left z-10"
              style={{ backgroundColor: colors.surface1 }}
            />
            {formattedTime}
          </div>

          <div
            className="hidden sm:flex px-4 font-bold items-center h-full relative"
            style={{ backgroundColor: colors.blue, color: colors.base }}
          >
            <div
              className="absolute -left-3 top-0 bottom-0 w-3 powerline-arrow-left z-10"
              style={{ backgroundColor: colors.blue }}
            />
            {host}
          </div>
        </div>
      </footer>
    </>
  );
};

export default TmuxStatusBar;
