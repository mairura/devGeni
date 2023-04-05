import TopBar from './Components/TopBar'
import './css/page-details.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookBtn from './Components/BookBtn'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Config } from '../config/config';
import { ISingleDev } from "./Context";
import axios from "axios";

const PageDetails = () => {

    const location = useLocation();
    const projectDetail = location.state.tagList // Access projectDetail from card page

    const stacks: any = projectDetail.tech_stack;
    const teams: any = projectDetail.team;
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
<<<<<<< HEAD
        {/* <TopBar/> */}
=======
        <TopBar/>
>>>>>>> 087ee897995e427ead0cb0fe71280759fbd1190a
        <div className='consider_page'>
        <div className='page_title'>
            {projectDetail.proj_name}
        </div>
        <div className='page_carousel'>
        </div>
        <div className='page_desc'>
            {projectDetail.description}
        </div>
        <Tabs>
            <TabList className="class_tablist">
                <Tab className="class_tabs">Stack</Tab>
                <Tab className="class_tabs">Teams</Tab>
                <Tab className="class_tabs">Stats</Tab>
            </TabList>
            <TabPanel>
                <div  className="class_tabPanel">
                    <div className='stacks_box'>
                        <h4>Technologies</h4>
                        <div className='stacks_title'>
                            {stacks.map((stack: any, index: any) => {
                                return <button key={index}>{stack}</button>    
                            })} 
                        </div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>  
                <div className='class_tabPanel'>
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
                            <Link to={`/profile/?shortName=${dev?.short_name}`} className='profile_links'>
                                <button>
                                    See Profile
                                </button>
                            </Link>
                        </div>
                    )
                })}   
                </div>  
                           
            </TabPanel>
            <TabPanel>
                <div className='class_tabPanel'>
                    <div className='stats_container'>
                        <h4>Version Control</h4>
                        <p>Github</p>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
        <BookBtn />

        </div>
       
    </div>
  )
}

export default PageDetails