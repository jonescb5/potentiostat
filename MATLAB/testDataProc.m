clc
clear
close all

Rm = 10.24;
Rt1 = 977.5;
Rt10 = 9879;
Rleads = 0.29;
Rm1 = Rm - Rleads;
Rm2 = Rm1;


infofile = "fileinfo.csv";

fileinfo = readtable(infofile,'Delimiter', ',');


BK1 = readtable(string(fileinfo.FileName(1)), 'Delimiter', ',');
BK2 = readtable(string(fileinfo.FileName(2)), 'Delimiter', ',');
BK3 = readtable(string(fileinfo.FileName(3)), 'Delimiter', ',');
BK4 = readtable(string(fileinfo.FileName(4)), 'Delimiter', ',');
BK5 = readtable(string(fileinfo.FileName(5)), 'Delimiter', ',');
BK6 = readtable(string(fileinfo.FileName(6)), 'Delimiter', ',');
BK7 = readtable(string(fileinfo.FileName(7)), 'Delimiter', ',');
BK8 = readtable(string(fileinfo.FileName(8)), 'Delimiter', ',');

l=10000; %2 second plot width
%{%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    TEST 1
%    Vpwm, Vrc
%}%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
n = 1;

c = 17753;
lower = c - l/2;
upper = c + l/2;
t = BK1.Var4(lower:upper);
vpwm = BK1.Var5(lower:upper);
vrc = BK1.Var6(lower:upper);


% vpwm = smoothdata(vpwm, 'gaussian', 100);
% vrc = smoothdata(vrc, 'gaussian', 100);

vpwmts = timeseries(vpwm, t);
vrcts = timeseries(vrc, t);

% f = fft(vpwm, l);
% plot(f);
figure(n)

%top plot
subplot(2,1,1)

% plotTitle = {"PWM Sweep Measurement (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
plotTitle = {"PWM Sweep Measurement" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "Voltage (V)";
leg = "Vpwm";


hold on

plot(vpwmts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off

%bottom plot
subplot(2,1,2)

% plotTitle = {"RC Filter Output (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
plotTitle = {"RC Filter Output" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "Voltage (V)";
leg = "Vrc";


hold on

plot(vrcts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off



%{%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    TEST 2
%    Vin, Vo
%}%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
n=2;
c = 21003;
lower = c - l/2;
upper = c + l/2;
t = BK2.Var4(lower:upper);
vin = BK2.Var5(lower:upper);
vo = BK2.Var6(lower:upper);

vin = smoothdata(vin, 'gaussian', 100);
vo = smoothdata(vo, 'gaussian', 100);

vints = timeseries(vin, t);
vots = timeseries(vo, t);


figure(n)

%top plot
subplot(2,1,1)

plotTitle = {"DAC Output Measurement (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "V";
leg = "Vin";


hold on

plot(vints);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off

%bottom plot
subplot(2,1,2)

plotTitle = {"Summing Amp Output Measurment (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "V";
leg = "Vo";


hold on

plot(vots);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off


%{%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    TEST 3
%    Vm1a, Vm1b, Im1, 1k
%}%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
n = 3;
c = 21503;
lower = c - l/2;
upper = c + l/2;
t = BK3.Var4(lower:upper);
vm1a = BK3.Var5(lower:upper);
vm1b = BK3.Var6(lower:upper);

vm1a = smoothdata(vm1a, 'gaussian', 100);
vm1b = smoothdata(vm1b, 'gaussian', 100);
vdiff = vm1a - vm1b;
im1 = (vm1a - vm1b)/Rm1;

% im1 = smoothdata(im1);

vm1ats = timeseries(vm1a, t);
vm1bts = timeseries(vm1b, t);
im1ts = timeseries(im1, vdiff);


figure(n)

%top plot
subplot(2,1,1)

plotTitle = {"Counter Electrode Voltage Measurment (Rm1) (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "E (V)";


hold on

plot(vm1ats);
plot(vm1bts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend("Vm1a","Vm1b");

hold off

%bottom plot
subplot(2,1,2)

plotTitle = {"Counter Electrode Derived Current (Rm1) (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "I (A)";
leg = "Im1";


hold on

plot(im1ts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off


%{%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    TEST 4
%    Vm1a, Vm1b, Im1, 10k
%}%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
n = 4;
c = 24253;
lower = c - l/2;
upper = c + l/2;
t = BK4.Var4(lower:upper);
vm1a = BK4.Var5(lower:upper);
vm1b = BK4.Var6(lower:upper);

vm1a = smoothdata(vm1a, 'gaussian', 100);
vm1b = smoothdata(vm1b, 'gaussian', 100);
vdiff = vm1a - vm1b;

im1 = (vm1a - vm1b)/Rm1;

vm1ats = timeseries(vm1a, t);
vm1bts = timeseries(vm1b, t);
im1ts = timeseries(im1, vdiff);


figure(n)

%top plot
subplot(2,1,1)

plotTitle = {"Counter Electrode Voltage Measurment (Rm1) (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "E (V)";
% leg = "";


hold on

plot(vm1ats);
plot(vm1bts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
% legend(leg);
legend("Vm1a","Vm1b");

hold off

%bottom plot
subplot(2,1,2)

plotTitle = {"Counter Electrode Derived Current (Rm1) (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "E (V)";
yaxis = "I (A)";
leg = "Im1";


hold on

plot(im1ts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off


%{%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    TEST 5
%    Vm2a, Vm2b, Im2, 1k
%}%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
n = 5;
c = 23428;
lower = c - l/2;
upper = c + l/2;
t = BK5.Var4(lower:upper);
vm2a = BK5.Var5(lower:upper);
vm2b = BK5.Var6(lower:upper);

vm2a = smoothdata(vm2a, 'gaussian', 100);
vm2b = smoothdata(vm2b, 'gaussian', 100);
vdiff = vm2a - vm2b;
im2 = (vm2a - vm2b)/Rm2;

vm1ats = timeseries(vm2a, t);
vm1bts = timeseries(vm2b, t);
im1ts = timeseries(im2, vdiff);


figure(n)

%top plot
subplot(2,1,1)

plotTitle = {"Test Resistor Voltage Measurment (Rm2) (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "E (V)";


hold on

plot(vm1ats);
plot(vm1bts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend("Vm2a","Vm2b");

hold off

%bottom plot
subplot(2,1,2)

plotTitle = {"Test Resistor Polarization Curve (Rm2) (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "E (V)";
yaxis = "I (A)";
leg = "Im2";


hold on

plot(im1ts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off


%{%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    TEST 6
%    Vm2a, Vm2b, Im2, 10k
%}%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

n = 6;
c = 25003;
lower = c - l/2;
upper = c + l/2;
t = BK6.Var4(lower:upper);
vm2a = BK6.Var5(lower:upper);
vm2b = BK6.Var6(lower:upper);

vm2a = smoothdata(vm2a, 'gaussian', 100);
vm2b = smoothdata(vm2b, 'gaussian', 100);
vdiff = vm2a - vm2b;
im2 = (vm2a - vm2b)/Rm2;

vm1ats = timeseries(vm2a, t);
vm1bts = timeseries(vm2b, t);
im1ts = timeseries(im2, vdiff);


figure(n)

%top plot
subplot(2,1,1)
    
plotTitle = {"Test Resistor Voltage Measurment (Rm2) (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "E (V)";
% leg = "";


hold on

plot(vm1ats);
plot(vm1bts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
% legend(leg);
legend("Vm2a","Vm2b");

hold off

%bottom plot
subplot(2,1,2)

plotTitle = {"Test Resistor Polarization Curve (Rm2) (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "E (V)";
yaxis = "I (A)";
leg = "Im2";


hold on
%axis auto
plot(im1ts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off


%{%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    TEST 7
%    Vc, Vcvc, 1k
%}%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
n=7;
c = 20853;
lower = c - l/2;
upper = c + l/2;
t = BK7.Var4(lower:upper);
vc = BK7.Var5(lower:upper);
vcvc = BK7.Var6(lower:upper);

vc = smoothdata(vc, 'gaussian', 100);
vcvc = smoothdata(vcvc, 'gaussian', 100);

vcts = timeseries(vc, t);
vcvcts = timeseries(vcvc, t);


figure(n)

%top plot
subplot(2,1,1)

plotTitle = {"Transimpedence Amp Voltage Measurment (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "V";
leg = "Vc";


hold on

plot(vcts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off

%bottom plot
subplot(2,1,2)

plotTitle = {"Ouput Measurement (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "V";
leg = "Vcvc";


hold on

plot(vcvcts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off


%{%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%    TEST 8
%    Vc, Vcvc, 10k
%}%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

n=8;
c = 23178;
lower = c - l/2;
upper = c + l/2;
t = BK8.Var4(lower:upper);
vc = BK8.Var5(lower:upper);
vcvc = BK8.Var6(lower:upper);

vc = smoothdata(vc, 'gaussian', 100);
vcvc = smoothdata(vcvc, 'gaussian', 100);

vcts = timeseries(vc, t);
vcvcts = timeseries(vcvc, t);


figure(n)

%top plot
subplot(2,1,1)

plotTitle = {"Transimpedence Amp Voltage Measurment (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "V";
leg = "Vc";


hold on

plot(vcts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off

%bottom plot
subplot(2,1,2)

plotTitle = {"Ouput Measurement (Gaussian, 100)" ; " (" + string(fileinfo.FileName(n))+ ", " + string(fileinfo.R_test(n))+ ", " + string(fileinfo.f_pwm(n)) + ")"};
xaxis = "Time (s)";
yaxis = "V";
leg = "Vcvc";


hold on

plot(vcvcts);

title(plotTitle);
xlabel(xaxis);
ylabel(yaxis);
legend(leg);

hold off


