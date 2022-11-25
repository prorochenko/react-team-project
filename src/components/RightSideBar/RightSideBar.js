import css from './RightSideBar.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectorTest } from 'redux/Summary/summarySelectors';

export const RightSideBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const test = useSelector(selectorTest);
  console.log(test);
  return (
    <>
      {!isLoggedIn && <div className={css.pictures}></div>}
      {isLoggedIn && (
        <div className={css.box}>
          <div className={css.container}>
            <div className={css.summarySection}>
              <h3 className={css.header}>Summary for 11/23/2022</h3>
              <table className={css.table}>
                <tbody>
                  <tr>
                    <td className={css.tableCellLeft}>Left</td>
                    <td className={css.tableCellRight}>000 kcal</td>
                  </tr>
                  <tr>
                    <td className={css.tableCellLeft}>Consumed</td>
                    <td className={css.tableCellRight}>000 kcal</td>
                  </tr>
                  <tr>
                    <td className={css.tableCellLeft}>Daily rate</td>
                    <td className={css.tableCellRight}>000 kcal</td>
                  </tr>
                  <tr>
                    <td className={css.tableCellLeft}>n% of normal</td>
                    <td className={css.tableCellRight}>000 kcal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={css.dietSection}>
              <h2 className={css.headerTwo}>Food not recommended</h2>
              <p className={css.textDiet}>Your diet will be displayed here</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
