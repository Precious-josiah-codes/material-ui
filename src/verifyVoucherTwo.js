import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
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
      width: '140px',
      marginRight: '10px',
      marginTop: '-89px',
      paddingTop: '11px',
      paddingBottom: '11px'
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function VerifyVoucherTwo() {
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
      Verify Voucher Two
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
            <Typography style={{ color: 'black',textAlign:"center", marginTop: '8px', fontFamily: 'calibri'}}variant="subtitle1">{"Verify Voucher Two"}
            </Typography>
        </div>

        <DialogContent>
            <Typography style={{marginBottom: '3px', marginTop: '15px', color: 'gray' }} variant="body2">
            Voucher Code
            </Typography>
            <Typography style={{marginBottom: '3px', marginTop: '4px', color: 'black' }} variant="h6">
            9876543456789
            </Typography>

            <Typography id="alert-dialog-slide-description" style={{marginBottom: '3px', marginTop: '15px', color: 'gray' }} variant="body2">
            Value
            </Typography>
            <Typography style={{marginBottom: '3px', marginTop: '4px', color: 'black' }} variant="h6">
            N50,000
            </Typography>

            <Typography style={{marginBottom: '3px', marginTop: '15px', color: 'gray' }} variant="body2">
            Current Balance
            </Typography>
            <Typography style={{marginBottom: '3px', marginTop: '4px', color: 'black' }} variant="h6">
            N20,000
            </Typography>

            <Typography style={{marginBottom: '3px', marginTop: '15px', color: 'gray' }} variant="body2">
            Voucher Type
            </Typography>
            <Typography style={{marginBottom: '3px', marginTop: '4px', color: 'black' }} variant="h6">
            SureGift Generic
            </Typography>

            <Typography style={{marginBottom: '3px', marginTop: '15px', color: 'gray' }} variant="body2">
            Expiry
            </Typography>
            <Typography style={{marginBottom: '3px', marginTop: '4px', color: 'black' }} variant="h6">
            30/12/19
            </Typography>
                
        </DialogContent>
        <DialogActions>
            <Button variant="contained"  className={classes.btn}  color="secondary">
                Activate
            </Button>
        </DialogActions>
        <div style={{height: '30px', display: 'block'}}></div>
      </Dialog>
    </div>
  );
}
