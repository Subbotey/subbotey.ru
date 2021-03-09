<?php

require 'vendor/autoload.php';

use \PhpOffice\PhpSpreadsheet\Shared\Date;

$file = 'data.xlsx'; // файл для получения данных
$excel = \PhpOffice\PhpSpreadsheet\IOFactory::load($file); // подключить Excel-файл

$excel->setActiveSheetIndex(0); // получить данные из указанного листа
$sheet = $excel->getActiveSheet();

// формирование html-кода с данными
$html = '<table>';
foreach ($sheet->getRowIterator() as $row) {
    $html .= '<tr>';
    $cellIterator = $row->getCellIterator();
    foreach ($cellIterator as $cell) {
        // значение текущей ячейки
        $value = $cell->getCalculatedValue();

        // если дата, то преобразовать в формат PHP
        if (Date::isDateTime($cell)) {
            $value = date('d.m.Y', Date::excelToTimestamp($cell->getValue()));
        }

        $html .= '<td>'.$value.'</td>';
    }
    $html .= '<tr>';
}
$html .= '</table>';

// вывод данных
echo $html;
