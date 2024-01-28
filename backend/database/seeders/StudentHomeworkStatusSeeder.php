<?php

namespace Database\Seeders;

use Database\Factories\StudentHomeworkStatusFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StudentHomeworkStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        StudentHomeworkStatusFactory::new()->count(60)->create();
    }
}
