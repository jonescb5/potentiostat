clc
clear
close all

csv = readcell('../Serial_Logs/serlog_20211122/lab_test_sample.log');
Rname = "whatever";

r6 = 506;

dac = cell2mat(csv(109:26000, 1));
adc = cell2mat(csv(109:26000, 2));

dacE = ((dac * 0.0078125) - 1);
adcE = ((adc * (5/1024)) - 4.641/2);
adcI = adcE / r6; 

% mini = find(dac == min(dac));
% maxi = find(adc == max(adc));
% maxi = maxi(end);
% 
% dac = dac(mini:maxi);
% adc = adc(mini:maxi);

dac_ts = timeseries(dac);
adc_ts = timeseries(adc);


% figure();
% 
% subplot(2,1,1)
% 
% dac_plot = plot(dac_ts);
% 
% subplot(2,1,2)
% 
% adc_plot = plot(adc_ts);

figure();

plot(dacE, adcI);
xlim([-1.5 1.0])
