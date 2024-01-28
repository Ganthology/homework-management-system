<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StudentHomeworkStatus>
 */
class StudentHomeworkStatusFactory extends Factory
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
            'homework_id' => $this->faker->numberBetween(1, 20),
            'student_id' => User::factory()->student()->create()->id,
            'status' => 'ASSIGNED',
        ];
    }
}
