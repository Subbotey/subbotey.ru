<?php

namespace subbotey ;

class Granpa
{
    public $body ='Нормальное';
}

class Father extends Granpa
{
    protected $hair = 'Русые';

    public function reColor($color)
    {
        $this->hair = $color;
        echo $this->hair;
    }
}

$masha = new Father();
$masha->reColor('Белые');