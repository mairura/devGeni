import './css/page-details.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BookBtn from './Components/BookBtn'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Config } from '../config/config';
import { ISingleDev } from "./Context";
import axios from "axios";
import { BsClockHistory } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";
import { MdTimeline } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GiEcology } from "react-icons/gi";

//Project Leads
// const projectLeads = [
//     {
//         name: "Dauglous Omambia"
//     },
//     {
//         name: "Cornelius Mutisya"
//     },
//     {
//         name: "Collins Koech"
//     },
//     {
//         name: "Dennis Mwangi"
//     },
//     {
//         name: "Dennoh Peter"
//     },
//     {
//         name: "Jay"
//     },
//     {
//         name: "Renny Langat"
//     },
//     {
//         name: "Enock Kipkoech"
//     },
//     {
//         name: "Nicolas Kiprop"
//     },
//     {
//         name: "Alex Muia"
//     }
// ]

const PageDetails = () => {
    const [activeTab, setActiveTab] = useState(0)

    const location = useLocation();
    const projectDetail = location.state.tagList // Access projectDetail from card page

    const stacks: any = projectDetail.tech_stack;
    const teams: any = projectDetail.team;
    let url = Config.URL;

    const[projDetails, setProjectDetails ]=useState<Array<ISingleDev>>([]);

    const updateActiveTab = (tabId : number ) => {
        setActiveTab(tabId)
    }

    const randomNum = Math.floor(Math.random() * 201) + 100;
    const randomNumber = 3 + Math.random() * 3;
    const roundedNumber = Math.round(randomNumber);

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
        <div className='consider_page'>
        <div className='page_title'>
            {projectDetail.proj_name}
        </div>
        <div className='page_carousel'>
            <img src={projectDetail.imagelink} alt="projectProf" />
        </div>
        <div className='page_desc'>
            {projectDetail.description}
        </div>
        <Tabs>
            <TabList className="class_tablist">
                <Tab onClick={() => updateActiveTab(0)} className={activeTab == 0 ? "class_tabs class_tabPanel_active" : "class_tabs" }>Stack</Tab>
                <Tab onClick={() => updateActiveTab(1)} className={activeTab == 1 ? "class_tabs class_tabPanel_active" : "class_tabs" }>Teams</Tab>
                <Tab onClick={() => updateActiveTab(2)} className={activeTab == 2 ? "class_tabs class_tabPanel_active" : "class_tabs" }>Stats</Tab>
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
                                <small><i>Software Engineer</i></small>
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
                        <div className='built_time'><div className='_icon'><BsClockHistory /></div><h4>{randomNum}&nbsp;hrs+</h4><p>build time</p>
                        </div>
                        <div className='team_lead'><div className='_icon'><RiTeamLine /></div><h4>Team Lead:</h4><p>Dauglous Omambia</p></div>  
                        <div className='skill_set'><div className='_icon'><GiSkills /></div><h4>Skill Set</h4><p>Expertise</p></div>
                        <div className='collaboration'><div className='_icon'><GiEcology /></div><h4>Collaboration</h4><p>Ngeni Labs</p></div>
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