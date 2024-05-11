import React from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";

const ContactList = () => {

    return (
        <div>
            <div className="mb-2">검색</div>
            <SearchBox/>
            <ContactItem/>
        </div>
    );
};

export default ContactList;