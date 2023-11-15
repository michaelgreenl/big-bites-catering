'use client';

import styles from './navbar.module.scss';
import Link from 'next/link';
import { ArrowSvg } from '../../svgs/ArrowSvg';
import Button from '../Button/Button';
import { PolygonSvg } from '../../svgs/PolygonSvg';

const NavItemDesktop = ({
  isActive,
  href,
  text,
  icon,
  dropdown,
  dropdownList,
  dropdownOpen,
  setDropdownOpen,
  style,
  otherLinkHovered,
  setOtherLinkHovered,
}) => {
  function dropdownClick() {
    if (!isActive && !dropdownOpen && !otherLinkHovered) {
      openDropdown();
    } else if (!isActive && !dropdownOpen) {
      setDropdownOpen(false);
    } else {
      setDropdownOpen(!dropdownOpen);
    }
  }

  function openDropdown() {
    setDropdownOpen(true);
    setOtherLinkHovered(true);
  }

  return (
    <>
      {!dropdown ? (
        <li
          className={`${styles.linkCont} ${isActive ? styles['linkCont--active'] : undefined} ${
            isActive && otherLinkHovered ? styles['linkCont--active--otherLinkHovered'] : undefined
          } ${icon ? styles['linkCont--svg'] : undefined}`}
          style={{ ...style }}
          onMouseEnter={!isActive ? () => setOtherLinkHovered(true) : undefined}
          onMouseLeave={!isActive ? () => setOtherLinkHovered(false) : undefined}
        >
          <Link className={styles.link} href={href}>
            {icon}
            <span>{text}</span>
          </Link>
        </li>
      ) : (
        <li
          className={`${styles.linkCont} ${styles['linkCont--dropdown']} ${
            dropdownOpen || (isActive && !otherLinkHovered) ? styles['linkCont--active'] : undefined
          }`}
          style={{ ...style }}
          onMouseOver={() => openDropdown()}
        >
          <Button
            className={styles['linkCont--dropdown_button']}
            onClick={() => dropdownClick()}
            text={text}
            iconAfter={
              <ArrowSvg
                className={`${styles['linkCont--dropdown_button_arrow']} ${
                  dropdownOpen ? styles['linkCont--dropdown_button_arrow--active'] : undefined
                }`}
              />
            }
          />
          <>
            {dropdownOpen && (
              <>
                <PolygonSvg className={styles.polygon} />
                {dropdownList}
              </>
            )}
          </>
        </li>
      )}
    </>
  );
};

export default NavItemDesktop;
