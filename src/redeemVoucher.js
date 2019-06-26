import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Done from '@material-ui/icons/Done';
import Clear from '@material-ui/icons/Clear';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    btn: {
      width: '150px',
      marginRight: '150px',
      paddingTop: '13px',
      paddingBottom: '13px'
    },
    margin: {
      margin: theme.spacing(1),
    },
    icon: {
        fontSize: "50px",
        fontWeight: 'bolder', 
        border: '1px solid green', 
        borderRadius: '20px',
        borderWidth: '2px', 
        textAlign: 'center',
        marginLeft: '170px',
        marginTop: '40px',
    }
  }));

export default function RedeemVoucher() {
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
      Redeem Voucher
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
            <div style={{ color: 'black', marginTop: '8px', fontFamily: 'calibri'}}variant="subtitle1"> 
            
            <span style={{ position: 'absolute',  left:'37%'}}>Redeem Voucher</span>
            <span style={{position: 'absolute',  left:'90%', fontSize: '10px'}}><Clear onClick={handleClose} style={{fontSize: '20px', color:'red', border: '1px solid red', borderRadius: '10px', cursor: 'pointer'}}/></span>
            </div>
        </div>

        <DialogContent>
            <Done htmlColor="green" className={classes.icon} />
            <Typography style={{marginBottom: '3px', marginTop: '15px', marginLeft: '60px'}} variant="h5">
            Successfully Redeemed
            </Typography>
            <div  style={{marginBottom: '3px', marginTop: '15px', fontSize: '30px', marginLeft: '180px', color: 'green' }}>
                <span style={{fontSize: '20px', position: 'absolute', top: '60%', left:'26%', color: 'black'}}>Amount: </span>N75,000
            </div>       
        </DialogContent>
        <DialogActions>
            <Button variant="contained"  className={classes.btn} color="secondary" >
                Okay
            </Button>
        </DialogActions>
        <div style={{height: '30px', display: 'block'}}></div>
      </Dialog>
    </div>
  );
}
