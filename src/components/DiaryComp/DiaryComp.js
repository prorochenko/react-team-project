import DiaryAddProductForm from './DiaryAddProductForm/DiaryAddProductForm';
import DiaryDateCalendar from './DiaryDateCalendar/DiaryDateCalendar';
import DiaryProductsList from './DiaryProductsList/DiaryProductsList';
import { useEffect } from 'react';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DiaryComp = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
      return;
    }
  }, [navigate, isLoggedIn]);

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
