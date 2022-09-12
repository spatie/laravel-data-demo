<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\MapName;
use Spatie\LaravelData\Attributes\MapOutputName;
use Spatie\LaravelData\Attributes\Validation\Rule;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Mappers\SnakeCaseMapper;
use Spatie\TypeScriptTransformer\Attributes\TypeScript;

#[TypeScript, MapOutputName(SnakeCaseMapper::class)]
class ContactData extends Data
{
    public function __construct(
        #[Rule('email')]
        public string $email,
        public string $address,
        public $anotherProperty
    )
    {

    }


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
