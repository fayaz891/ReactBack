import React,{useState} from 'react'
import AddContact from './AddContact.js'
import ContactList from './ContactList'
import Header from "./Header"
function App() {
 const [contacts, setContacts] = useState([])
  function addContHandler(contact) {
    console.log(contact)
    setContacts([...contacts, contact])
  }
  return (
    <div>
      <Header/>
      <AddContact addContHandler={addContHandler}/>
      <ContactList contacts={contacts}/>
      
    </div>
  )
}

export default App
