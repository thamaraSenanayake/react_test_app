import React from 'react'
import styles from './SideNav.module.css';

//genarate side nav bar
function index() {
    return (
        <div className={styles.contaier}>
            <div className={styles.logoDisplay}>
                <div className={styles.logo}>
                    <div className={styles.logoInner}>
                        P
                    </div>
                </div>
                <div className={styles.logoWord}>
                    <label className={styles.primerLabel}>Primer Admin</label>
                </div>
                <div className={styles.sizeBox}>
                    
                </div>

                <div className ={styles.navBarIteamCover} >
                    <div className={styles.purpleScquire}>

                    </div>
                    <div className={styles.navBarIteam}>
                        <label className={styles.dashBoardIteam}>Dashboard</label>
                    </div>
                </div>
                

                <div className ={styles.navBarIteamCover} >
                    <div className={styles.purpleScquire}>

                    </div>
                    <div className={styles.navBarIteam}>
                        <label className={styles.dashBoardIteam}>Plans</label>
                    </div>
                </div>

                <div className ={styles.navBarIteamCover} >
                    <div className={styles.purpleScquire}>

                    </div>
                    <div className={styles.navBarIteam}>
                        <label className={styles.dashBoardIteam}>Post</label>
                    </div>
                </div>

                <div className ={styles.activeNavBarIteamCover} >
                    <div className={styles.activePurpleScquire}>

                    </div>
                    <div className={styles.navBarIteam}>
                        <label className={styles.dashBoardIteam}>Account Managment</label>
                    </div>
                </div>

                <div className ={styles.navBarIteamCover} >
                    <div className={styles.purpleScquire}>

                    </div>
                    <div className={styles.navBarIteam}>
                        <label className={styles.dashBoardIteam}>User Managment</label>
                    </div>
                </div>

                <div className ={styles.navBarIteamCover} >
                    <div className={styles.purpleScquire}>

                    </div>
                    <div className={styles.navBarIteam}>
                        <label className={styles.dashBoardIteam}>Community Groups</label>
                    </div>
                </div>

                <div className ={styles.navBarIteamCover} >
                    <div className={styles.purpleScquire}>

                    </div>
                    <div className={styles.navBarIteam}>
                        <label className={styles.dashBoardIteam}>Online Store</label>
                    </div>
                </div>

                <div className ={styles.navBarIteamCover} >
                    <div className={styles.purpleScquire}>

                    </div>
                    <div className={styles.navBarIteam}>
                        <label className={styles.dashBoardIteam}>Payment</label>
                    </div>
                </div>

                <div className ={styles.navBarIteamCover} >
                    <div className={styles.purpleScquire}>

                    </div>
                    <div className={styles.navBarIteam}>
                        <label className={styles.dashBoardIteam}>Settings</label>
                    </div>
                </div>

                <div className ={styles.navBarIteamCover} >
                    <div className={styles.purpleScquire}>

                    </div>
                    <div className={styles.navBarIteam}>
                        <label className={styles.dashBoardIteam}>Sign out</label>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default index
