import React, { Component } from 'react'
import styles from './homePage.module.css';
import SideNav from '../../components/sideNav'
import Person from '../../components/PersonDisplay';
export class index extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         loading:true,
         dataSource:[]
      };
    };
    
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
                console.log('====================================');
                console.log(res);
                console.log('====================================');
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
                        </div>

                        <div className={styles.topThird}>
                            Add New Account
                        </div>
                    </div>

                    <div className={styles.tableHeader}>
                        <div className={styles.tableHeaderIteam}>
                            Name
                        </div>
                        <div className={styles.tableHeaderIteam}>
                            Role
                        </div>
                        <div className={styles.tableHeaderIteam}>
                            Email
                        </div>
                        <div className={styles.tableHeaderIteam}>
                            Created On
                        </div>
                        <div className={styles.tableHeaderIteam}>
                            Status
                        </div>
                    </div>
                    {personListContainer}
                </div>
            </div>
        )
    }
}

export default index
