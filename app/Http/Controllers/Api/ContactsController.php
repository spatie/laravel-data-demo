<?php

namespace App\Http\Controllers\Api;

use App\Http\Resources\ContactResource;
use App\Models\Contact;

class ContactsController
{
    public function index()
    {
        return ContactResource::collection(Contact::all());
    }

    public function show(Contact $contact)
    {
        return new ContactResource($contact);
    }
}
