import React, { Component } from 'react'
import styles from './homePage.module.css';
import SideNav from '../../components/sideNav'
import Person from '../../components/PersonDisplay';
import searchIcon from '../../../assets/images/search.svg'
import plus from '../../../assets/images/plus.svg'
import downArrow from '../../../assets/images/down-arrow.svg'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

export class index extends Component {
    
    constructor(props) {
      super(props)
    
      //check user validity
      if(!this.props.Islogged){
        console.log("exit");
        this.props.history.push("/");
      }
    
      this.state = {
         loading:true,
         dataSource:[]
      };
    };
    
    //load users data
    componentDidMount(){
        return fetch('http://192.168.8.100/react/viewUser.php',
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
                })       
            }
        );
    }

    render() {
        let personListContainer =[]
        if(!this.state.loading){
            personListContainer = this.state.dataSource.map(person=><Person key={person.id} person={person}/>)
        }
        return (
            <div className={styles.contaier}>
                <SideNav/>
                <div className={styles.pageContainer}>
                    <div className={styles.toplayer}>
                        <div className={styles.topFirst}>
                            Account Management
                        </div>

                        <div className={styles.topSecond}>
                            <input type="text" className={styles.inputTextFull} placeholder="Search by name or email" />
                            <img src={searchIcon} className={styles.searchIcon}/>
                        </div>

                        <Link to='/addUser'>
                            <div className={styles.topThird}>
                                <label className={styles.addNewAccountLabel}>Add New Account</label>
                                <img src={plus} className={styles.plusIcon}/>
                            </div>
                        </Link>
                    </div>

                    <div className={styles.tableHeader}>
                        <div className={styles.tableHeaderIteam}>
                            Name
                            <img src={downArrow} className={styles.downArrow}/>
                        </div>
                        <div className={styles.tableHeaderIteam}>
                            Role
                            <img src={downArrow} className={styles.downArrow}/>
                        </div>
                        <div className={styles.tableHeaderIteam}>
                            Email
                            <img src={downArrow} className={styles.downArrow}/>
                        </div>
                        <div className={styles.tableHeaderIteam}>
                            Created On
                            <img src={downArrow} className={styles.downArrow}/>
                        </div>
                        <div className={styles.tableHeaderIteam}>
                            Status
                            <img src={downArrow} className={styles.downArrow}/>
                        </div>
                    </div>
                    {personListContainer}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        Islogged:state.Islogged,
    }
  }

export default connect(mapStateToProps,null)(index);
