import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState(0);
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState(0);
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        name="cep"
        type="number"
        variant="outlined"
        margin="normal"
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
      />
      <TextField
        id="endereco"
        label="endereco"
        name="endereco"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
        value={endereco}
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
      />
      <TextField
        id="numero"
        label="Numero"
        name="numero"
        type="number"
        variant="outlined"
        margin="normal"
        value={numero}
        onChange={(event) => {
          setNumero(event.target.value);
        }}
      />
      <TextField
        id="estado"
        label="Estado"
        name="estado"
        type="text"
        variant="outlined"
        margin="normal"
        value={estado}
        onChange={(event) => {
          setEstado(event.target.value);
        }}
      />
      <TextField
        id="cidade"
        label="Cidade"
        name="cidade"
        type="text"
        variant="outlined"
        margin="normal"
        value={cidade}
        onChange={(event) => {
          setCidade(event.target.value);
        }}
      />
      <Button variant="contained" color="primary" type="submit" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
