import Menu from "../components/Menu";
import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAuth } from "../auth/AuthContext";
import { Navigate } from "react-router-dom"

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    if (formJson.user == 'carlos' && formJson.password == '123456'){
        props.funcion(formJson)
        handleClose();
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Type your credentials, plz.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="user"
              name="user"
              label="User"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="password"
              name="password"
              label="Password"
              type="password"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function BasicTextFields(props) {
    console.dir(props)
  return (
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate autoComplete="off" >
      <TextField type="number" id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField type="password" id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      {props.children}
    </Box>
  );
}

function ButtonUsage(props) {
  return <Button variant={props.tipo}>{props.value}</Button>;
}
function MaterialPage(props){
    const [login, setLogin] = React.useState({})
    const saveUser = (value) => {
        console.dir(value)
        setLogin(value)
    }
    const { user } = useAuth();
    if (!user)
      return <Navigate to="/" replace />
    return <>
        <Menu/>
        <h1> Hola { user.user }</h1>
        <br></br>
        <FormDialog funcion={saveUser}/>
        <BasicTextFields valor="Hola">
        <ButtonUsage tipo="text" value="Prueba"/>
        </BasicTextFields>
        <ButtonUsage tipo="text" value="Hello World"/>
        <ButtonUsage tipo="outlined" value="Hello World"/>
        <ButtonUsage tipo="contained" value="Hello World"/>
    </>
}

export default MaterialPage;