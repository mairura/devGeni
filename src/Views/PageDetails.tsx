import TopBar from './Components/TopBar'
import './css/page-details.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookBtn from './Components/BookBtn'
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Config } from '../config/config';
import { ISingleDev } from "./Context";
import axios from "axios";

const PageDetails = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const proj_name: any = urlParams.get("projectTitle");
    const proj_desc = urlParams.get("projectDesc");
    const proj_team: any = urlParams.get("projectTeam");
    const stack: any = urlParams.get("projectStacks");
    const stacks = stack.split(",");
    const teams = proj_team.split(",");
    let url = Config.URL;

    const[projDetails, setProjectDetails ]=useState<Array<ISingleDev>>([]);

    useEffect(() => {
    async function getData() {
        const items:any = await Promise.all(
            teams.map(async (index:any)=>{
            const data: any = await axios.get(`${url}/index/dev/${index}`);
        let item:any={
            name:data.data.name,
            profile_img_link:data.data.profile_img_link,  
            short_name:data.data.short_name     
        }    
        return item
    })
    )
        setProjectDetails(items)
    }
        getData();
    }, [])


  return (
    <div className='page_container'>
        <TopBar/>
        <div className='page_title'>
            {proj_name}
        </div>
        <div className='page_carousel'>
        </div>
        <div className='page_desc'>
            {proj_desc}
        </div>
        <Tabs>
            <TabList className="class_tablist">
                <Tab className="class_tabs">Stack</Tab>
                <Tab className="class_tabs">Teams</Tab>
                <Tab className="class_tabs">Stats</Tab>
            </TabList>
            <TabPanel>
                <div className='stacks_box'>
                    <h4>Technologies</h4>
                    <div className='stacks_title'>
                        {stacks.map((stack: any, index: any) => {
                            return <button key={index}>{stack}</button>    
                        })} 
                    </div>
                </div>
            </TabPanel>
            <TabPanel>    
                {projDetails.map((dev: any, index: any) => {
                    return (
                        <div className='teams_data' key={index}>
                            <div className='teams_profile'>
                                <img src={dev.profile_img_link} alt="profile" />
                            </div>
                            <div className='profile_names'>
                                <p>{dev.name}</p>
                                <small>{dev.short_name}</small>
                            </div>
                            <Link to={`/profile/?name=${dev?.name}&shortName=${dev?.short_name}&profilePic=${dev?.profile_img_link}&profileLink=${dev?.profile_link}&devStack=${dev?.tech_stack}`} className='profile_links'>
                                <button>
                                    See Profile
                                </button>
                            </Link>
                        </div>
                    )
                })}   
                           
            </TabPanel>
        </Tabs>
        <BookBtn />
    </div>
  )
}

export default PageDetails