<?php

namespace App\Http\Controllers\Contacts;

use App\Http\Requests\EditContactRequest;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class ContactsController
{
    public function index(): Response
    {
        return Inertia::render('Contacts/Index', [
            'contacts' => Contact::all(),
        ]);
    }

    public function edit(Contact $contact): Response
    {
        return Inertia::render('Contacts/Edit', [
            'contact' => $contact,
        ]);
    }

    public function update(EditContactRequest $request, Contact $contact): RedirectResponse
    {
        $contact->update($request->validated());

        return redirect()->back();
    }
}
