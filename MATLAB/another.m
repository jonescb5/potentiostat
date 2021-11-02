clc
clear
close all

csv = readcell('../Oscope_Logs/testdata_20211102/T0001ALL.CSV');
n = 1;
scopeLog(n).time       = cell2mat(csv(16:end, 1));
scopeLog(n).ch1        = cell2mat(csv(16:end, 2));
scopeLog(n).ch1Peak    = cell2mat(csv(16:end, 3));
scopeLog(n).ch2        = cell2mat(csv(16:end, 4));
scopeLog(n).ch2Peak    = cell2mat(csv(16:end, 5));
scopeLog(n).x          = scopeLog(n).time;
scopeLog(n).y          = scopeLog(n).time;

Vcvc = scopeLog(n).ch2;

R6 = 11770;

iin = Vcvc/R6;

plot(scopeLog(n).ch1, iin);