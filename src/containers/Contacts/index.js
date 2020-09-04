import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Provider";
// import getContacts from "../../context/actions/contacts/getContacts";
// import { useHistory } from "react-router-dom";
// import ContactsListUI from "../../layout/Contacts/List";
// import deleteContact from "../../context/actions/contacts/deleteContact";
// import startUnstar from "../../context/actions/contacts/startUnstar";
import Header from "../../components/Header"

function ContactsContainer() {

	const context = useContext(GlobalContext)

	console.log(context)

  return (
    <div>
      <Header />
      <h1>Contacts</h1>
    </div>
  );
}

export default ContactsContainer;
