import css from './RightSideBar.module.scss';

export const RightSideBar = () => {
  return (
    <div className={css.box}>
      <div className={css.container}>
        <div className={css.summarySection}>
          <h3 className={css.header}>Summary for 07/07/2020</h3>
          <table className={css.table}>
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
          </table>
        </div>

        <div className={css.dietSection}>
          <h2 className={css.headerTwo}>Food not recommended</h2>
          <p className={css.textDiet}>Your diet will be displayed here</p>
        </div>
      </div>
    </div>
  );
};
