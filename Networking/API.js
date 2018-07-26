import axios from 'axios';
axios.defaults.baseURL = 'https://vjobs.herokuapp.com';

const getJobs= () => (
    axios.get('/jobs')
    .then(response => response.data)
);

const getJobsId= (id) => (
    axios.get('/jobs/'+id)
    .then(response => response.data)
);

module.exports = {
    getJobs,
    getJobsId
}