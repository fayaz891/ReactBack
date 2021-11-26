import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {

    const renderContactList= props.contacts.map((contact,ind)=>{
        return(
           <ContactCard key={ind} contact={contact}/>
        )
    });
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        {renderContactList}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactList
