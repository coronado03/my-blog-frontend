"use client"
import React, { useState, useEffect } from "react";

import { usePathname } from 'next/navigation'
import Link from "next/link";

const Arrow = ({ color, direction = "right", bgColor = "#1e1e2e" }) => (
  <div
    className="relative flex-shrink-0"
    style={{
      width: '0',
      height: '0',
      borderTop: '16px solid transparent',
      borderBottom: '16px solid transparent',
      [direction === "right" ? 'borderLeft' : 'borderRight']: `16px solid ${color}`,
      marginLeft: direction === "right" ? '0.5px' : '-16px',
      marginRight: direction === "right" ? '-16px' : '0.5px',
      zIndex: direction === "right" ? 2 : 2
    }}
  />
);

const windows = [
  { id: 0, name: "blog", link: '/' },
  { id: 1, name: "about", link: '/about-me' },
  { id: 2, name: "books", link: '/book' },
  { id: 3, name: "contact", link: '/contact' }
];

const TmuxStatusBar = () => {
  const [time, setTime] = useState(new Date());
  const [activeWindowIndex, setActiveWindowIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    windows.forEach((window) => {
      if (window.link === pathname) {
        setActiveWindowIndex(window.id)
      }
    })
  }, [pathname, windows]);

  const session = "Blog";
  const user = "coronado";
  const pane = `0:${activeWindowIndex}`
  const host = "ThinkPad T14 Gen 2";

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const formattedDate = time.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: '2-digit'
  });

  // TODO: MUST make Tailwind constants for these.
  const colors = {
    base: '#1e1e2e',
    mantle: '#181825',
    crust: '#11111b',
    text: '#cdd6f4',
    subtext0: '#a6adc8',
    subtext1: '#bac2de',
    surface0: '#313244',
    surface1: '#45475a',
    surface2: '#585b70',
    mauve: '#cba6f7',
    pink: '#f5c2e7',
    blue: '#89b4fa',
    lavender: '#b4befe',
    sapphire: '#74c7ec',
    teal: '#94e2d5'
  };

  return (
    //TODO: fix horrible styling practices done here, dear God.
    <div
      className="w-full static font-mono text-sm flex items-stretch h-8 bottom-0"
      style={{ backgroundColor: colors.base, color: colors.text }}
    >
      <div className="flex items-stretch">
        <div
          className="flex items-center px-3 font-bold relative z-10"
          style={{ backgroundColor: colors.mauve, color: colors.crust }}
        >
          {session}
        </div>
        <Arrow color={colors.mauve} bgColor={colors.surface2} />
        <div
          className="flex items-center px-3 pl-5"
          style={{ backgroundColor: colors.surface2, color: colors.text }}
        >
          {user}
        </div>
        <Arrow color={colors.surface2} bgColor={colors.surface1} />
        <div
          className="flex items-center pl-5"
          style={{ backgroundColor: colors.surface1, color: colors.subtext0 }}
        >
          {pane}
        </div>
        <Arrow color={colors.surface1} />
      </div>

      <div className="flex-1 flex items-center justify-center gap-1">
        {windows.map((win, index) => (
          <React.Fragment key={index}>
            {index === activeWindowIndex ? (
              <div className="flex items-stretch">
                <button
                  onClick={() => setActiveWindowIndex(win.id)}
                  className="flex items-center px-2 cursor-pointer transition-all"
                  style={{
                    backgroundColor: colors.surface0,
                    color: colors.pink,
                    filter: 'brightness(1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
                >
                  {win.id}:{win.name}
                </button>
              </div>
            ) : (
              <Link href={win.link}>
                <button
                  className="flex items-center px-2 cursor-pointer transition-colors"
                  style={{ color: colors.subtext0 }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.subtext1}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.subtext0}
                >
                  {win.id}:{win.name}
                </button>
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex items-stretch">
        <Arrow color={colors.surface1} direction="left" />
        <div
          className="flex items-center pr-6"
          style={{ backgroundColor: colors.surface1, color: colors.subtext0 }}
        >
          {formattedTime}
        </div>
        <Arrow color={colors.surface2} direction="left" />
        <div
          className="flex items-center pr-5"
          style={{ backgroundColor: colors.surface2, color: colors.text }}
        >
          {formattedDate}
        </div>
        <Arrow color={colors.blue} direction="left" />
        <div
          className="flex items-center pr-6 font-bold"
          style={{ backgroundColor: colors.blue, color: colors.crust }}
        >
          {host}
        </div>
      </div>
    </div>
  );
};

export default TmuxStatusBar;
