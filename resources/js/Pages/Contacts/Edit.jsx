import React from 'react';
import Authenticated from "@/Layouts/Authenticated";
import {Head, Link, useForm} from "@inertiajs/inertia-react";

export default function Index({auth, contact}) {
    const {data, setData, post, processing, errors} = useForm({
        name: contact.name,
    })

    function submit(e) {
        e.preventDefault()
        post(route('contacts.edit', contact.id))
    }

    return (
        <Authenticated
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contacts</h2>}
        >
            <Head title="Edit content"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white">

                            <h1 className="text-2xl font-bold">Edit contact</h1>

                            <form onSubmit={submit}>
                                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                                    <div className="space-y-6 sm:space-y-5">
                                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                                            <label htmlFor="name"
                                                   className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                                                Name
                                            </label>
                                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                                <input
                                                    value={data.name}
                                                    onChange={e => setData('name', e.target.value)}

                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    autoComplete="given-name"
                                                    className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                                                />

                                                {errors.name &&
                                                    <div className="text-sm pt-2 text-red-700">
                                                        {errors.name}
                                                    </div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-5">
                                    <div className="flex justify-end">
                                        <Link
                                            href={route('contacts')}
                                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Cancel
                                        </Link>
                                        <button
                                            disabled={processing}
                                            type="submit"
                                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Authenticated>
    )
}
