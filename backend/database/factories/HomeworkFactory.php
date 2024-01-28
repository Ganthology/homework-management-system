<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Homework>
 */
class HomeworkFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            "title" => $this->faker->sentence(),
            "due_date" => $this->faker->dateTimeBetween('now', '+2 week'),
            "author_id" => User::factory()->teacher()->create()->id,
            "subject_id" => $this->faker->numberBetween(1, 7)
        ];
    }
}
