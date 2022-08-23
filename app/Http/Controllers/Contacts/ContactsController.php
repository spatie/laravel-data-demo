<?php

namespace App\Http\Controllers\Contacts;

use App\Data\ContactData;
use App\Http\Requests\EditContactRequest;
use App\Models\Contact;
use Inertia\Inertia;

class ContactsController
{
    public function index()
    {
        return Inertia::render('Contacts/Index', [
            'contacts' => Contact::all(),
        ]);
    }

    public function edit(Contact $contact)
    {
        return Inertia::render('Contacts/Edit', [
            'contact' => $contact,
        ]);
    }

    public function update(ContactData $contactData , Contact $contact)
    {
        $contact->update($contactData->toArray());

        return redirect()->route('contacts');
    }
}
