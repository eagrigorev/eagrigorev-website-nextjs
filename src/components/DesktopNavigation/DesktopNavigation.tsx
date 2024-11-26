/* Global */
import React from 'react';

/* Components */
import Link from 'next/link';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

/* Data */
import headerNavigation from '@/data/headerNavigation.json';

/* Style */
import styles from './DesktopNavigation.module.scss';

/* Utils */
import { NavigationItem } from '@/utils/types/common';

const DesktopNavigation: React.FunctionComponent<{}> = () => {
  return (
    <div className={styles['wrapper']}>
      <Link className="header__logo" href={'/'}>
        Evgenii Grigorev
      </Link>
      <div className={styles['items__wrapper']}>
        <ul className={`header__links ${styles['items']}`}>
          {headerNavigation.map(
            (item: NavigationItem, index: number): React.JSX.Element => (
              <li key={index}>
                <Link className="opacity--decrease" href={item.url}>
                  {item.title}
                </Link>
              </li>
            )
          )}
        </ul>
        <SocialIcons showFollowText={true} />
      </div>
    </div>
  );
};

export default DesktopNavigation;
