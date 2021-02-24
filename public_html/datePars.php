<?php

function datePars($date)
{
    $date = trim($date);
    $date = explode(' ', $date);
    if ($date[1] == "Январь") :
        $date[1] = "01";
    elseif ($date[1] == "Февраль") :
            $date[1] = "02";
    elseif ($date[1] == "Март") :
            $date[1] = "03";
    elseif ($date[1] == "Апрель") :
            $date[1] = "04";
    elseif ($date[1] == "Май") :
            $date[1] = "05";
    elseif ($date[1] == "Июнь") :
            $date[1] = "06";
    elseif ($date[1] == "Июль") :
            $date[1] = "07";
    elseif ($date[1] == "Август") :
            $date[1] = "08";
    elseif ($date[1] == "Сентябрь") :
            $date[1] = "09";
    elseif ($date[1] == "Октябрь") :
            $date[1] = "10";
    elseif ($date[1] == "Ноябрь") :
            $date[1] = "11";
    else :
            $date[1] = "12";
    endif;
    $date = "$date[2]" . "-$date[1]" . "-$date[0]" . " $date[3]";
    $date_sec = strtotime($date);
    $date_sec *= 1000;
            return $date_sec;
}
