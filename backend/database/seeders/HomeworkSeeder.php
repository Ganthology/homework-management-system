<?php

namespace Database\Seeders;

use Database\Factories\HomeworkFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HomeworkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        HomeworkFactory::new()->count(20)->create();
    }
}
