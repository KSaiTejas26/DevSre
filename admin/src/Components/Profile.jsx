import React from "react";
import Header from "./Admin/Header";
import Image from "./ProfileImage";
import Editable from "./ProfileDataEditable";
const Profile = ()=>{
    return(
        <>
            <Header/>
            <div>
                <Image/>
            </div>
            <h1 style={{justifyContent:'center',alignItems:'center',display:'flex',marginTop:'5%'}}>
                PROFILE
            </h1>
            <div style={{marginTop:'1%'}}>
                <Editable/>
            </div>
        </>
    )
};

export default Profile;