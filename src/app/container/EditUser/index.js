import React, { Component } from 'react'
import styles from './editUser.module.css';
import SideNav from '../../components/sideNav'
import {Link} from 'react-router-dom';
import downArrow from '../../../assets/images/down-arrow.svg'
import back from '../../../assets/images/back.svg'
export class index extends Component {

    constructor(props) {
      super(props)
      this.state = {
         id:this.props.match.params.id,
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
         userNameEror:'',
         loading:true,
         dataSource:null,
         planCreate:false,
         planEdit:false,
         planDelete:false,
         postCreate:false,
         postEdit:false,
         postDelete:false,
         CommunityCreate:false,
         CommunityEdit:false,
         CommunityDelete:false,
         StoreCreate:false,
         StoreEdit:false,
         StoreDelete:false
      };

      this.userNameChange = this.userNameChange.bind(this);
      this.firstNameChange = this.firstNameChange.bind(this);
      this.lastnameChange = this.lastnameChange.bind(this); 
      this.passwordChange = this.passwordChange.bind(this);
      this.passwordConfirmChange = this.passwordConfirmChange.bind(this);
      this.emailChange = this.emailChange.bind(this);
      this.accountTypeOnChange = this.accountTypeOnChange.bind(this);
      this.editUserButtonClick = this.editUserButtonClick.bind(this);
      
      this.planCreateChnage = this.planCreateChnage.bind(this);
      this.planEditChnage = this.planEditChnage.bind(this);
      this.planDeleteChange = this.planDeleteChange.bind(this);
      
      this.postCreateChange = this.postCreateChange.bind(this);
      this.postEditChange = this.postEditChange.bind(this);
      this.postDeleteChange = this.postDeleteChange.bind(this);

      this.CommunityCreateChange = this.CommunityCreateChange.bind(this);
      this.CommunityEditChange = this.CommunityEditChange.bind(this);
      this.CommunityDeleteChange = this.CommunityDeleteChange.bind(this);

      this.StoreCreateChange = this.StoreCreateChange.bind(this);
      this.StoreEditChange = this.StoreEditChange.bind(this);
      this.StoreDeleteChange = this.StoreDeleteChange.bind(this);
      
    };

    //set user inputs
    StoreDeleteChange(){
        this.setState({
            StoreDelete:!this.state.StoreDelete,
        })
    }

    StoreEditChange(){
        this.setState({
            StoreEdit:!this.state.StoreEdit,
        })
    }

    StoreCreateChange(){
        this.setState({
            StoreCreate:!this.state.StoreCreate,
        })
    }

    CommunityDeleteChange(){
        this.setState({
            CommunityDelete:!this.state.CommunityDelete,
        })
    }

    CommunityEditChange(){
        this.setState({
            CommunityEdit:!this.state.CommunityEdit,
        })
    }

    CommunityCreateChange(){
        this.setState({
            CommunityCreate:!this.state.CommunityCreate,
        })
    } 

    postCreateChange(){
        this.setState({
            postCreate:!this.state.postCreate,
        })
    } 
    
    postEditChange(){
        this.setState({
            postEdit:!this.state.postEdit,
        })
    }
    
    postDeleteChange(){
        this.setState({
            postDelete:!this.state.postDelete,
        })
    }

    planCreateChnage(event){
        console.log(event);
        this.setState({
            planCreate:!this.state.planCreate,
        })
    }

    planEditChnage(event){
        console.log(event);
        this.setState({
            planEdit:!this.state.planEdit,
        })
    }

    planDeleteChange(event){
        console.log(event);
        this.setState({
            planDelete:!this.state.planDelete,
        })
    }

    //edit user button click
    editUserButtonClick(){
        console.log(this.refs.planCreate.checked);
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
            fetch('http://192.168.8.100/react/updateNewUser.php',
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

    //loade user data
    componentDidMount(){
        return fetch('http://192.168.8.100/react/getUser.php?id='+this.state.id,
        {
            method:'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res=>{
            return res.json()
        }).then(
            res=>{
                console.log(res);
                this.setState({
                    dataSource:res,
                    loading:false,
                });
                this.setData();       
            }
        );
    }

    checkboxAvalability(num){
        if(num === "1"){
            return true;
        }
        else{
            return false;
        }
    }

    //set loaded to form 
    setData(){
        console.log(this.state.dataSource[0].firstName);
        this.setState({
            firstName:this.state.dataSource[0].firstName,
            lastName:this.state.dataSource[0].lastName,
            email:this.state.dataSource[0].email,
            accountType:this.state.dataSource[0].role,
            userName:this.state.dataSource[0].userName,
            
            planCreate:this.checkboxAvalability(this.state.dataSource[0].planCreate),
            planEdit:this.checkboxAvalability(this.state.dataSource[0].planEdit),
            planDelete:this.checkboxAvalability(this.state.dataSource[0].planDelete),
            
            postCreate:this.checkboxAvalability(this.state.dataSource[0].postCreate),
            postEdit:this.checkboxAvalability(this.state.dataSource[0].postEdit),
            postDelete:this.checkboxAvalability(this.state.dataSource[0].postDelete),
            
            CommunityCreate:this.checkboxAvalability(this.state.dataSource[0].CommunityCreate),
            CommunityEdit:this.checkboxAvalability(this.state.dataSource[0].CommunityEdit),
            CommunityDelete:this.checkboxAvalability(this.state.dataSource[0].CommunityDelete),
            
            StoreCreate:this.checkboxAvalability(this.state.dataSource[0].StoreCreate),
            StoreEdit:this.checkboxAvalability(this.state.dataSource[0].StoreEdit),
            StoreDelete:this.checkboxAvalability(this.state.dataSource[0].StoreDelete),


        });
    }
    
    render() {
        
        return (
            <div className={styles.contaier}>
                <SideNav/>
                <div className={styles.pageContainer}>
                    <div className={styles.toplayer}>
                        
                        <div className={styles.topFirst}>
                            {this.state.firstName+" "+this.state.lastName}
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
                            <input type="text" className={styles.inputText} onChange={this.userNameChange} value={this.state.userName}></input>
                        </div>
                    </div>

                    <div className={styles.formInput}>
                        <div className={styles.formInputHalf}>
                            <div className={styles.formInputlabel}>
                                First name <label className={styles.error}> {this.state.firstNameError} </label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.firstNameChange} value={this.state.firstName}></input>
                        </div>
                        <div className={styles.formInputHalf}>
                            <div className={styles.formInputlabel}>
                                Last name <label className={styles.error}> {this.state.lastNameError} </label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.lastnameChange} value={this.state.lastName}></input>
                        </div>
                    </div>

                    <div className={styles.formInput}>
                        <div className={styles.formInputHalf}>
                            <div className={styles.formInputlabel}>
                                Email <label className={styles.error}>  {this.state.emailError} </label>
                            </div>
                            <input type="text" className={styles.inputText} onChange={this.emailChange} value={this.state.email}></input>
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
                                <input type="checkbox" id="planCreate" className={styles.checkbox} ref="planCreate" checked={this.state.planCreate} onChange={this.planCreateChnage}/>  
                                <label htmlFor="planCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="planEdit" className={styles.checkbox} ref="planEdit" checked={this.state.planEdit} onChange={this.planEditChnage}/>  
                                <label htmlFor="planEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="planDelete" className={styles.checkbox} ref="planDelete" checked={this.state.planDelete} onChange={this.planDeleteChange}/>  
                                <label htmlFor="planDelete" className={styles.switch}></label>
                            </div>

                        </div>
                        
                        <div className={styles.permissionTableRow}>

                            <div className={styles.permissionTableTitle}>
                                Post Management
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="postCreate" className={styles.checkbox} ref="postCreate" checked={this.state.postCreate} onChange={this.postCreateChange}/>  
                                <label htmlFor="postCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="postEdit" className={styles.checkbox} ref="postEdit" checked={this.state.postEdit} onChange={this.postEditChange}/>    
                                <label htmlFor="postEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="postDelete" className={styles.checkbox} ref="postDelete" checked={this.state.postDelete}  onChange={this.postDeleteChange}/>  
                                <label htmlFor="postDelete" className={styles.switch}></label>
                            </div>
                            
                        </div>

                        <div className={styles.permissionTableRow}>

                            <div className={styles.permissionTableTitle}>
                                Community Management
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="CommunityCreate" className={styles.checkbox} ref="CommunityCreate" checked={this.state.CommunityCreate} onChange={this.CommunityCreateChange}/>  
                                <label htmlFor="CommunityCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="CommunityEdit" className={styles.checkbox} ref="CommunityEdit" checked={this.state.CommunityEdit} onChange={this.CommunityEditChange}/>  
                                <label htmlFor="CommunityEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="CommunityDelete" className={styles.checkbox} ref="CommunityDelete"  checked={this.state.CommunityDelete} onChange={this.CommunityDeleteChange}/>  
                                <label htmlFor="CommunityDelete" className={styles.switch}></label>
                            </div>
                            
                        </div>

                        <div className={styles.permissionTableRow}>

                            <div className={styles.permissionTableTitle}>
                                Store Management
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="StoreCreate" className={styles.checkbox}  ref="StoreCreate" checked={this.state.StoreCreate}  onChange={this.StoreCreateChange}/>  
                                <label htmlFor="StoreCreate" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="StoreEdit" className={styles.checkbox} ref="StoreEdit" checked={this.state.StoreEdit}  onChange={this.StoreEditChange}/>  
                                <label htmlFor="StoreEdit" className={styles.switch}></label>
                            </div>

                            <div className={styles.permissionTableData}>
                                <input type="checkbox" id="StoreDelete" className={styles.checkbox} ref="StoreDelete" checked={this.state.StoreDelete}  onChange={this.StoreDeleteChange}/>  
                                <label htmlFor="StoreDelete" className={styles.switch}></label>
                            </div>
                            
                        </div>

                    </div>

                    <label className={styles.error}> {this.state.error} </label>

                    <label className={styles.createAccountButton} onClick={this.editUserButtonClick}>
                        Update Account
                    </label>
                    
                    <label className={styles.deleteAccountButton} onClick={this.editUserButtonClick}>
                        Delete Account
                    </label>

                    <label className={styles.deactivateAccount} onClick={this.editUserButtonClick}>
                        Deactivate Account
                    </label>

                </div>
                
            </div>
        )
    }
}

export default index
