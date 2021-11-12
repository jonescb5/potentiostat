clc
clear
close all

csv = readcell('../Serial_Logs/serlog_20211109/10klog.csv');
Rname = "10k";

dac = cell2mat(csv(109:27124, 1));
adc = cell2mat(csv(109:27124, 2));

% mini = find(dac == min(dac));
% maxi = find(adc == max(adc));
% maxi = maxi(end);
% 
% dac = dac(mini:maxi);
% adc = adc(mini:maxi);

dac_ts = timeseries(dac);
adc_ts = timeseries(adc);

figure();

subplot(2,1,1)

dac_plot = plot(dac_ts);

subplot(2,1,2)

adc_plot = plot(adc_ts);
