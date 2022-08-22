<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class ContactFactory extends Factory
{
    public function definition()
    {
        return [
            'first_name' => fake()->firstName,
            'last_name' => fake()->lastName,
            'address' => fake()->address,
            'postal' => fake()->postcode,
            'city' => fake()->city,
        ];
    }
}
