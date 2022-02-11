import React from "react";
import Button from "@material-ui/core/Button";
import { TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="Promocoes"
            inputProps={{ "aria-label": "secondary checkbox" }}
            color="primary"
            defaultChecked={true}
          />
        }
      />
      <FormControlLabel
        label="Newsletter"
        control={
          <Switch
            name="Newsletter"
            inputProps={{ "aria-label": "secondary checkbox" }}
            color="primary"
            defaultChecked={true}
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
