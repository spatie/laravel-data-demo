import React from "react";
import Layout from "@/Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import { entries, groupBy, sortBy } from "lodash";

/**
 * @param {{ contacts: ContactData[] }} props
 */
export default function Index({ auth, contacts }) {
    const groupedContacts = groupBy(
        sortBy(contacts, (contact) => contact.name),
        (contact) => contact.name.charAt(0).toUpperCase()
    );

    return (
        <Layout title="Contacts">
            <div className="space-y-10">
                {entries(groupedContacts).map(([letter, contacts]) => (
                    <div key={letter} className="flex">
                        <p className="font-bold font-serif text-5xl text-blue-400 w-24 text-center -ml-6">{letter}</p>
                        <ol className="flex-1">
                            {contacts.map((contact) => (
                                <li key={contact.id} className="py-2 border-b border-gray-100 last:border-none">
                                    <p className="flex justify-between">
                                        <Link href={route("contacts.edit", contact.id)}>{contact.name}</Link>{" "}
                                        <Link
                                            href={route("contacts.edit", contact.id)}
                                            className="text-sm text-gray-500 hover:text-pink-600"
                                        >
                                            Edit
                                        </Link>
                                    </p>
                                    <p className="text-gray-500 text-sm">{contact.email}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
