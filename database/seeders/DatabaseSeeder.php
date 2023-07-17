<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Contact;
use App\Models\Group;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Freek',
            'email' => 'freek@spatie.be',
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ]);

        Contact::factory()->create([
            'name' => 'Seb De Deyne',
            'email' => 'sebastian@photography.org',
        ]);

        Contact::factory()->create([
            'name' => 'Taylor Otwell',
            'email' => 'taylor@kirk-and-spock-portraits.org',
        ]);

        Contact::factory()->create([
            'name' => 'Matt Stauffer',
            'email' => 'matt@write-everything-twice.company',
        ]);

        Contact::factory()->create([
            'name' => 'Stephen Rees Carter',
            'email' => 'valorin@middle-earth.net',
        ]);

        Contact::factory()->create([
            'name' => 'Jake Bennett',
            'email' => 'jake@statemachines.com',
        ]);

        /*
        Contact::factory()->create([
            'name' => 'Ian Landsman',
            'email' => 'ian@godfather.com',
        ]);
        */

        Contact::factory()->create([
            'name' => 'Zuzana Kunckova',
            'email' => 'zuzana@larabelles.com',
        ]);

        Contact::factory()->create([
            'name' => 'Christoph Rumpel',
            'email' => 'christoph@no-more-encore.at',
        ]);

        Contact::factory()->create([
            'name' => 'Chris Fidao',
            'email' => 'chris@servers-r-us.com',
        ]);

        Contact::factory()->create([
            'name' => 'Aaron Francis',
            'email' => 'aaron@twotwins.com',
        ]);

        Contact::factory()->create([
            'name' => 'Caleb Porzio',
            'email' => 'caleb@livewire-is-life.com',
        ]);

        Contact::factory()->create([
            'name' => 'Caneco',
            'email' => 'caneco@can-you-see-my-screen.pt',
        ]);

        Contact::factory()->create([
            'name' => 'Nuno Maduro',
            'email' => 'nuno@pest-is-the-best.org',
        ]);

        /*
        Contact::factory()->create([
            'name' => 'Luke Downing',
            'email' => 'luke@the-parrot-company.com',
        ]);
        */

        Contact::factory()->create([
            'name' => 'Marcel Pociot',
            'email' => 'marcel@jail-jail-jail.in',
        ]);

        Contact::factory()->create([
            'name' => 'Francisco Madeira',
            'email' => 'francisco@tank.pt',
        ]);

        Contact::factory()->create([
            'name' => 'Vishal Rajpurohit',
            'email' => 'vishal@offroad-driving.in',
        ]);

        Contact::factory()->create([
            'name' => 'Povilas Korop',
            'email' => 'povilas@youtube.com',
        ]);

        Contact::factory()->create([
            'name' => 'Michael Dyrynda',
            'email' => 'michael@thenpingme.com',
        ]);

        Contact::factory()->create([
            'name' => 'Jason McCreary',
            'email' => 'keepon@shifting.com',
        ]);

        Contact::factory()->create([
            'name' => 'Eric Barnes',
            'email' => 'eric@laravel-news.com',
        ]);

        Contact::factory()->create([
            'name' => 'James Brooks',
            'email' => 'james@checkmango.net',
        ]);

        Contact::factory()->create([
            'name' => 'Dries Vints',
            'email' => 'dries@professional-cyclers.be',
        ]);

        Contact::factory()->create([
            'name' => 'Jess Archer',
            'email' => 'jess@vim-4-ever.com',
        ]);

        Contact::factory()->create([
            'name' => 'Rias Van der Veken',
            'email' => 'rias@guildwards.com',
        ]);

        Contact::factory()->create([
            'name' => 'Alex Vanderbist',
            'email' => 'alex@handcrafted.synths',
        ]);

        Contact::factory()->create([
            'name' => 'Ruben Van Assche',
            'email' => 'ruben@craft-beers.org',
        ]);

        Contact::factory()->create([
            'name' => 'Niels Vanpachtenbeke',
            'email' => 'niels@wordpress.org',
        ]);
    }
}
