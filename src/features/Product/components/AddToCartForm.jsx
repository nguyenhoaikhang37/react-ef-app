import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../../components/FormFields/InputField';
import { Box, Button } from '@material-ui/core';
import QuantityField from '../../../components/FormFields/QuantityField';
import { StorageKeys } from '../../../constants';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

const schema = yup.object().shape({
  quantity: yup
    .number()
    .required('Vui lòng nhập số lượng')
    .min(1, 'Số lượng nhỏ nhất là 1')
    .typeError('Vui lòng nhập số vào'),
});

const AddToCartForm = ({ onSubmit = null }) => {
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    // reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const handleSubmit = async (values) => {
    const user = localStorage.getItem(StorageKeys.TOKEN);
    if (!user) {
      history.push('/');
      toast.info('Bạn phải đăng nhập trước khi mua hàng');
      return;
    }
    await onSubmit?.(values);
  };

  return (
    <Box component="form" onSubmit={form.handleSubmit(handleSubmit)}>
      <QuantityField name="quantity" label="Số lượng" form={form} />
      <Button type="submit" variant="contained" color="secondary" style={{ width: '150px' }} size="large">
        Mua
      </Button>
    </Box>
  );
};

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddToCartForm;
