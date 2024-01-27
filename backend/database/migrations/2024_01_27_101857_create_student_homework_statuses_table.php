<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('student_homework_statuses', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignId('homework_id')->constrained('homework');
            $table->foreignId('student_id')->constrained('users');
            $table->enum('status', ['ASSIGNED', 'COMPLETED', 'IN_PROGRESS'])->default('ASSIGNED');
            $table->string('attachment')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('student_homework_statuses');
    }
};
