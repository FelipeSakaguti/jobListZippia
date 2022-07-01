import styles from '../../styles/JobBox.module.css'

type JobBoxProps = {
    jobTitle: string;
    company: string;
    description: string;
    postingDate: string;
}

export function JobBox( { jobTitle, company, description, postingDate }: JobBoxProps ){

    //Treatment to print the job posting date
    let dateString = new Date(postingDate).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    })    
      
    return (
        //Boxes with Job Information
        <div className={styles.container}>
            <div className={styles.job}>
                <strong>{jobTitle}</strong>
                <div className={styles.jobHeader}>
                    <span className={styles.company}>{company}</span>
                    <span className={styles.date}>{dateString}</span>
                </div>
                <span className={styles.description} dangerouslySetInnerHTML={ {'__html': description}} ></span>
            </div>
        </div>
    )
}

