import styles from './SocialIcons.module.scss';
import Link from 'next/link';

const SocialIcons = () => {
  return (
    <ul className={styles['wrapper']}>
      <li>
        <Link
          className="link--lighter transition--color"
          href={'https://www.instagram.com/eagrigorev/'}
        >
          Ig.
        </Link>
      </li>
      <li>
        <Link
          className="link--lighter transition--color"
          href={'https://github.com/eagrigorev/'}
        >
          Gh.
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
