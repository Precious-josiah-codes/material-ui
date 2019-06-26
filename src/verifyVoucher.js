import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapInput = withStyles(theme => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '17px 26px 17px 26px',
      width: '335px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    btn: {
      width: '400px',
      marginRight: '10px',
      paddingTop: '13px',
      paddingBottom: '13px'
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function VerifyVoucher() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const [age, setAge] = React.useState('');
        const handleChange = event => {
        setAge(event.target.value);
};
  return (
    

    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Verify Voucher
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth="true"
        maxWidth="xs"
      >
        <div style={{backgroundColor: 'grey', display: 'block', height: '40px'}}>
            <Typography style={{ color: 'black',textAlign:"center", marginTop: '8px', fontFamily: 'calibri'}}variant="subtitle1">{"Verify Voucher"}
            </Typography>
        </div>

        <DialogContent>
            <Typography id="alert-dialog-slide-description" style={{marginBottom: '3px', marginTop: '15px'}} variant="subtitle1">
            Serial Number
            </Typography>
            <TextField
                    id="outlined-email-input"
                    label="Enter the Voucher code"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                />
            <Typography id="alert-dialog-slide-description" style={{marginBottom: '5px', marginTop: '30px'}} variant="subtitle1">
            Select Store
            </Typography>
            <FormControl className={classes.margin}>
                <NativeSelect
                value={age}
                onChange={handleChange}
                input={<BootstrapInput name="" id="age-customized-native-simple" />}
                >
                <option value="" />
                <option value={10}>Spar, Lekki</option>
                <option value={20}>Lekki</option>
                <option value={30}>Spar</option>
                </NativeSelect>
            </FormControl>
                
        </DialogContent>
        <DialogActions>
            <Button variant="contained"  className={classes.btn} color="secondary">
                Activate
            </Button>
        </DialogActions>
        <div style={{height: '30px', display: 'block'}}></div>
      </Dialog>
    </div>
  );
}
