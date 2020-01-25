import React, { Component } from 'react'
import styles from './signIn.module.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import HomePage from '../homePage';
class index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstName:'',
         firstNameError:'',
         lastName:'',
         lastNameError:'',
         password:'',
         passwordError:'',
         passwordConfirm:'',
         passwordConfirmError:'',
         email:'',
         emailError:'',
         error:''
      };

      this.firstNameChange = this.firstNameChange.bind(this);
      this.lastnameChange = this.lastnameChange.bind(this);
      this.passwordChange = this.passwordChange.bind(this);
      this.passwordConfirmChange = this.passwordConfirmChange.bind(this);
      this.emailChange = this.emailChange.bind(this);
      this.signInButtonClick = this.signInButtonClick.bind(this);


    };

    signInButtonClick(){
        
        console.log(this.state.firstName);
        
        if (this.state.firstName.length === 0) {
            this.setState({
                firstNameError:'First name cant be null'
            })   
        } else if (this.state.lastName.length === 0) {
            this.setState({
                lastNameError:'last name cant be null'
            })   
        }
        else if (this.state.password.length === 0) {
            this.setState({
                passwordError:'password cant be null'
            })   
        }
        else if (this.state.passwordConfirm.length === 0) {
            this.setState({
                passwordConfirmError:'re enter your password'
            })   
        }
        else if (this.state.email.length === 0) {
            this.setState({
                emailError:'email cant be null'
            })   
        }else{
            fetch('http://192.168.8.100/react/addUser.php',
            {
                method:'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    firstName:this.state.firstName,
                    lastName:this.state.lastName,
                    password:this.state.password,
                    email:this.state.email,
                })
            }).then(res=>{
                return res.text()
            }).then(
                res=>{
                    if(res==="Done"){
                        return(
                            <Route path="/homePage" component={HomePage}/>
                        )
                    }else{
                        console.log(res);
                    }
                }
            );
        }
    }

    firstNameChange(event){
        this.setState({
            firstName: event.target.value,
            firstNameError:''
        });
    }

    lastnameChange(event){
        this.setState({
            lastName: event.target.value,
            lastNameError:''
        });
    }

    passwordChange(event){
        this.setState({
            password: event.target.value,
            passwordError:''
        });
    }

    passwordConfirmChange(event){
        this.setState({
            passwordConfirm: event.target.value,
            passwordConfirmError:''
        });
    }

    emailChange(event){
        this.setState({
            email: event.target.value,
            emailError:''
        });
    }





    
    render() {
        return (
            <div className={styles.contaier}>
                <div className={styles.formContainer}>
                    <div className={styles.logoDisplay}>
                        <div className={styles.logo}>
                            <div className={styles.logoInner}>
                                P
                            </div>
                        </div>
                        <div className={styles.logoWord}>
                            <label className={styles.primerLabel}>Primer</label>
                            <label className={styles.adminLabel}>Admin</label>
                        </div>
                        
                    </div>
                    <div className={styles.formContainerInner}>
                        <label className={styles.signIn}> Sign Up</label>
                        
                        <div className={styles.formInput}>
                            <div className={styles.formInputHalf}>
                                <div className={styles.formInputlabel}>
                                    First name <label className={styles.error}>  {this.state.firstNameError} </label>
                                </div>
                                <input type="text" className={styles.inputText} onChange={this.firstNameChange}></input>
                            </div>
                            <div className={styles.formInputHalf}>
                                <div className={styles.formInputlabel}>
                                    Last name <label className={styles.error}> {this.state.lastNameError} </label>
                                </div>
                                <input type="text" className={styles.inputText} onChange={this.lastnameChange}></input>
                            </div>
                        </div>

                        <div className={styles.formInput}>
                            <div className={styles.formInputlabel}>
                                Email <label className={styles.error}>  {this.state.emailError} </label>
                            </div>
                            <input type="text" className={styles.inputTextFull} onChange={this.emailChange}></input>
                        </div>

                        <div className={styles.formInput}>
                            <div className={styles.formInputHalf}>
                                <div className={styles.formInputlabel}>
                                    password  <label className={styles.error}> {this.state.passwordError} </label>
                                </div>
                                <input type="text" className={styles.inputText} onChange={this.passwordChange}></input>
                            </div>
                            <div className={styles.formInputHalf}>
                                <div className={styles.formInputlabel}>
                                    confirm password  <label className={styles.error}> {this.state.passwordConfirmError} </label>
                                </div>
                                <input type="text" className={styles.inputText} onChange={this.passwordConfirmChange}></input>
                            </div>
                        </div>
                        <label className={styles.error}> {this.state.error} </label>
                        <div className={styles.button} onClick={this.signInButtonClick}>
                            Sign Up
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default index;
