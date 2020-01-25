import React from 'react'
import styles from './PersonDisplay.module.css';
function index({person}) {
    const date = person.create_date.split(" ");
    return (
        <div className={styles.tableHeader}>
            <div className={styles.tableHeaderIteam}>
                <div className={styles.displayImage}>

                </div>
                <div className={styles.displayName}>
                    {person.firstName+" "+person.lastName}
                </div>
                
                
            </div>
            <div className={styles.tableHeaderIteam}>
                {person.role}
            </div>
            <div className={styles.tableHeaderIteam}>
                {person.email}
            </div>
            <div className={styles.tableHeaderIteam}>
                {date[0]}
            </div>
            <div className={styles.tableHeaderIteam}>
                {person.status == 1?
                
                    <div className={styles.active}>
                        <div className={styles.checkImage}></div>
                        active
                    </div>
                :
                
                    <div className={styles.deActive}>
                        Inactivate
                    </div>
                }
            </div>
        </div>
    )
}

export default index
