const expertiseDetails=[
    {
        title:'Frontend',
        description:'Building beautiful, responsive, and accessible user interfaces.',
    },
    {
        title:'Backend',
        description:'Creating robust, scalable, and secure backend solutions.',
    },
    {
        title:'Cloud and DevOps',
        description:'Deploying and managing applications with efficiency and reliability.',
    }
]

export class About{
    getExpertiseCardDetails(){
    return expertiseDetails;
    }
}