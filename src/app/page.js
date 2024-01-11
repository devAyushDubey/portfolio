import Script from "next/script";
import PageBox from "@/components/common/PageBox";
import * as Contentstack from "contentstack"

const stack = Contentstack.Stack(process.env.API_KEY,process.env.ACCESS_TOKEN,process.env.ENV_NAME);

export default async function Home() {

  const aboutQuery = stack.ContentType('ad_portfolio_about').Entry('blta9a3444a1bf458d3');
  const serviceQuery = stack.ContentType('ad_portfolio_services').Query();
  const expQuery = stack.ContentType('ad_portfolio_experience').Query();
  const skillsQuery = stack.ContentType('ad_portfolio_skills').Query();
  const projectsQuery = stack.ContentType('ad_portfolio_projects').Query();

  let [ aboutRes, serviceRes, expRes, skillsRes, projectsRes ] = await Promise.all([aboutQuery.toJSON().fetch(),serviceQuery.toJSON().find(),expQuery.toJSON().find(),skillsQuery.toJSON().find(),projectsQuery.toJSON().find()]);
  
  // console.log(serviceRes)
  serviceRes = await sort(serviceRes[0]);
  expRes = await sort(expRes[0]);
  skillsRes = await sort(skillsRes[0]);
  projectsRes = await sort(projectsRes[0]);
  
  return (<PageBox about={aboutRes} service={serviceRes} exp={expRes} skills={skillsRes} projects={projectsRes}/>);
}

async function sort(list) {
  await list.sort((a,b)=>{
    if(a.position > b.position) return 1;
    if(a.position < b.position) return -1;
    return 0;
  })
  return list
}