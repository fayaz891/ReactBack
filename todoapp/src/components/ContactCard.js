import React from 'react'
import img1 from "../images/img1.jpg"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ContactCard(props) {
    const {name,email} = props.contact;
    
    return (
        <div>
             <div className="card w-50 mx-auto mt-3 d-flex justify-content-between flex-row">
             <span className="d-flex align-items-center">
                 <img src={img1} width="60px" height="60px" className="rounded-circle" alt="img1" />
             </span>
            <div className="card-body">
                <div className="card-header">
                    {name}
                </div>
                <div className="d-flex justify-content-between">
                    {email}
                    <DeleteForeverIcon color="error" fontSize="large"/>
                </div>
                
            </div>
            </div>
        </div>
    )
}

export default ContactCard
