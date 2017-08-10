import React from 'react'
import Label from '../Label'
import Input from '../Input'
import DivSelector from '../DivSelector'

class NovoUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                nome: '',
                genero: ''
            },
            validacao: {
                nomeInvalido: false,
                generoInvalido: false
            }            
        };
    }

    atualizarNome(e) {
        this.setState({
            usuario: {
                nome: e.target.value
            }
        });
    }
    atualizarGenero(genero) {       
        this.setState({
            usuario: {
                genero: genero
            }
        });
    }

    render() {
        return (            
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label
                        htmlFor="nome"
                        texto="Quem é você?"
                        valorInvalido={this.state.validacao.nomeInvalido}
                    />
                    <Input
                        id="nome"
                        placeholder="Digite seu nome"
                        maxLength="40"
                        readOnly={false}
                        valorInvalido={this.state.validacao.nomeInvalido}
                        defaultValue={this.state.usuario.nome}
                        onChange={this.atualizarNome.bind(this)}
                    />
                    <Label
                        htmlFor="genero"
                        texto="Seu gênero:"
                        valorInvalido={this.state.validacao.generoInvalido}
                    />
                    <DivSelector
                        valorInvalido={this.state.validacao.generoInvalido}
                        genero={this.state.usuario.genero}
                        atualizar={this.atualizarGenero.bind(this)}
                    />
                </form>
            </div>
        );
    }
}

export default NovoUsuario;