<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function homework()
    {
        if ($this->role === 'TEACHER') {
            return $this->hasMany(Homework::class, 'author_id')->get();
        }

        if ($this->role === 'STUDENT') {
            $homeworkIds = $this->hasMany(StudentHomeworkStatus::class, 'student_id')
                ->select('homework_id')
                ->groupBy('homework_id')
                ->pluck('homework_id');

            return Homework::whereIn('id', $homeworkIds)->get();
        }
    }
}
