import { useEffect} from "react";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";
import "./css/home.css";

const ScreenView = () => {

    useEffect(() => {
        setTimeout(() => { window.location.href = '/starterpage'}, 3000);
      }, []);
    
  return (
        <>
            <div className='screen_container'>
                <div className='gradient' />
                <motion.div
                className="main_logo"
                initial={{ y: -450 }}
                animate={{ y: 0 }}
                transition={{ ease: "easeOut", duration: 2 }}
                >
                <img src={Logo} alt="logo" />
                </motion.div>
                <div className="homeHead">
                    <motion.div
                        className="home_header"
                        initial={{ y: 450 }}
                        animate={{ y: 10 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                        style={{ position: "relative" }}
                    >
                        <p>DEVGENI</p>
                    </motion.div>
                    <div className="home_subheader">
                        <p>DesiGn.DeVelop.DeLiver</p>
                    </div>
                </div>
            </div>
        </>
  
  )
}

export default ScreenView