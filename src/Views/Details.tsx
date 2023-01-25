import React from "react";
import { Link } from "react-router-dom";
import "./css/details.css";
import { greater, team, stack } from "../icons";

const Details = () => {
  return (
    <>
      <div className="details_container">
        <div className="details_header">
          <h3 style={{ color: "#fff" }}>DEVGENI</h3>
          <p style={{ color: "#fff" }}>Team and Skill Matching Engine</p>
        </div>
        <div className="search-bar">
          <form>
            <select>
              <option value="">Choose Stack</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Javascript">Javascript</option>
              <option value="Typescript">Typescript</option>
              <option value="Solidity">Solidity</option>
              <option value="NodeJS">NodeJS</option>
              <option value="Rust">Rust</option>
              <option value="MongoDB">MongoDB</option>
              <option value="PHP">PHP</option>
              <option value="Ethers">EthersJS</option>
              <option value="NextJS">NextJS</option>
            </select>
            <button type="submit" className="select btn">
              Search Project
            </button>
            {/* <div className="current-tags">
              {tags.map((item, i) => (
                <div key={i + 1} className="tag">
                  <p>{item}</p>
                </div>
              ))}
            </div> */}
          </form>
        </div>
        <div className="details_container">
          <div className="details_projects">
            <div className="details_project">
              <h3>BSC Chain Sniper Bot</h3>
              <p>
                To create a bsc (pancakeswap) sniper bot. The bot should be able
                to search for addLiquidity functions/methods for multiple
                specific tokens concurrently.
              </p>
            </div>
            <div className="project_stack">
              <span>{team}</span>
              <span>
                <p>3</p>
              </span>
              <span>{stack}</span>
              <span>
                <p>ReactJS</p>
              </span>
              <span>
                <p>+&nbsp;2&nbsp;more</p>
              </span>
            </div>
            <span className="greater">
              <p>{greater}</p>
            </span>
          </div>
          {/* <div className="details_projects">
            <div className="details_project">
              <h3>GAURAV NFT MARKETPLACE</h3>
              <p>
                An NFT marketplace where:A seller puts in details as to where
                can they ship item (with physical shipping limitations),Buyer
                can only see/ or buy item if seller is able to...
              </p>
            </div>
            <div className="project_stack">
              <span>{team}</span>
              <span>
                <p>3</p>
              </span>
              <span>{stack}</span>
              <span>
                <p>ReactJS</p>
              </span>
              <span>
                <p>+&nbsp;2&nbsp;more</p>
              </span>
            </div>
            <span className="greater">
              <p>{greater}</p>
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Details;
