import css from './RightSideBar.module.scss';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import {
  selectIsLoggedIn,
  selectNotAllowedProducts,
} from 'redux/auth/selectors';
import { selectSummary } from 'redux/products/products-selectors';

export const RightSideBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const summary = useSelector(selectSummary);
  const notAllowedProducts = useSelector(selectNotAllowedProducts);

  return (
    <>
      {!isLoggedIn && (
        <>
          <div className={css.pictures}>
            <div id="parallax" className={css.background}>
              <div id="parallaxbigLeaf" className={css.backgroundbigLeaf}></div>
              <div id="parallaxTop" className={css.backgroundTop}></div>
              <div id="parallaxRight" className={css.backgroundRight}></div>
              <div id="parallaxBottom" className={css.backgroundBottom}></div>

              <div
                id="parallaxStrawberry"
                className={css.backgroundStrawberry}
              ></div>
            </div>
          </div>
        </>
      )}
      {isLoggedIn && (
        <div className={css.box}>
          <div className={css.container}>
            <div className={css.summarySection}>
              <h3 className={css.header}>
                Summary for {summary.date ? summary.date : 'day'}
              </h3>
              <table className={css.table}>
                <tbody>
                  <tr>
                    <td className={css.tableCellLeft}>Left</td>
                    <td className={css.tableCellRight}>
                      {summary.kcalLeft ? Math.floor(summary.kcalLeft) : '000'}{' '}
                      kcal
                    </td>
                  </tr>
                  <tr>
                    <td className={css.tableCellLeft}>Consumed</td>
                    <td className={css.tableCellRight}>
                      {summary.kcalConsumed
                        ? Math.floor(summary.kcalConsumed)
                        : '000'}{' '}
                      kcal
                    </td>
                  </tr>
                  <tr>
                    <td className={css.tableCellLeft}>Daily rate</td>
                    <td className={css.tableCellRight}>
                      {summary.dailyRate
                        ? Math.floor(summary.dailyRate)
                        : '000'}{' '}
                      kcal
                    </td>
                  </tr>
                  <tr>
                    <td className={css.tableCellLeft}>n% of normal</td>
                    <td className={css.tableCellRight}>
                      {summary.percentsOfDailyRate
                        ? Math.floor(summary.percentsOfDailyRate)
                        : '000'}{' '}
                      kcal
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={css.food}>
              <h3 className={css.title_sidebar}>Food not recommended</h3>

              {notAllowedProducts?.length > 0 && (
                <>
                  <ol className={css.menuGroupList}>
                    {notAllowedProducts?.map(el => (
                      <li key={nanoid()} className={css.menuGroupItems}>
                        {el}
                      </li>
                    ))}
                  </ol>
                </>
              )}
              {notAllowedProducts?.length === 0 && (
                <p className={css.text_sidebar_food}>
                  Your diet will be displayed here.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
