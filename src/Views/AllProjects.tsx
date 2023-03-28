import React from 'react'
import { Config } from "../config/config";
import axios from "axios"

const AllProjects = () => {
    let url = Config.URL;
    //Function to handle all projects
    const allProjects = async () => {
        const endpoint: string = `${url}/projects`;
        try {
            const { data } = await axios.get(endpoint);
        } catch (error: any) {
            console.error("Error:", error.message)
        }

    }
  return (
    <div>AllProjects</div>
  )
}

export default AllProjects