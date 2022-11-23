import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from './DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductsList from './DiaryProductsList/DiaryProductsList';

const DiaryComp = () => {
  return (
    <div>
      Diary Component
      <DiaryDateCalendar />
      <DiaryAddProductForm />
      <DiaryProductsList />
    </div>
  );
};
export default DiaryComp;
