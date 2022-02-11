import React from "react";
import Button from "@material-ui/core/Button";
import { TextField, Switch } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField id="nome" label="Nome" variant="outlined" fullWidth />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
      />

      <TextField id="cpf" label="CPF" variant="outlined" fullWidth />

      <label htmlFor="">Promoções</label>
      <Switch
        name="Promocoes"
        inputProps={{ "aria-label": "secondary checkbox" }}
        label="Promoções"
        color="primary"
      />

      <label htmlFor="">Newsletter</label>
      <Switch
        name="Newsletter"
        inputProps={{ "aria-label": "secondary checkbox" }}
        label="Newsletter"
        color="primary"
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
