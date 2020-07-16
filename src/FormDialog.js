import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function FormDialog() {
  const [open, setOpen] = React.useState(true)
  const [value, setValue] = React.useState('')

  const handleClose = () => 
    (value === 'wiley123') ? setOpen(false) : setValue('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Password required</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your instructor sets up this Assignment for Online Testing with password required policy {value}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="pwd"
            label="Assignment Password"
            type="password"
            value={value}
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}