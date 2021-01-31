import React from 'react';

const Footer = () => {
  let footerYear = 2020;
  const currentYear = new Date().getFullYear();

  if (footerYear !== currentYear) {
    footerYear = `${footerYear} - ${currentYear}`;
  }

  return (
    <footer className='footer'>
      <span className='footer__sign'>&copy;</span>{' '}
      <span className='footer__year'>{footerYear}</span>{' '}
      <a
        href='https://github.com/ermondel'
        target='_blank'
        rel='noreferrer'
        title='All rights reserved | created by Serhii (ermondel)'
        className='footer__link'
      >
        Serhii
      </a>
    </footer>
  );
};

export default Footer;
