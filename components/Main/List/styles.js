import { makeStyles } from '@mui/styles';
import { red, green } from '@mui/material/colors';

export default makeStyles(() => ({
  avatarIncome: {
    color: '#fff',
    backgroundColor: green[500],
  },
  avatarExpense: {
    color: '#fff',
    backgroundColor: red[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));
