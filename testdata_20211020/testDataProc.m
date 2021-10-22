clc
clear
close all

smooth = 0;

Rm = 10.24;
Rt1 = 977.5;
Rt10 = 9879;
Rleads = 0.29;
Rm1 = Rm - Rleads;
Rm2 = Rm1;


infofile = "fileinfo.csv";

fileinfo = readtable(infofile,'Delimiter', ',');

T0 = readtable(string(fileinfo.FileName(1)), 'Delimiter', ',');
T1 = readtable(string(fileinfo.FileName(2)), 'Delimiter', ',');
T2 = readtable(string(fileinfo.FileName(3)), 'Delimiter', ',');
T3 = readtable(string(fileinfo.FileName(4)), 'Delimiter', ',');
T4 = readtable(string(fileinfo.FileName(5)), 'Delimiter', ',');
T5 = readtable(string(fileinfo.FileName(6)), 'Delimiter', ',');
T6 = readtable(string(fileinfo.FileName(7)), 'Delimiter', ',');
T7 = readtable(string(fileinfo.FileName(8)), 'Delimiter', ',');


l = 10.0;

%% Test 0: 1KOhm, 3.9KHz, Vin, Vo
n = 1;


t = T1.PointFormat(12:end);
vpwm = T1.Y(12:end);
vrc = T1.Var4(12:end);

if smooth == 1
vpwm = smoothdata(vpwm, 'gaussian', 100);
vrc = smoothdata(vrc, 'gaussian', 100);
end

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



%% Test 1: 1KOhm, 3.9KHz, Vm1a, Vm1b
n=2;

t = T2.PointFormat(12:end);
vin = T2.Y(12:end);
vo = T2.Var4(12:end);

if smooth == 1
vin = smoothdata(vin, 'gaussian', 100);
vo = smoothdata(vo, 'gaussian', 100);
end

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


%% Test 2: 10KOhm, 3.9KHz, Vm1a, Vm1b
n = 3;

t = T3.PointFormat(12:end);
vm1a = T3.Y(12:end);
vm1b = T3.Var4(12:end);

if smooth == 1
vm1a = smoothdata(vm1a, 'gaussian', 100);
vm1b = smoothdata(vm1b, 'gaussian', 100);
end

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


%% Test 3: 1KOhm, 3.9KHz, Vm2a, Vm2b
n = 4;

t = T4.PointFormat(12:end);
vm1a = T4.Y(12:end);
vm1b = T4.Var4(12:end);

if smooth == 1
vm1a = smoothdata(vm1a, 'gaussian', 100);
vm1b = smoothdata(vm1b, 'gaussian', 100);
end

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


%% Test 4: 10KOhm, 3.9KHz, Vm2a, Vm2b
n = 5;

t = T5.PointFormat(12:end);
vm2a = T5.Y(12:end);
vm2b = T5.Var4(12:end);

if smooth == 1
vm2a = smoothdata(vm2a, 'gaussian', 100);
vm2b = smoothdata(vm2b, 'gaussian', 100);
end

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


%% Test 5: 1KOhm, 3.9KHz, Vc, Vcvc

n = 6;

t = T6.PointFormat(12:end);
vm2a = T6.Y(12:end);
vm2b = T6.Var4(12:end);

if smooth == 1
vm2a = smoothdata(vm2a, 'gaussian', 100);
vm2b = smoothdata(vm2b, 'gaussian', 100);
end

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


%% Test 6: 10KOhm, 3.9KHz, Vc, Vcvc
n=7;

t = T7.PointFormat(12:end);
vc = T7.Y(12:end);
vcvc = T7.Var4(12:end);

if smooth == 1
vc = smoothdata(vc, 'gaussian', 100);
vcvc = smoothdata(vcvc, 'gaussian', 100);
end

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


%% Test 7: 1KOhm, 3.9KHz, Vpwm, Vrc

n=8;

t = T8.PointFormat(12:end);
vc = T8.Y(12:end);
vcvc = T8.Var4(12:end);
    
if smooth == 1
    vc = smoothdata(vc, 'gaussian', 100);
    vcvc = smoothdata(vcvc, 'gaussian', 100);
end

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


