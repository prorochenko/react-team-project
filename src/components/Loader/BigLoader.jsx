// import { Dna } from 'react-loader-spinner';
import React from 'react';
import ContentLoader from 'react-content-loader';

// import css from './Loader.module.scss';

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
    speed={2}
    width={1280}
    height={800}
    viewBox="0 0 1280 800"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="21" cy="24" r="20" />
    <rect x="54" y="5" rx="0" ry="0" width="1280" height="37" />
    <rect x="40" y="58" rx="0" ry="0" width="600" height="500" />
    <rect x="660" y="58" rx="0" ry="0" width="700" height="500" />
  </ContentLoader>
);

export default BigLoader;
