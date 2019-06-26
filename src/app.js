import React from 'react';
import RedemptionReport from './component/redemptionReport';
import ActivateVoucher from './activateVoucher';
import VerifyVoucher from './verifyVoucher';
import VerifyVoucherTwo from './verifyVoucherTwo';
import RedeemVoucher from './redeemVoucher';
import RedeemVoucherTwo from './redeemVoucherTwo';
import CheckVoucherBalance from './checkVoucherBalance';
import ActivateVoucherTwo from './activateVoucherTwo';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

export default function App() { 
        const useStyles = makeStyles(theme => ({
            root: {
              flexGrow: 1,
            },
          }));
          
          const classes = useStyles();
        return (
            <div>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <ActivateVoucher/>
                        <ActivateVoucherTwo/>
                        <VerifyVoucher/>
                        <VerifyVoucherTwo/>
                        <RedeemVoucher/>
                        <RedeemVoucherTwo/>
                        <CheckVoucherBalance/>
                    </Toolbar>
                </AppBar>
            </div>
            
                
                <RedemptionReport/>
            </div>
         );
    }
