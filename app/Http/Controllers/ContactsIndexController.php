<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ContactsIndexController
{
    public function __invoke()
    {
        return Inertia::render('Contacts/Index');
    }
}
