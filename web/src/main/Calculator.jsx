import React, { Component } from 'react'
import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

import api from '../services/api';

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.backspaceValue = this.backspaceValue.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    backspaceValue(){
        let valor = this.state.displayValue.toString();
        let values = this.state.values;

        values[this.state.current] = valor.substr(0,valor.length - 1) == '' ? '0' : Number(valor.substr(0,valor.length - 1));

        this.setState({ displayValue:valor.substr(0,valor.length - 1) == '' ? '0' : valor.substr(0,valor.length - 1),values})
    }

    async setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            var rota = 0 ;

            switch (currentOperation) {
                case "+":
                    rota = "/soma";
                    break;
                case "-":
                    rota = "/sub";
                    break;
                case "/":
                    rota = "/div";
                    break;
                case "*":
                    rota = "/mult";
                    break;
            }
            await api.get(rota, {
                params: {
                    numeroAtual: values[0],
                    numeroDigitado: values[1]
                }
            })
            .then(function (response) {
                values[0] = response.data.resultado;
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                values[1] = 0;
            });

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0'
            || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
        }
    }

    render() {
        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} double/>
                <Button label="⇦" click={this.backspaceValue}  />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
                
            </div>
        )
    }
}