import { FC, useEffect, useState } from 'react';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';

import './styles.scss';

const components = [
  'body-bg',
  'header-color',
  'card-bg',
  'card-title-color',
  'card-subtitle-color',
];

const setItem = (name: string, item: any) => {
  localStorage.setItem(name, JSON.stringify(item));
};
const getItem = (name: string) => {
  const item = localStorage.getItem(name);
  if (item) return JSON.parse(item);
};

const Header: FC = () => {
  const [theme, setTheme] = useState(getItem('theme') || 'light');

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;
    components.forEach((item) => {
      root.style.setProperty(`--${item}-default`, `var(--${item}-${theme})`);
    });
    setItem('theme', theme);
  }, [theme]);

  return (
    <header>
      <h1>nikzz Skinhub</h1>
      <div className="icon">
        {theme === 'light' ? (
          <RiMoonLine onClick={changeTheme} size="50px" />
        ) : (
          <RiSunLine onClick={changeTheme} size="50px" />
        )}
      </div>
    </header>
  );
};

export default Header;
