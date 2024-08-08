"use client";
import { getContacts } from "@/app/actions/contact";
import { Trash } from "lucide-react";
import { useEffect, useState } from "react";
import DeleteContact from "./delete-contact";

const ContactsDashboard = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const fetchedContacts = await getContacts();
        setContacts(fetchedContacts.slice(0, 10));
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch contacts:", error);
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (isLoading) {
    return (
      <div className="p-4 lg:px-0 max-w-screen-xl mx-auto">Loading...</div>
    );
  }

  return (
    <div className="p-4 lg:px-0 max-w-screen-xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Recent Contacts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <div key={contact._id} className="bg-white border  rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg mb-2">{contact.fullname}</h3>

              <DeleteContact id={contact._id} />
            </div>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Email:</span> {contact.email}
            </p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Phone:</span> {contact.phone}
            </p>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">Date:</span>{" "}
              {new Intl.DateTimeFormat("en-UK", {
                month: "short",
                year: "numeric",
                day: "numeric",
              }).format(new Date(contact.createdAt))}
            </p>
            <p className="text-sm text-gray-700 border-t pt-2">
              <span className="font-medium">Message:</span> {contact.message}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsDashboard;
