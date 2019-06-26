import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  
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

export default function CheckVoucherBalance() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
      Check Voucher Balance
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        fullWidth="true"
        maxWidth="xs"
      >
        <div style={{backgroundColor: 'grey', display: 'block', height: '40px'}}>
            <Typography style={{ color: 'black',textAlign:"center", marginTop: '8px', fontFamily: 'calibri'}}variant="subtitle1">{"Check Voucher Balance"}
            </Typography>
        </div>

        <DialogContent>
            <Typography style={{marginBottom: '3px', marginTop: '15px'}} variant="subtitle1">
            Voucher Code
            </Typography>
            <TextField
                    id="outlined-email-input"
                    label="Enter the Voucher code"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                />    
        </DialogContent>
        <DialogActions>
            <Button variant="contained"  className={classes.btn} color="secondary">
                Check Balance
            </Button>
        </DialogActions>
        <div style={{height: '30px', display: 'block'}}></div>
      </Dialog>
    </div>
  );
}
