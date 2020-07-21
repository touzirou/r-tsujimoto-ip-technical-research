<?php

print_r("存在しない要素を指定\n");
$sample = [];
var_dump(empty($sample[0]));
var_dump($sample[0]);

print_r("unsetによる挙動\n");
$sample2 = ['a', 'b', 'c', 'd'];
var_dump($sample2);
unset($sample2[0]);
var_dump($sample2);

print_r("shiftによる挙動\n");
$sample3 = ['1', '2', '3'];
var_dump($sample3);
var_dump(array_shift($sample3));
var_dump($sample3);

print_r("空配列に対してshift\n");
$sample4 = [];
var_dump($sample4);
var_dump(array_shift($sample4));
var_dump($sample4);

print_r("endの挙動\n");
$sample5 = ['x', 'y', 'z'];
var_dump($sample5);
var_dump(end($sample5));