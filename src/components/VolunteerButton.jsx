import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SelectSmall from "./SelectInput";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        sx={{
          borderRadius: "20px",
          backgroundColor: "black",
          fontSize: "17px",
          fontWeight: "bold",
          padding: "20px 50px",
        }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Become a Volunteer!
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Want to Join our Initiative?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To join us, please enter your email address here. We will send
            updates occasionally!
          </DialogContentText>
          {/* <div style={{ display: "flex" }}>
            <div>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Full Name"
                type="email"
                fullWidth
                variant="standard"
              />
            </div>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Full Name"
              type="email"
              fullWidth
              variant="standard"
            />
          </div> */}
          <div>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Full Name"
              type="email"
              fullWidth
              variant="standard"
            />
          </div>
          <div style={{ display: "flex" }}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Locality"
              type="email"
              fullWidth
              variant="standard"
            />
          </div>
          <div style={{ display: "flex" }}>
            <SelectSmall />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              paddingInline: "10px",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              backgroundColor: "black",
              color: "white",
              paddingInline: "10px",
            }}
            onClick={handleClose}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
