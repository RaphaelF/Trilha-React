import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validacoes }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [newsletter, setNewsletter] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobrenome, cpf, promocoes, newsletter });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        name="nome"
        variant="outlined"
        required
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        name="sobrenome"
        variant="outlined"
        required
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.cpf.valido}
        name="cpf"
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        required
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="Promocoes"
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            inputProps={{ "aria-label": "secondary checkbox" }}
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Newsletter"
        control={
          <Switch
            name="Newsletter"
            checked={newsletter}
            onChange={(event) => {
              setNewsletter(event.target.checked);
            }}
            inputProps={{ "aria-label": "secondary checkbox" }}
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
