import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'matheusfelipe.me',
    href: 'https://matheusfelipe.me',
  },
  {
    social: 'email',
    link: 'me@matheusfelipe.me',
    href: 'mailto:me@matheusfelipe.me',
  },
  {
    social: 'github',
    link: 'MatheusFelipeMarinho',
    href: 'https://github.com/MatheusFelipeMarinho',
  },
  {
    social: 'linkedin',
    link: 'Matheus Felipe Marinho',
    href: 'https://www.linkedin.com/in/matheus-marinho-a3b86780/',
  },
  {
    social: 'twitter',
    link: '@matheus.carmo',
    href: 'https://www.twitter.com/matheus.carmo1989',
  },
  {
    social: 'instagram',
    link: 'matheusfelipe.1',
    href: 'https://www.instagram.com/matheusfelipe.1/',
  },
  {
    social: 'telegram',
    link: 'Matheus',
    href: 'https://t.me/iamnitinr',
  },
  {
    social: 'codepen',
    link: 'matheusfelipe',
    href: 'https://codepen.io/matheus.carmo1989',
  },
  {
    social: 'codesandbox',
    link: 'matheusfelipe',
    href: 'https://codesandbox.io/u/matheus.carmo1989',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
