import css from './RightSideBar.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

import { selectSummary, date } from 'redux/products/products-selectors';

export const RightSideBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const summary = useSelector(selectSummary);

  // const notAllowedProducts = useSelector(
  //   state => state.auth.user.userData.notAllowedProducts
  // );
  // console.log(notAllowedProducts);
  return (
    <>
      {!isLoggedIn && <div className={css.pictures}></div>}
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
                      {summary.kcalLeft} kcal
                    </td>
                  </tr>
                  <tr>
                    <td className={css.tableCellLeft}>Consumed</td>
                    <td className={css.tableCellRight}>
                      {summary.kcalConsumed} kcal
                    </td>
                  </tr>
                  <tr>
                    <td className={css.tableCellLeft}>Daily rate</td>
                    <td className={css.tableCellRight}>
                      {summary.dailyRate} kcal
                    </td>
                  </tr>
                  <tr>
                    <td className={css.tableCellLeft}>n% of normal</td>
                    <td className={css.tableCellRight}>
                      {summary.percentsOfDailyRate} kcal
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* <div className={css.dietSection}>
              <h2 className={css.headerTwo}>Food not recommended</h2>
              <p className={css.textDiet}>Your diet will be displayed here</p>
            </div> */}
            <div className={css.food}>
              <h3 className={css.title_sidebar}>Food not recommended</h3>
              {/* {notAllowedProducts?.length > 0 && (
                <TextFieldDefault
                  handleChange={filterRecommendedFood}
                  {...field.filter}
                />
              )} */}
              {/* {notAllowedProducts?.length > 0 && (
                <>
                  <ol className={css.menuGroupList}>
                    {notAllowedProducts.map(el => (
                      <li className={css.menuGroupItems}>{el}</li>
                    ))}
                  </ol>
                </>
              )}
              {notAllowedProducts?.length === 0 && (
                <p className={css.text_sidebar_food}>
                  Your diet will be displayed here.
                </p>
              )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
