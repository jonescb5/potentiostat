clc
clear
close all


csva = readcell('../Serial_Logs/serlog_20211202/glucose_100mV_24k_48k.log');
% csvb = readcell('../Serial_Logs/serlog_20211202/ascorbic_500mV_24k_48k.log');

% r6a = 11780;
% r5a = 23700;
% Vba = -4.892;

r6a = 2 * 11780;
r5a = 2 * 23700;
Vba = -4.877;

% r6b = 24000;
% r5b = 48000;
% Vbb = -5.0;

timeT = 100; % ms
timeT = timeT * 10^-3;
dur = 100; % s


strta = 20;
bota = (dur / timeT) + strta;
% bota = 456;

timea = cell2mat(csva(strta:bota, 1));
adca = cell2mat(csva(strta:bota, 2));


% strtb = 43;
% botb = (dur / timeT) + strtb;
% 
% timeb = cell2mat(csvb(strtb:botb, 1));
% adcb = cell2mat(csvb(strtb:botb, 2));


% timea = cell2mat(csva(0:end, 1));
% adca = cell2mat(csva(0:end, 2));
% 
% timeb = cell2mat(csvb(0:end, 1));
% adcb = cell2mat(csvb(0:end, 2));



timea = timeT .* timea;
adcEa = ((adca .* (5/1024)) + Vba/2);
adcIa = adcEa ./ r6a; 
adcIa = adcIa .* 10^6;

% timeb = timeT .* timeb;
% adcEb = ((adcb .* (5/1024)) + Vbb/2);
% adcIb = adcEb ./ r6b; 

adcIa = smoothdata(adcIa, 'gaussian', 100);
% adcIb = smoothdata(adcIb, 'gaussian', 500);

tsa = timeseries(adcIa, timea);
% tsb = timeseries(adcIb, timeb);



figure();

% subplot(2,1,1)

plot(tsa);
xlim([0 100])
% xticks([-3*pi -2*pi -pi 0 pi 2*pi 3*pi])
% xticklabels({'-1.500 V','-1.000 V','-500 mV','0.000 V','500.0 mV','1.000 V'})
%ylim([-200 200])
% yticks([-0.004 -0.002 0 0.002 0.004])
% yticklabels({'-4.000 mA','-2.000 mA','0.000 A','2.000 mA','4.000 mA'})
xlabel("Time (s)");
ylabel("Im (uA)");
title('glucose 100mV 24k 48k');

% subplot(2,1,2)
% 
% plot(tsb);
% % xlim([-1.5 1.0])
% % xticks([-3*pi -2*pi -pi 0 pi 2*pi 3*pi])
% % xticklabels({'-1.500 V','-1.000 V','-500 mV','0.000 V','500.0 mV','1.000 V'})
% % yticks([-0.004 -0.002 0 0.002 0.004])
% % yticklabels({'-4.000 mA','-2.000 mA','0.000 A','2.000 mA','4.000 mA'})
% xlabel("Time (s)");
% ylabel("Im (A)");
% title('ascorbic 500mV 24k 48k');

