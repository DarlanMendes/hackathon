import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
type Props = {
    handleClickOpen: () => void;
    menssage: string;
    handleClickClose: () => void;
    handleClickConfirm: () => void;
    open: boolean;
    titulo: string;
};
export default function AlertDialog({
    menssage,
    handleClickClose,
    handleClickConfirm,
    open,
    titulo,
}: Props) {
    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
            <Dialog
                open={open}
                onClose={handleClickClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle  id="alert-dialog-title">
                    <p className='text-2xl'>{titulo}</p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <p className='text-xl'>{menssage}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className="text-red" onClick={handleClickClose}>
                       <span className="text">Não</span> 
                    </Button>
                    <Button onClick={handleClickConfirm} autoFocus>
                        Sim
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
