import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 950,
    },
    button: {
        margin: theme.spacing(1),
      },
      spacer: {
        flex: '1 1 100%',
      },
    row: {
        height: 60
    }
  }));


const RedemptionReport = () => {
    const classes = useStyles();
    return (
            <Container fixed>
                <Paper className={clsx(classes.table, classes.root)}>
                <Toolbar>
                    <Typography  display='inline'>
                        Redemption Report
                    </Typography>
                    <div className={classes.spacer} />
                    <Button variant="outlined" color="secondary" className={classes.button}>
                        Secondary
                    </Button>
                </Toolbar>

            <Table className={classes.table}>
                <TableHead style={{backgroundColor: 'black'}}>
                    <TableRow className={classes.row}>
                        <TableCell style={{color: 'white'}}>Amount Used</TableCell>
                        <TableCell style={{color: 'white'}}>Vendor</TableCell>
                        <TableCell style={{color: 'white'}}>Usage Point</TableCell>
                        <TableCell style={{color: 'white'}}>Store</TableCell>
                        <TableCell style={{color: 'white'}}>Date/Time</TableCell>
                    </TableRow>   
                </TableHead>
                <TableBody>
                <TableRow className={classes.row}>
                        <TableCell>150,000</TableCell>
                        <TableCell>Spar</TableCell>
                        <TableCell>Web</TableCell>
                        <TableCell>Spar/Lekki</TableCell>
                        <TableCell>16/03/2019-03:46:57PM</TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                        <TableCell>20,000</TableCell>
                        <TableCell>Spar</TableCell>
                        <TableCell>In Store</TableCell>
                        <TableCell>Spar/Lekki</TableCell>
                        <TableCell>16/03/2019-03:46:57PM</TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                        <TableCell>250,000</TableCell>
                        <TableCell>Spar</TableCell>
                        <TableCell>Redemption Links</TableCell>
                        <TableCell>Spar VI</TableCell>
                        <TableCell>16/03/2019-03:46:57PM</TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                        <TableCell>150,000</TableCell>
                        <TableCell>SureGift Generic</TableCell>
                        <TableCell>POS</TableCell>
                        <TableCell>Spar, Ceddi Plaza, Abuja</TableCell>
                        <TableCell>16/03/2019-03:46:57PM</TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                        <TableCell>20,000</TableCell>
                        <TableCell>Spar</TableCell>
                        <TableCell>Web</TableCell>
                        <TableCell>Spar, Yaba</TableCell>
                        <TableCell>16/03/2019-03:46:57PM</TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                        <TableCell>250,000</TableCell>
                        <TableCell>Spar</TableCell>
                        <TableCell>Web</TableCell>
                        <TableCell>Spar, VI</TableCell>
                        <TableCell>16/03/2019-03:46:57PM</TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                        <TableCell>150,000</TableCell>
                        <TableCell>SureGift Generic</TableCell>
                        <TableCell>POS</TableCell>
                        <TableCell>Spar, Ceddi Plaza, Abuja</TableCell>
                        <TableCell>16/03/2019-03:46:57PM</TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                        <TableCell>20,000</TableCell>
                        <TableCell>SureGift Generic</TableCell>
                        <TableCell>POS</TableCell>
                        <TableCell>Spar, VI</TableCell>
                        <TableCell>16/03/2019-03:46:57PM</TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                        <TableCell>250,000</TableCell>
                        <TableCell>Spar</TableCell>
                        <TableCell>POS</TableCell>
                        <TableCell>Spar, VI</TableCell>
                        <TableCell>16/03/2019-03:46:57PM</TableCell>
                    </TableRow>
                    <TableRow className={classes.row}>
                        <TableCell>250,000</TableCell>
                        <TableCell>Spar</TableCell>
                        <TableCell>Web</TableCell>
                        <TableCell>Spar, Ceddi Plaza, Abuja</TableCell>
                        <TableCell>16/03/2019-03:46:57PM</TableCell>
                    </TableRow>
                </TableBody>
                <TablePagination
                            
                />
                
            
            </Table>
        </Paper>
            </Container>
     );
}
 
export default RedemptionReport;