'use client';

import styles from './navbar.module.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import MenuButton from './MenuButton';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import NavItem from './NavItem';
import { HomeSvg } from '../../svgs/HomeSvg/HomeSvg';
import { HomeFillSvg } from '../../svgs/HomeSvg/HomeFillSvg';
import { MenuSvg } from '../../svgs/MenuSvg/MenuSvg';
import { MenuFillSvg } from '../../svgs/MenuSvg/MenuFillSvg';
import { ContactFillSvg } from '../../svgs/ContactSvg/ContactFillSvg';
import { ContactSvg } from '../../svgs/ContactSvg/ContactSvg';
import { AboutSvg } from '../../svgs/AboutSvg/AboutSvg';
import { AboutFillSvg } from '../../svgs/AboutSvg/AboutFillSvg';
import { GallerySvg } from '../../svgs/GallerySvg/GallerySvg';
import { GalleryFillSvg } from '../../svgs/GallerySvg/GalleryFillSvg';
import { ServicesFillSvg } from '../../svgs/ServicesSvg/ServicesFillSvg';
import { ServicesSvg } from '../../svgs/ServicesSvg/ServicesSvg';
import NavItemDesktop from './NavItemDesktop';

const Navbar = () => {
  const pathname = usePathname();
  const navbar = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesListOpen, setMobileServicesListOpen] = useState(false);
  const [servicesListOpen, setServicesListOpen] = useState(false);

  const navbarControls = useAnimation();
  const servicesListControls = useAnimation();
  const desktopServicesListControls = useAnimation();

  const [otherLinkHovered, setOtherLinkHovered] = useState(false);

  const navbarVariants = useMemo(() => {
    return {
      navbar: {
        open: { x: 0, width: '23rem', transition: { ease: 'easeOut', duration: 0.15 } },
        closed: { x: '100%', width: '23rem', transition: { ease: 'easeOut', duration: 0.15 } },
        dropdownOpen: { x: 0, width: '26.5rem', transition: { ease: 'easeOut', duration: 0.15 } },
      },
      servicesList: {
        open: { maxHeight: '300px', padding: '1rem 3rem 0 0', transition: { ease: 'easeOut', duration: 0.15 } },
        closed: { maxHeight: '0px', padding: '0', transition: { ease: 'easeOut', duration: 0.15 } },
      },
      desktopServicesList: {
        open: { maxHeight: '300px', transition: { ease: 'easeInOut', duration: 0.25 } },
        closed: { maxHeight: 0, transition: { ease: 'easeInOut', duration: 0.15 } },
      },
    };
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbar.current && !navbar.current.contains(event.target)) {
        setIsOpen(false);
        setMobileServicesListOpen(false);
        setServicesListOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileServicesListOpen(false);
    setServicesListOpen(false);
    setOtherLinkHovered(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      navbarControls.start('open');
    } else {
      navbarControls.start('closed');
      setMobileServicesListOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (mobileServicesListOpen) {
      servicesListControls.start('open');
      navbarControls.start('dropdownOpen');
    } else {
      servicesListControls.start('closed');
      if (isOpen) {
        navbarControls.start('open');
      }
    }
  }, [mobileServicesListOpen]);

  useEffect(() => {
    function handleTouchStart(event) {
      if (servicesListOpen && event.target && !event.target.closest(styles.linkCont)) {
        setServicesListOpen(false);
        desktopServicesListControls.start('closed');
        setOtherLinkHovered(false);
      }
    }

    if (servicesListOpen) {
      desktopServicesListControls.start('open');
      document.addEventListener('touchstart', handleTouchStart);
    } else {
      document.removeEventListener('touchstart', handleTouchStart);
    }
  }, [servicesListOpen]);

  const navbarData = {
    links: [
      {
        href: '/',
        name: 'Home',
        dropdown: false,
        mobileStyle: { padding: '0.75em 1.6em' },
        icon: pathname.endsWith('/') ? (
          <HomeFillSvg className={styles['svg--active']} style={{ height: '1.15em', width: '1.4em' }} />
        ) : (
          <HomeSvg className={styles.svg} style={{ height: '1.15em', width: '1.4em' }} />
        ),
      },
      {
        href: '/menu',
        name: 'Menu',
        dropdown: false,
        icon: pathname.endsWith('/menu') ? (
          <MenuFillSvg className={styles['svg--active']} style={{ height: '1.75em', width: '1.55em' }} />
        ) : (
          <MenuSvg className={styles.svg} style={{ height: '1.75em', width: '1.55em' }} />
        ),
      },
      {
        href: ['/wedding-catering', '/social-gatherings', '/corporate-catering'],
        name: 'Services',
        dropdown: true,
        icon:
          pathname.endsWith('/wedding-catering') ||
          pathname.endsWith('/social-gatherings') ||
          pathname.endsWith('/corporate-catering') ? (
            <ServicesFillSvg
              className={styles.svg + ' ' + styles['svg--active']}
              style={{ height: '1.3em', width: '1.6em' }}
            />
          ) : (
            <ServicesSvg className={styles.svg} style={{ height: '1.3em', width: '1.6em' }} />
          ),
        desktopDropdownOpen: servicesListOpen,
        desktopDropdownOnClick: setServicesListOpen,
        mobileDropdownOpen: mobileServicesListOpen,
        mobileDropdownOnClick: () => setMobileServicesListOpen(!mobileServicesListOpen),
        mobileDropdownList: (
          <AnimatePresence>
            {mobileServicesListOpen && (
              <motion.div
                className={styles.subListWrapper}
                key='services-sub-nav-list'
                initial='closed'
                variants={navbarVariants.servicesList}
                animate={servicesListControls}
                exit='closed'
              >
                <ul className={styles.subList}>
                  <li className={styles.subLinkCont}>
                    <Link className={styles.subLink} href='/wedding-catering'>
                      <span>Wedding Catering</span>
                    </Link>
                  </li>
                  <li className={styles.subLinkCont}>
                    <Link className={styles.subLink} href='/corporate-catering'>
                      <span>Corporate Catering</span>
                    </Link>
                  </li>
                  <li className={styles.subLinkCont}>
                    <Link className={styles.subLink} href='/social-gatherings'>
                      <span>Social Gatherings</span>
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        ),
        desktopDropdownList: (
          <AnimatePresence>
            {servicesListOpen && (
              <motion.div
                className={styles.dropdownListWrapper}
                key='desktop-services'
                initial='closed'
                variants={navbarVariants.desktopServicesList}
                animate={desktopServicesListControls}
                exit='closed'
                onMouseLeave={() => setServicesListOpen(false)}
              >
                <ul className={styles.dropdownList}>
                  <li className={styles.dropdownLinkCont}>
                    <Link className={styles.dropdownLink} href='/wedding-catering'>
                      <div className={styles.icon}>
                        <Image
                          src='/assets/svgs/wedding-catering/wedding-catering-white.svg'
                          layout='responsive'
                          height={100}
                          width={100}
                        />
                      </div>
                      <span>Wedding Catering</span>
                    </Link>
                  </li>
                  <li className={styles.dropdownLinkCont}>
                    <Link className={styles.dropdownLink} href='/corporate-catering'>
                      <div className={styles.icon}>
                        <Image src='/assets/svgs/tie/tie-white.svg' layout='responsive' height={100} width={100} />
                      </div>
                      <span>Corporate Catering</span>
                    </Link>
                  </li>
                  <li className={styles.dropdownLinkCont}>
                    <Link className={styles.dropdownLink} href='/social-gatherings'>
                      <div className={styles.icon}>
                        <Image
                          src='/assets/svgs/social-gatherings/social-gatherings-white.svg'
                          layout='responsive'
                          height={100}
                          width={100}
                        />
                      </div>
                      <span>Social Gatherings</span>
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        ),
      },
      {
        href: '/gallery',
        name: 'Gallery',
        dropdown: false,
        icon: pathname.endsWith('/gallery') ? (
          <GalleryFillSvg
            className={styles['svg--active']}
            style={{ height: '1.75em', width: '1.3em', marginLeft: '0.15em' }}
          />
        ) : (
          <GallerySvg className={styles.svg} style={{ height: '1.75em', width: '1.3em', marginLeft: '0.15em' }} />
        ),
      },
      {
        href: '/contact',
        name: 'Contact',
        dropdown: false,
        mobileStyle: { marginTop: 'auto' },
        desktopStyle: { marginLeft: 'auto', '--left': '30%' },
        icon: pathname.endsWith('/contact') ? (
          <ContactFillSvg className={styles['svg--active']} style={{ height: '1.75em', width: '1.5em' }} />
        ) : (
          <ContactSvg className={styles.svg} style={{ height: '1.75em', width: '1.55em' }} />
        ),
        desktopIcon: <ContactSvg className={styles.svg} style={{ height: '1.65em', width: '1.56em' }} />,
      },
      {
        href: '/about',
        name: 'About Us',
        dropdown: false,
        mobileStyle: { marginBottom: '1em' },
        desktopStyle: { '--left': '25%' },
        icon: pathname.endsWith('/about') ? (
          <AboutFillSvg
            className={styles['svg--active']}
            style={{ height: '1.65em', width: '1.2em', margin: '0 0.15em' }}
          />
        ) : (
          <AboutSvg className={styles.svg} style={{ height: '1.65em', width: '1.2em', margin: '0 0.15em' }} />
        ),
        desktopIcon: <AboutSvg className={styles.svg} style={{ height: '1.25em', width: '1.25em' }} />,
      },
    ],
  };

  return (
    <nav
      className={styles.navbar}
      ref={navbar}
      onMouseLeave={() => {
        setOtherLinkHovered(false);
        setServicesListOpen(false);
      }}
    >
      <Link className={styles.logo} href='/'>
        <Image src='/assets/images/logo.webp' alt='Bigg Bites Catering' layout='responsive' width={250} height={120} />
      </Link>
      <MenuButton setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)}></div>}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.ul
              className={styles.list}
              key='nav-list'
              initial={'closed'}
              variants={navbarVariants.navbar}
              animate={navbarControls}
              exit={'closed'}
            >
              {navbarData.links.map((link) => (
                <>
                  {!link.dropdown ? (
                    <NavItem
                      key={link.href}
                      href={link.href}
                      isActive={pathname.endsWith(link.href)}
                      icon={link.icon}
                      style={link.mobileStyle}
                      text={link.name}
                    />
                  ) : (
                    <NavItem
                      key={link.href}
                      href={link.href}
                      isActive={link.href.some((currPath) => pathname.endsWith(currPath))}
                      dropdownIconAfter={link.icon}
                      style={link.mobileStyle}
                      dropdownLinkText={link.name}
                      dropdown={true}
                      dropdownOpen={link.mobileDropdownOpen}
                      dropdownOnClick={link.mobileDropdownOnClick}
                      dropdownList={link.mobileDropdownList}
                    />
                  )}
                </>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
      <ul className={styles.listDesktop}>
        {navbarData.links.map((link) => (
          <>
            {!link.dropdown ? (
              <NavItemDesktop
                key={link.href}
                href={link.href}
                isActive={pathname.endsWith(link.href)}
                text={link.name}
                style={link.desktopStyle}
                otherLinkHovered={otherLinkHovered}
                setOtherLinkHovered={setOtherLinkHovered}
                icon={link.desktopIcon}
              />
            ) : (
              <NavItemDesktop
                key={link.href}
                href={link.href}
                isActive={link.href.some((currPath) => pathname.endsWith(currPath))}
                style={link.desktopStyle}
                text={link.name}
                otherLinkHovered={otherLinkHovered}
                setOtherLinkHovered={setOtherLinkHovered}
                dropdownLinkText={link.name}
                dropdown={true}
                dropdownOpen={link.desktopDropdownOpen}
                setDropdownOpen={link.desktopDropdownOnClick}
                dropdownList={link.desktopDropdownList}
              />
            )}
          </>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
