import React from 'react'

class Image extends React.Component {
    constructor(props) {
        super(props);
    }

    calcularPosicaoX() {
        return `${this.props.eixoX * this.props.width}px`
    }
    calcularPosicaoY() {
        return `${this.props.eixoY * this.props.height}px`
    }
    calcularTamanho() {        
        return `auto ${this.props.backgroundHeight}px`
    }

    obterEstilo() {        
        return {
            backgroundImage: `url(${this.props.arquivo})`,
            backgroundPositionX: this.calcularPosicaoX(),
            backgroundPositionY: this.calcularPosicaoY(),
            backgroundSize: this.calcularTamanho(),            
            width: `${this.props.width}px`,
            height: `${this.props.height}px`,
            display: 'table',
            margin: '0 auto'
        }        
    }

    render() {
        return (
            <div style={this.obterEstilo()}>
            </div>
        )
    }    
}

export default Image;