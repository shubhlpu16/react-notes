/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import  './Header.css';
// import Link from '../Link';
// import Navigation from '../Navigation';
// import logoUrl from './logo-small.png';
// import logoUrl2x from './logo-small@2x.png';

export default function Header() {
  return (
    <div className="root">
      {/* <Navigation />
        <Link className={s.brand} to="/">
          <img
            src={logoUrl}
            srcSet={`${logoUrl2x} 2x`}
            width="38"
            height="38"
            alt="React"
          />
          <span className={s.brandTxt}>Your Company</span>
        </Link> */}

      <div className="bannerTitle">My Notes</div>
    </div>
  );
}
