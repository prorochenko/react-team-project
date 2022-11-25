import { Dna } from 'react-loader-spinner';
import React from 'react';
import ContentLoader from 'react-content-loader';

import css from './Loader.module.scss';

// export default function BigLoader() {
//   return (
//     <div className={css.loader}>
//       <Dna
//         visible={true}
//         height="600"
//         width="600"
//         ariaLabel="dna-loading"
//         wrapperStyle={{}}
//         wrapperClass="dna-wrapper"
//       />
//     </div>
//   );
// }

const BigLoader = props => (
  <ContentLoader
    className={css.loader}
    speed={2}
    width={476}
    height={124}
    viewBox="0 0 476 124"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="21" cy="24" r="20" />
    <rect x="54" y="5" rx="0" ry="0" width="566" height="37" />
    <rect x="3" y="58" rx="0" ry="0" width="265" height="164" />
    <rect x="279" y="57" rx="0" ry="0" width="265" height="92" />
  </ContentLoader>
);

export default BigLoader;
