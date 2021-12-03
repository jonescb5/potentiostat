clc
clear
close all


csv = readcell('../Serial_Logs/serlog_20211202/ascorbic_1V_12k_24k.log');

r6 = 506;

% strt = 12154;
% bot = 18261;

% strt = 12154;
% bot = 18500;
% 
% dac = cell2mat(csv(strt:bot, 1));
% adc = cell2mat(csv(strt:bot, 2));



% mini = find(dac == min(dac));
% maxi = find(adc == max(adc));
% maxi = maxi(end);
% 
% dac = dac(mini:maxi);
% adc = adc(mini:maxi);

dacE = ((dac * 0.0078125) - 1);
adcE = ((adc * (5/1024)) - 4.641/2);
adcI = adcE / r6; 

% dac_ts = timeseries(dac);
% adc_ts = timeseries(adc);


% figure();
% 
% subplot(2,1,1)
% 
% dac_plot = plot(dac_ts);
% 
% subplot(2,1,2)
% 
% adc_plot = plot(adc_ts);

% figure();
% 
% plot(dacE, adcI, 'r', 'LineWidth', 2);
% xlim([-1.5 1.0])
% % xticks([-3*pi -2*pi -pi 0 pi 2*pi 3*pi])
% xticklabels({'-1.500 V','-1.000 V','-500 mV','0.000 V','500.0 mV','1.000 V'})
% yticks([-0.004 -0.002 0 0.002 0.004])
% yticklabels({'-4.000 mA','-2.000 mA','0.000 A','2.000 mA','4.000 mA'})
% xlabel("Vf (V vs. Ref.)");
% ylabel("Im (A)");
% title("Linear Sweep Voltammetry");

time = 100 .* dac;

figure();

plot(time, adcI);
% xlim([-1.5 1.0])
% xticks([-3*pi -2*pi -pi 0 pi 2*pi 3*pi])
% xticklabels({'-1.500 V','-1.000 V','-500 mV','0.000 V','500.0 mV','1.000 V'})
% yticks([-0.004 -0.002 0 0.002 0.004])
% yticklabels({'-4.000 mA','-2.000 mA','0.000 A','2.000 mA','4.000 mA'})
xlabel("Time (s)");
ylabel("Im (A)");
title("Ascorbic 1V (R5 = 24K, R6 = 12K)");

