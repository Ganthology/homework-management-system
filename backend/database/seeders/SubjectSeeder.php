<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('subjects')->insert([
            [
                'name' => 'Mathematics',
                'description' => 'Mathematics',
            ],
            [
                'name' => 'Science',
                'description' => 'Science',
            ],
            [
                'name' => 'English',
                'description' => 'English',
            ],
            [
                'name' => 'Physics',
                'description' => 'Physics',
            ],
            [
                'name' => 'Chemistry',
                'description' => 'Chemistry',
            ],
            [
                'name' => 'Biology',
                'description' => 'Biology',
            ],
            [
                'name' => 'History',
                'description' => 'History',
            ]
        ]);
    }
}
