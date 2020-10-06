import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useAuth } from '../../providers/Auth';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { login } = useAuth();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitLogin = (event) => {
    event.preventDefault();
    login(username, password);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Login</Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <form id="login" onSubmit={submitLogin}>
            <TextField
              data-testid="userName"
              autoFocus
              margin="dense"
              id="name"
              label="Username"
              type="text"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              data-testid="password"
              autoFocus
              margin="dense"
              id="pass"
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button data-testid="logout"  onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button data-testid="login" type="submit" onClick={handleClose} color="primary" form="login">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
