clc
clear
close all

csv = readcell('../Oscope_Logs/testdata_20211026/T0003ALL.CSV');
n = 1;
scopeLog(n).time       = cell2mat(csv(16:end, 1));
scopeLog(n).ch1        = cell2mat(csv(16:end, 2));
scopeLog(n).ch1Peak    = cell2mat(csv(16:end, 3));
scopeLog(n).ch2        = cell2mat(csv(16:end, 4));
scopeLog(n).ch2Peak    = cell2mat(csv(16:end, 5));
scopeLog(n).x          = scopeLog(n).time;
scopeLog(n).y          = scopeLog(n).time;

Rm = 10.24;
Rleads = 0.29;
Rm1 = Rm - Rleads;

i = 1;
% scopeLog(i).x = scopeLog(i).ch1;
scopeLog(i).y = (scopeLog(i).ch1 - scopeLog(i).ch2)/Rm1;

smooth = 1;
factor = 100;

x1 = scopeLog(n).time;
y1a = scopeLog(n).ch1;
y1b = scopeLog(n).ch2;
x2 = scopeLog(n).x;
y2 = scopeLog(n).y;

if smooth
y1a = smoothdata(y1a, 'gaussian', factor);
y1b = smoothdata(y1b, 'gaussian', factor);
y2 = smoothdata(y2, 'gaussian', factor);
end
x2 = y1a;
title1 = 'Measurement Resistor Voltage on Ce'; 
ylabel1 = 'E (V)';
xlabel1 = 't (s)'; 

title2 = 'Polarization Curve'; 
xlabel2 = 'E (V)';
ylabel2 =  'I (A)';

legend1a = 'ye';
legend1b = 'ye';
legend2 = 'ye';

figure(n)

subplot(2,1,1)
hold on
plot(x1, y1a)
plot(x1, y1b)
xlabel(xlabel1);
ylabel(ylabel1);
title(title1);
% legend(legend1a,legend1b);
hold off

subplot(2,1,2)
hold on
plot(x2, y2)
xlabel(xlabel2);
ylabel(ylabel2);
title(title2);
% legend(legend2);
hold off