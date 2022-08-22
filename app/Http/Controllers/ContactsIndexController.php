<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Inertia\Inertia;

class ContactsIndexController
{
    public function __invoke()
    {
        return Inertia::render('Contacts/Index', [
            'contacts' => Contact::all(),
        ]);
    }
}
