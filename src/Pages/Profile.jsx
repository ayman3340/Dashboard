import { Box, Stack, TextField, Button } from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm } from "react-hook-form";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


function Profile() {


  



  const [age, setAge] = React.useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data)
    setOpen(true);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };



  const [open, setOpen] = React.useState(false);



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      gap={3}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      component={"form"}
      autoComplete="off"
    >
      <Stack flexDirection={"row"} gap={3}>
        <TextField
          id="FirstName"
          label="FirstName"
          variant="filled"
          sx={{ flex: 1 }}
          error={Boolean(errors.firstName)}
          helperText={Boolean(errors.firstName) ? "This field required" : null}
          {...register("firstName", { required: true, minLength: 3 })}
        />
        <TextField
          id="LastName"
          label="LastName"
          variant="filled"
          sx={{ flex: 1 }}
          error={Boolean(errors.lastName)}
          helperText={Boolean(errors.lastName) ? "This field required" : null}
          {...register("lastName", { required: true, minLength: 3 })}
        />
      </Stack>

      <TextField
        id="Email"
        label="Email"
        variant="filled"
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? "This field required" : null}
        {...register("email", {required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
      />
      <TextField
        id="Contact"
        label="Contact Number"
        variant="filled"
        error={Boolean(errors.age)}
        helperText={Boolean(errors.age) ? "This field required" : null}
        {...register("age", { minLength: 5 })}
      />
      <TextField id="Address" label="Address 1" variant="filled" 
                 {...register("Address", { minLength: 5 })}

      />
      <TextField id="Address" label="Address 2" variant="filled" 
                 {...register("Address2", { minLength: 5  })}

      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Admin"
          onChange={handleChange}
          variant="filled"

        >
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>User</MenuItem>
          <MenuItem value={30}>Manger</MenuItem>
        </Select>
      </FormControl>
      <Box textAlign={"right"}>
        <Button type="submit" variant="contained">
          Submit
        </Button>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="User Create"
        action={action}
      />


      </Box>
    </Box>
  );
}

export default Profile;
