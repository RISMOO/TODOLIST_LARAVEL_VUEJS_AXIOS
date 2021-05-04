<?php

use Illuminate\Database\Seeder;


class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\Task::create([

            'name' => "Aller a la piscine",


        ]);

        App\Task::create([

            'name' => "Apprendre vue-js",


        ]);
        App\Task::create([

            'name' => "Se faire vacciner",


        ]);

    }

    }



