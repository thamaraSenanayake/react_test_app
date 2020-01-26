import React, { Component } from 'react'
import styles from './adduser.module.css';
import SideNav from '../../components/sideNav'
import {Link} from 'react-router-dom';
import downArrow from '../../../assets/images/down-arrow.svg'

export class index extends Component {

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
         error:'',
         accountType:'Admin',
         userName:'',
         userNameEror:''
      };

    //   this.userNameChange = this.userNameChange.bind(this);
      this.firstNameChange = this.firstNameChange.bind(this);
      this.lastnameChange = this.lastnameChange.bind(this); 
      this.passwordChange = this.passwordChange.bind(this);
      this.passwordConfirmChange = this.passwordConfirmChange.bind(this);
      this.emailChange = this.emailChange.bind(this);
      this.accountTypeOnChange = this.accountTypeOnChange.bind(this);
    };

    accountTypeOnChange(text){
        this.setState({
            accountType:text
        });
    }
    userNameChange(event){
        this.setState({
            userName: event.target.value,
            userNameEror:''
        });
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
                <SideNav/>
                <div className={styles.pageContainer}>
                    <div className={styles.toplayer}>
                        
                        <div className={styles.topFirst}>
                            Account Management
                        </div>

                        <Link to='/addUser'>
                            <div className={styles.topSecond}>
                                <label className={styles.BackButtonlabel}>Back</label>
                                {/* <img src={plus} className={styles.plusIcon}/> */}
                            </div>
                        </Link>
                    </div>

                    <div className={styles.formInput}>
                        <div className={styles.formInputHalf}>
                            <div className={styles.formInputlabel}>
                                User Name <label className={styles.error}>  {this.state.userNameEror} </label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.userNameChange}></input>
                        </div>
                    </div>

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
                        <div className={styles.formInputHalf}>
                            <div className={styles.formInputlabel}>
                                Email <label className={styles.error}>  {this.state.emailError} </label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.emailChange}></input>
                        </div>
                    </div>

                    <div className={styles.formInput}>
                        <div className={styles.formInputHalf}>
                            <div className={styles.formInputlabel}>
                                Account Type <label className={styles.error}>  {this.state.emailError} </label>
                            </div>
                            <div className={styles.dropDown}>
                                {this.state.accountType}
                                <img src={downArrow} className={styles.downArrow}/>
                                <div className={styles.dropdownContent}>
                                    <label onClick={()=>this.accountTypeOnChange("Admin")}> Admin</label>
                                    <label onClick={()=>this.accountTypeOnChange("Merchant")}>Merchant</label>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className={styles.formInput}>
                        <div className={styles.formInputHalf}>
                            <div className={styles.formInputlabel}>
                                Password <label className={styles.error}>  {this.state.firstNameError} </label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.firstNameChange}></input>
                        </div>
                        <div className={styles.formInputHalf}>
                            <div className={styles.formInputlabel}>
                                Confirm Password <label className={styles.error}> {this.state.lastNameError} </label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.lastnameChange}></input>
                        </div>
                    </div>

                    <div className={styles.permissionTitle} >
                        Permissions
                    </div>

                    <div className={styles.permissinContainer}>
                        <div className={styles.permissionTableRow}>
                            <div className={styles.permissionTableTitle}>

                            </div>

                            <div className={styles.permissionTableData}>
                                Create
                            </div>

                            <div className={styles.permissionTableData}>
                                Edit
                            </div>

                            <div className={styles.permissionTableData}>
                                Delete
                            </div>
                        </div>

                        <div className={styles.permissionTableRow}>

                            <div className={styles.permissionTableTitle}>
                                Plan Management
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="planCreate" className={styles.checkbox} />  
                                <label htmlFor="planCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="planEdit" className={styles.checkbox} />  
                                <label htmlFor="planEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="planDelete" className={styles.checkbox} />  
                                <label htmlFor="planDelete" className={styles.switch}></label>
                            </div>

                        </div>
                        
                        <div className={styles.permissionTableRow}>

                            <div className={styles.permissionTableTitle}>
                                Post Management
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="postCreate" className={styles.checkbox} />  
                                <label htmlFor="postCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="postEdit" className={styles.checkbox} />  
                                <label htmlFor="postEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="postDelete" className={styles.checkbox} />  
                                <label htmlFor="postDelete" className={styles.switch}></label>
                            </div>
                            
                        </div>

                        <div className={styles.permissionTableRow}>

                            <div className={styles.permissionTableTitle}>
                                Community Management
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="CommunityCreate" className={styles.checkbox} />  
                                <label htmlFor="CommunityCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="CommunityEdit" className={styles.checkbox} />  
                                <label htmlFor="CommunityEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="CommunityDelete" className={styles.checkbox} />  
                                <label htmlFor="CommunityDelete" className={styles.switch}></label>
                            </div>
                            
                        </div>

                        <div className={styles.permissionTableRow}>

                            <div className={styles.permissionTableTitle}>
                                Store Management
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="StoreCreate" className={styles.checkbox} />  
                                <label htmlFor="StoreCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="StoreEdit" className={styles.checkbox} />  
                                <label htmlFor="StoreEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="StoreDelete" className={styles.checkbox} />  
                                <label htmlFor="StoreDelete" className={styles.switch}></label>
                            </div>
                            
                        </div>

                    </div>

                    <div className={styles.createAccountButton}>
                        Create Account
                    </div>

                </div>
                
            </div>
        )
    }
}

export default index
