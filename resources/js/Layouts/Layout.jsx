import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Layout({ title, children }) {
    return (
        <div className="max-w-lg mx-auto px-8 pt-12 pb-8 bg-white border-l-8 border-blue-100 my-12">
            <Head title={title} />
            <header className="font-serif text-4xl italic font-medium text-center">{title}</header>
            <main className="pt-10">{children}</main>
            <p className="text-center mt-12">
                <Link
                    href={route("logout")}
                    method="post"
                    as="button"
                    className="text-sm text-gray-400 hover:text-pink-600"
                >
                    Log Out
                </Link>
            </p>
        </div>
    );
}
