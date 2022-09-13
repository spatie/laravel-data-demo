import Authenticated from "@/Layouts/Authenticated";
import {Head, Link, useForm} from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Label from "@/Components/Label";
import InputError from "@/Components/InputError";

/**
 * @param {{ contact: App.Data.ContactData }} props
 */
export default function Index({ auth, contact }) {
    const {data, setData, post, processing, errors} = useForm(contact)

    function submit(e) {
        e.preventDefault()
        post(contact.endpoints.edit)
    }

    return (
        <Authenticated
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Contacts</h2>}
        >
            <Head>
                <title>Edit content</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white">
                            <h1 className="text-2xl font-bold">Edit contact</h1>
                            <form className="mt-8 space-y-6" onSubmit={submit}>
                                <div>
                                    <Label forInput="email" value="Email"/>
                                    <Input
                                        name="email"
                                        value={data.email}
                                        handleChange={e => setData('email', e.target.value)}
                                    />
                                    <InputError message={errors.email}/>
                                </div>

                                <div>
                                    <Label forInput="name" value="Name"/>
                                    <Input
                                        name="name"
                                        value={data.name}
                                        handleChange={e => setData('name', e.target.value)}
                                    />
                                    <InputError message={errors.name}/>
                                </div>

                                <div>
                                    <Label forInput="address" value="Address"/>
                                    <Input
                                        name="address"
                                        value={data.address}
                                        handleChange={e => setData('address', e.target.value)}
                                    />
                                    <InputError message={errors.address}/>
                                </div>

                                <div>
                                    <Label forInput="postal" value="Postal"/>
                                    <Input
                                        name="postal"
                                        value={data.postal}
                                        handleChange={e => setData('postal', e.target.value)}
                                    />
                                    <InputError message={errors.postal}/>
                                </div>

                                <div>
                                    <Label forInput="city" value="City"/>
                                    <Input
                                        name="city"
                                        value={data.city}
                                        handleChange={e => setData('city', e.target.value)}
                                    />
                                    <InputError message={errors.city}/>
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
