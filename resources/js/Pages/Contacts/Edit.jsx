import Layout from "@/Layouts/Layout";
import { Link, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";

/**
 * @param {{ contact: App.Data.ContactData }} props
 */
export default function Index({ auth, contact }) {
    const { data, setData, post, processing, errors, hasErrors, wasSuccessful } = useForm(contact);

    function submit(e) {
        e.preventDefault();
        post(route("contacts.edit", contact));
    }

    return (
        <Layout title={contact}>
            {hasErrors && (
                <p className="p-4 bg-pink-50 border-pink-100 text-pink-900 -mx-8 mb-8 text-center">
                    Please correct the errors below.
                </p>
            )}
            {wasSuccessful && (
                <p className="p-4 bg-teal-50 border-teal-100 text-teal-900 -mx-8 mb-8 text-center">Contact saved.</p>
            )}
            <form className="space-y-6" onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />
                    <Input name="email" value={data.email} handleChange={(e) => setData("email", e.target.value)} />
                    <InputError message={errors.email} />
                </div>

                <div>
                    <Label forInput="name" value="Name" />
                    <Input name="name" value={data.name} handleChange={(e) => setData("name", e.target.value)} />
                    <InputError message={errors.name} />
                </div>

                <div>
                    <Label forInput="address" value="Address" />
                    <Input
                        name="address"
                        value={data.address}
                        handleChange={(e) => setData("address", e.target.value)}
                    />
                    <InputError message={errors.address} />
                </div>

                <div>
                    <Label forInput="postal" value="Postal" />
                    <Input name="postal" value={data.postal} handleChange={(e) => setData("postal", e.target.value)} />
                    <InputError message={errors.postal} />
                </div>

                <div>
                    <Label forInput="city" value="City" />
                    <Input name="city" value={data.city} handleChange={(e) => setData("city", e.target.value)} />
                    <InputError message={errors.city} />
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <Link
                            href={route("contacts")}
                            className="bg-white py-2 px-4 shadow-sm text-sm font-medium text-gray-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-shadow"
                        >
                            Cancel
                        </Link>
                        <button
                            disabled={processing}
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 shadow-md text-sm font-medium text-white bg-pink-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-shadow"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </Layout>
    );
}
