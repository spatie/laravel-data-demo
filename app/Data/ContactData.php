<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\MapOutputName;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Mappers\SnakeCaseMapper;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript, MapOutputName(SnakeCaseMapper::class)]
class ContactData extends Data
{
    public function __construct(
        public int $id,
        public string $name,
        public string $email,
        public string $address,
        public string $postal,
        public string $city,
    ) {}

    public static function rules(): array
    {
        return [
            'name' => ['required'],
            'email' => ['required', 'email'],
            'address' => ['required'],
            'postal' => ['required'],
            'city' => ['required'],
        ];
    }
}
