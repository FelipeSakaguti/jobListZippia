
import type { NextPage } from 'next'
import styles from '../../../styles/Jobs.module.css'
import { JobBox } from '../../components/JobBox'
import { GetServerSideProps } from "next";
import axios from 'axios';
import { ChangeEvent, useEffect, useState } from 'react';

interface Job {
    id: string;
    jobTitle: string;
    company: string;
    description: string;
    postingDate: string; 
}

interface JobList {
    jobs: Job[];
}

//I was having a problem because the API is not returning the shortDesc parameter, so i made this
//function to take the jobDescription first N words when the API doesn't return 'shortDesc'
function takeFirstNWords( description: string, n: number){
  return description.split(' ').slice(0, n).join(' ') + ' ...';
}

//SSR for the backend data
export const getServerSideProps: GetServerSideProps = async() => {

  //API POST request, gettind the data returned
  const { data } = await axios.post('https://www.zippia.com/api/jobs/', {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: 'Business Analyst',
    locations: [],
    numJobs: 20,
    previousListingHashes: [],
  })

  //Creating the return only with the fields that will be used
  const jobs = data.jobs.map( (job: any) => {
    return ( {
      id: job.jobId,
      jobTitle: job.jobTitle,
      company: job.companyName,
      description: job.shortDesc || takeFirstNWords(job.jobDescription, 50),
      postingDate: job.postingDate || '',
    })
  });

  return {
    props:{
      jobs
    }
  }
}

//Main Page
const JobListPage: NextPage<JobList> = ( props ) => {
  
  //Setting the data in a state to filter
  const [jobs, setJobs]= useState<Job[]>(props.jobs);

  //States used to Filter
  const [timeFilter, setTimeFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');

  function handleFilterSevenDays(){
    //If the timeFilter is empty, it activates the filter, removing the jobs posted more than 7 days ago
    //if the timeFilter is not empty, it desactivates the filter, removing the date value from the filter
    if( timeFilter == '' ){

      //Calculates 7 days ago
      let sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)  

      setTimeFilter(String(sevenDaysAgo))

    } else {
      //Remove Date Filter
      setTimeFilter('');

    }
  }

  function handleCompanyFilter(event: ChangeEvent<HTMLTextAreaElement>) {
    //Take the value and implement in Company Filter
    event.target.setCustomValidity('');
    setCompanyFilter(event.target.value);
  };

  useEffect(()=>{
    //Populate the Jobs in the array, filtering the company and the date
    let jobsFiltered = new Array;

    jobsFiltered = props.jobs
      .filter((job) => (companyFilter !== '' ? job.company.toUpperCase().includes(companyFilter.toUpperCase()) : true))
      .filter((job) => (timeFilter ? new Date(job.postingDate).getTime() > new Date(timeFilter).getTime() : true))

    setJobs(jobsFiltered)
  },[timeFilter, companyFilter, props.jobs])

  return (
    <div className={styles.container}>
      
      <header className={styles.header} />

      <div className={styles.filters}>
        <textarea
            placeholder="Filter by company"
            value={companyFilter}
            onChange={handleCompanyFilter}
        />
        <button
          type='button'
          onClick={handleFilterSevenDays}
          className={ (timeFilter!!)? styles.buttonClicked : styles.button}
        >
          Posted in the Past 7 Days
        </button>
      </div>

      { /* Render the first 10 Job Boxes */
        jobs.slice(0,10).map((job) => (
          <JobBox
            key={job.id}
            jobTitle={job.jobTitle}
            company={job.company}
            description={job.description}
            postingDate={job.postingDate}
          />
        ))
      }

      <footer className={styles.footer}/>

    </div>
  )
}

export default JobListPage

