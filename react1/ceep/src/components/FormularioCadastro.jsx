import React, { Component } from "react";

class FormularioCadastro extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Título" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Escreva sua nota"
        ></textarea>
        <button>Criar nota</button>
      </form>
    );
  }
}

export default FormularioCadastro;
