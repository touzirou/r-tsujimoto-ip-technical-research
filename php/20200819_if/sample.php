<?php

/**
 * IF文で値が代入されたときの挙動
 */

print_r("=============\n");
$a = 'test';
if ($a = 'sample') {
    print_r($a . "\n");
}

$defaultVal = 'value';
$testFalse = false;
$testTrue = true;

print_r("=============\n");
$b = $defaultVal;
if ($testFalse && $b = '12345') {
    print_r("true1\n");
} else {
    print_r("false1\n");
}
print_r($b . "\n");

print_r("=============\n");
$b = $defaultVal;
if ($testTrue && $b = 'abcde') {
    print_r("true2\n");
} else {
    print_r("false2\n");
}
print_r($b . "\n");

print_r("=============\n");
$b = $defaultVal;
if ($testTrue && $b = null) {
    print_r("true3\n");
} else {
    print_r("false3\n");
}
print_r($b . "\n");
