import React, { useEffect, useState } from 'react';
import styles from '../../styles/Navbar.module.css';
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { RiHome3Line, RiMailLine } from "react-icons/ri";
import { SiAboutdotme } from "react-icons/si";
import { MdOutlineWorkOutline } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsDark(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuElements = [
    { name: "Home", icon: <RiHome3Line size={24} /> },
    { name: "About", icon: <SiAboutdotme size={26} /> },
    { name: "Works", icon: <MdOutlineWorkOutline size={24} /> },
    { name: "Contact", icon: <RiMailLine size={24} /> },
    { name: "Spotlight", icon: <GrAnnounce size={24} /> }
  ];

  return (
    <div className={`${styles.main} ${isDark ? styles.dark : styles.light}`}>
      <div className={styles.left}>
        <Link to="/home">
          <img className={styles.logo} src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={styles.right}>
        <nav className={styles.navSection}>
          <div className={styles.navLinks}>
            {menuElements.map(({ name, icon }) => (
              <Link to={`/${name.toLowerCase()}`} key={name}>
                <div className={styles.links}>
                  <span className={styles.icons}>{icon}</span>
                  <span className={styles.names}>{name}</span>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;