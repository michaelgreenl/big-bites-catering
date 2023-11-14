import styles from './navbar.module.scss';
import Link from 'next/link';
import Button from '@/components/Button/Button';
import { ArrowSvg } from '../svgs/ArrowSvg';

const NavItem = ({
  href,
  isActive,
  icon,
  text,
  style,
  dropdown,
  dropdownOnClick,
  dropdownOpen,
  dropdownLinkText,
  dropdownIconAfter,
  dropdownList,
}) => {
  return (
    <>
      {!dropdown ? (
        <li className={`${styles.linkCont} ${isActive ? styles['linkCont--active'] : undefined}`} style={style}>
          <Link className={`${styles.link} ${isActive ? styles['link--active'] : undefined}`} href={href}>
            <span>{text}</span>
            {icon && icon}
          </Link>
        </li>
      ) : (
        <li className={`${styles.dropdownLinkCont} ${isActive ? styles['dropdownLinkCont--active'] : undefined}`}>
          <Button
            className={`${styles.link} ${isActive ? styles['link--active'] : undefined}`}
            onClick={() => dropdownOnClick()}
            iconBefore={
              <ArrowSvg
                className={`${styles.svgArrow} ${dropdownOpen ? styles['svgArrow--svgActive'] : undefined} ${
                  isActive ? styles['svgArrow--linkActive'] : undefined
                }`}
              />
            }
            text={dropdownLinkText}
            iconAfter={dropdownIconAfter}
          />
          {dropdownList}
        </li>
      )}
    </>
  );
};

export default NavItem;
