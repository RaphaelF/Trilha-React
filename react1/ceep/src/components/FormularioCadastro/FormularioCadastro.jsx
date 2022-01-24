import React, { Component } from "react";
import "./estilos.css";

class FormularioCadastro extends Component {
  constructor() {
    super();
    this.titulo = "";
  }
  handleMudançaTitulo(evento) {
    this.titulo = evento.target.value;
    console.log(this.titulo);
  }

  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudançaTitulo.bind(this)}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
