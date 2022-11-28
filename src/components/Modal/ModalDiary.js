import DiaryAddProductForm from 'components/DiaryComp/DiaryAddProductForm/DiaryAddProductForm';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from 'redux/auth/authSlice';
import ModalUniversal from './ModaUniversal';

const ModalDiary = () => {
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    dispatch(toggle(false));
  }, [dispatch]);

  return (
    <ModalUniversal>
      <div>Hello</div>
      <DiaryAddProductForm />
    </ModalUniversal>
  );
};

export default ModalDiary;
