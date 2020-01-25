import React, { Component } from 'react'
import styles from './login.module.css';
import {Link} from 'react-router-dom';
import HomePage from '../homePage';

class index extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            password:'',
            userName:'',
            passwordError:'',
            userNameError:'',
            error:''
        };

        this.passwordChange = this.passwordChange.bind(this);
        this.userNameChange = this.userNameChange.bind(this);
        this.loginClick = this.loginClick.bind(this);

    };

    passwordChange(event){
        this.setState({
            password: event.target.value,
            passwordError:''
        });
    }

    userNameChange(event){
        this.setState({
            userName: event.target.value,
            userNameError:''
        });
    }

    loginClick(){
        if (this.state.userName.length === 0) {
            this.setState({
                userNameError:'User name cant be empty'
            })
        } else if (this.state.password.length === 0) {
            this.setState({
                passwordError:'password cant be empty'
            })
        }else{
            fetch('http://192.168.8.100/react/login.php',
            {
                method:'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({
                    password:this.state.password,
                    email:this.state.userName,
                })
            }).then(res=>{
                return res.text()
            }).then(
                res=>{
                    if(res==="1"){
                        
                        console.log(res);
                    }else{
                        // this.history.push('/signIn');
                        this.setState({
                            error:res
                        })
                    }
                }
            );
        }
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
                        <label className={styles.signIn}> Sign in</label>
                        <div className={styles.formInput}>
                            <div className={styles.formInputlabel}>
                                User Name <label className={styles.error}> {this.state.userNameError}</label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.userNameChange}></input>
                        </div>
                        <div className={styles.formInput}>
                            <div className={styles.formInputlabel}>
                                Password <label className={styles.error}> {this.state.passwordError}</label> <label className={styles.rightAlign}>Forgot?</label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.passwordChange}></input>
                        </div>
                        <label className={styles.error}> {this.state.error}</label>
                        <div className={styles.button} onClick={this.loginClick}>
                            Sign In
                        </div>
                        <div className={styles.createAccount}>
                            <div>Dont you have an account</div>
                            <Link to='/signIn'>
                                <div className={styles.createAccountButton}>Create New Account</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default index;
