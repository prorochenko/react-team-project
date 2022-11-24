import { FiX } from 'react-icons/fi';
import scss from './DiaryProductsListItem.module.scss';

export const DiaryProductsListItem = () => {
  return (
    <>
      <li className={scss.productsListItem}>
        <div className={scss.productsName}>Eggplant</div>
        <div className={scss.productsGramm}>100 g</div>
        <div className={scss.productsKcal}>
          320 <span className={scss.productsKcal__text}>kcal</span>
        </div>
        <button className={scss.productsBtn} type="button">
          <FiX className={scss.productsIcon} />
        </button>
      </li>
      <li className={scss.productsListItem}>
        <div className={scss.productsName}>Eggplant</div>
        <div className={scss.productsGramm}>100 g</div>
        <div className={scss.productsKcal}>
          320<span className={scss.productsKcal__text}>kcal</span>
        </div>
        <button className={scss.productsBtn} type="button">
          <FiX className={scss.productsIcon} />
        </button>
      </li>
      <li className={scss.productsListItem}>
        <div className={scss.productsName}>Eggplant</div>
        <div className={scss.productsGramm}>100 g</div>
        <div className={scss.productsKcal}>
          320 <span className={scss.productsKcal__text}>kcal</span>
        </div>
        <button className={scss.productsBtn} type="button">
          <FiX className={scss.productsIcon} />
        </button>
      </li>
      <li className={scss.productsListItem}>
        <div className={scss.productsName}>Eggplant</div>
        <div className={scss.productsGramm}>100 g</div>
        <div className={scss.productsKcal}>
          320 <span className={scss.productsKcal__text}>kcal</span>
        </div>
        <button className={scss.productsBtn} type="button">
          <FiX className={scss.productsIcon} />
        </button>
      </li>
      <li className={scss.productsListItem}>
        <div className={scss.productsName}>Eggplant</div>
        <div className={scss.productsGramm}>100 g</div>
        <div className={scss.productsKcal}>
          320 <span className={scss.productsKcal__text}>kcal</span>
        </div>
        <button className={scss.productsBtn} type="button">
          <FiX className={scss.productsIcon} />
        </button>
      </li>
      <li className={scss.productsListItem}>
        <div className={scss.productsName}>Eggplant</div>
        <div className={scss.productsGramm}>100 g</div>
        <div className={scss.productsKcal}>
          320 <span className={scss.productsKcal__text}>kcal</span>
        </div>
        <button className={scss.productsBtn} type="button">
          <FiX className={scss.productsIcon} />
        </button>
      </li>
    </>
  );
};
