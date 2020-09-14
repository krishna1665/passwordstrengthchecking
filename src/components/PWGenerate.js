import React, { Component } from 'react';

class PasswordGenerate extends Component {
    state = {
        password: '',
        passwordLength: false,
        containsNumbers: false,
        isUpperCase: false,
        containsSymbols: false
    }

    checkForNumbers(string){
        const matches = string.match(/\d+/g);
        this.setState({
            containsNumbers: matches != null ? true : false
        });
    }

    checkForUpperCase(string){
        const matches = string.match(/[A-Z]/);
        this.setState({
            isUpperCase: matches != null ? true : false
        });
    }

    checkForSymbols(string){
        const symbols = new RegExp(/[^A-Z a-z0-9]/);
        this.setState({
            containsSymbols: symbols.test(string) ? true : false
        });
    }

    handleChange = input => e =>{
        const targetValue = e.target.value.replace(/\s/g, '');
        this.checkForNumbers(targetValue);
        this.checkForUpperCase(targetValue);
        this.checkForSymbols(targetValue);
        this.setState({
            [input]: targetValue,
            passwordLength: targetValue.length > 7 ? true : false
        });
    }


    render(){
        const {password,
            passwordLength,
            containsNumbers,
            isUpperCase,
            containsSymbols
        } = this.state
        return(
            <>
                <div className="title">
                    Pasword Strength Checker
                </div>
                <div className="content">
                    <form>
                        <input type="text" onChange={this.handleChange('password')} 
                        value={password} placeholder="Enter Password" />
                        <div>
                            <div className={containsNumbers ? 'green' : null}>
                                Contains numbers
                            </div>
                            <div className={isUpperCase ? 'green' : null}>
                                Contains UpperCase
                            </div>
                            <div className={containsSymbols ? 'green' : null}>
                                Contains Symbols
                            </div>
                            <div className={passwordLength ? 'green' : null}>
                                Contains More than 8 characters
                            </div>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}

export default PasswordGenerate;