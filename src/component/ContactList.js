import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {

    const { contactList, keyword } = useSelector((state) => state);
    let [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        if (keyword !== "") {
            let list = contactList.filter((item) => item.name.includes(keyword));

            console.log('list:' + list);

            setFilteredList(list);
        } else {
            setFilteredList(contactList);
        }
    }, [keyword, contactList]);

    return (
        <div>
            <div className="mb-2">검색</div>
            <SearchBox/>
            <div>
                {filteredList.length === 0 ?
                    contactList.map((item, index) => (
                        <ContactItem item={item} key={index} />
                    ))
                    :
                    filteredList.map((item, index) => (
                        <ContactItem item={item} key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default ContactList;