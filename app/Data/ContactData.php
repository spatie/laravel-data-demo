<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class ContactData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        public string $address,
        public string $postal,
        public string $city,
    ) {
    }
}
