"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const windows = [
  { id: 0, name: "blog", link: "/" },
  { id: 1, name: "about", link: "/about-me" },
  { id: 2, name: "books", link: "/book" },
  { id: 3, name: "contact", link: "/contact" },
];

const TmuxStatusBar = () => {
  const [time, setTime] = useState<Date | null>(null);
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);
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

  const session = "Blog";
  const user = "coronado";
  const pane = `0:${activeWindowIndex}`;
  const host = "ThinkPad T14 Gen 2";

  const formattedTime = time ? time.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }) : "--:--:--";

  const formattedDate = time ? time.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "2-digit",
  }) : "-- --- --";

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
      `}</style>

      <footer
        className="h-8 text-xs flex items-center overflow-hidden font-mono"
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
            className="px-6 font-bold flex items-center h-full relative pl-6"
            style={{ backgroundColor: colors.surface1, color: colors.text }}
          >
            {user}
            <div
              className="absolute -right-3 top-0 bottom-0 w-3 powerline-arrow-right z-10"
              style={{ backgroundColor: colors.surface1 }}
            />
          </div>

          <div
            className="px-6 flex items-center h-full pl-6"
            style={{ backgroundColor: colors.surface0, color: colors.subtext0 }}
          >
            {pane}
          </div>
        </div>

        <div
          className="flex-grow flex justify-center items-center gap-6 font-bold opacity-75"
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

        <div className="ml-auto flex h-full items-center">
          <div
            className="px-6 flex items-center h-full relative pr-6"
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
            className="px-4 font-bold flex items-center h-full relative"
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
