<?php

namespace App\Http\Controllers\Api;

use App\Data\ContactData;
use App\Http\Resources\ContactResource;
use App\Models\Contact;

class ContactsController
{
    public function index()
    {
        return ContactData::collection(Contact::all());
        //return ContactResource::collection(Contact::all());

    }

    public function show(Contact $contact)
    {
        return ContactData::from($contact);
    }
}
