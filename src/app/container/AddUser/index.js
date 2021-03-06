import React, { Component } from 'react'
import styles from './adduser.module.css';
import SideNav from '../../components/sideNav'
import {Link} from 'react-router-dom';
import downArrow from '../../../assets/images/down-arrow.svg'
import back from '../../../assets/images/back.svg'

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

      this.userNameChange = this.userNameChange.bind(this);
      this.firstNameChange = this.firstNameChange.bind(this);
      this.lastnameChange = this.lastnameChange.bind(this); 
      this.passwordChange = this.passwordChange.bind(this);
      this.passwordConfirmChange = this.passwordConfirmChange.bind(this);
      this.emailChange = this.emailChange.bind(this);
      this.accountTypeOnChange = this.accountTypeOnChange.bind(this);
      this.addUserButtonClick = this.addUserButtonClick.bind(this);
    };

    //add user 
    addUserButtonClick(){
        //validation
        if (this.state.firstName.length === 0) {
            this.setState({
                firstNameError:'First name cant be null',
            })
        } else if (this.state.lastName.length === 0) {
            this.setState({
                lastNameError:'last name cant be null',
            })
        }else if (this.state.userName.length === 0) {
            this.setState({
                userNameEror:'user name cant be null',
            })
        }
        else if (this.state.email.length === 0) {
            this.setState({
                emailError:'email cant be null',
            })
        }
        else if (this.state.password.length === 0) {
            this.setState({
                passwordError:'password cant be null',
            })
        }
        else if (this.state.passwordConfirm.length === 0) {
            this.setState({
                passwordConfirmError:'re enter your password',
            })
        }else if (this.state.passwordConfirm !== this.state.password ) {
            this.setState({
                passwordConfirmError:'re enter your password',
            })
        }else{
            //send data to API
            fetch('http://192.168.8.100/react/addNewUser.php',
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
                    userName:this.state.userName,
                    accountType:this.state.accountType,
                    
                    planCreate:this.refs.planCreate.checked,
                    planEdit:this.refs.planEdit.checked,
                    planDelete:this.refs.planDelete.checked,
                    
                    postCreate:this.refs.postCreate.checked,
                    postEdit:this.refs.postEdit.checked,
                    postDelete:this.refs.postDelete.checked,
                   
                    CommunityCreate:this.refs.CommunityCreate.checked,
                    CommunityEdit:this.refs.CommunityEdit.checked,
                    CommunityDelete:this.refs.CommunityDelete.checked,
                   
                    StoreCreate:this.refs.StoreCreate.checked,
                    StoreEdit:this.refs.StoreEdit.checked,
                    StoreDelete:this.refs.StoreDelete.checked,


                })
            }).then(res=>{
                return res.text()
            }).then(
                res=>{
                    if(res==1){
                        this.props.history.push("/homePage");
                    }else{
                        this.setState({
                            error:res
                        })
                    }
                }
            );
        }

    }

    //set user inputs
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

                        <Link to='/homePage'>
                            <div className={styles.topSecond}>
                                <img src={back} className={styles.backIcon}/>
                                <label className={styles.BackButtonlabel}>Back</label>
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
                                First name <label className={styles.error}> {this.state.firstNameError} </label>
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
                                Password <label className={styles.error}>  {this.state.passwordError} </label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.passwordChange}></input>
                        </div>
                        <div className={styles.formInputHalf}>
                            <div className={styles.formInputlabel}>
                                Confirm Password <label className={styles.error}> {this.state.passwordConfirmError} </label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.passwordConfirmChange}></input>
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
                                <input type="checkbox" id="planCreate" className={styles.checkbox} ref="planCreate"/>  
                                <label htmlFor="planCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="planEdit" className={styles.checkbox} ref="planEdit" />  
                                <label htmlFor="planEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="planDelete" className={styles.checkbox} ref="planDelete" />  
                                <label htmlFor="planDelete" className={styles.switch}></label>
                            </div>

                        </div>
                        
                        <div className={styles.permissionTableRow}>

                            <div className={styles.permissionTableTitle}>
                                Post Management
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="postCreate" className={styles.checkbox} ref="postCreate"/>  
                                <label htmlFor="postCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="postEdit" className={styles.checkbox} ref="postEdit" />  
                                <label htmlFor="postEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="postDelete" className={styles.checkbox} ref="postDelete"/>  
                                <label htmlFor="postDelete" className={styles.switch}></label>
                            </div>
                            
                        </div>

                        <div className={styles.permissionTableRow}>

                            <div className={styles.permissionTableTitle}>
                                Community Management
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="CommunityCreate" className={styles.checkbox} ref="CommunityCreate" />  
                                <label htmlFor="CommunityCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="CommunityEdit" className={styles.checkbox} ref="CommunityEdit"  />  
                                <label htmlFor="CommunityEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="CommunityDelete" className={styles.checkbox} ref="CommunityDelete"  />  
                                <label htmlFor="CommunityDelete" className={styles.switch}></label>
                            </div>
                            
                        </div>

                        <div className={styles.permissionTableRow}>

                            <div className={styles.permissionTableTitle}>
                                Store Management
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="StoreCreate" className={styles.checkbox}  ref="StoreCreate"/>  
                                <label htmlFor="StoreCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="StoreEdit" className={styles.checkbox} ref="StoreEdit"/>  
                                <label htmlFor="StoreEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="StoreDelete" className={styles.checkbox} ref="StoreDelete"/>  
                                <label htmlFor="StoreDelete" className={styles.switch}></label>
                            </div>
                            
                        </div>

                    </div>

                    <label className={styles.error}> {this.state.error} </label>

                    <div className={styles.createAccountButton} onClick={this.addUserButtonClick}>
                        Create Account
                    </div>

                </div>
                
            </div>
        )
    }
}

export default index
