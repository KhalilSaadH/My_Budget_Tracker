import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: "10",
    },
  },
}));
