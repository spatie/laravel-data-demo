<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class ContactFactory extends Factory
{
    public function definition()
    {
        return [
            'email' => fake()->email,
            'name' => fake()->firstName,
            'address' => fake()->streetAddress,
            'postal' => fake()->postcode,
            'city' => fake()->city,
        ];
    }
}
