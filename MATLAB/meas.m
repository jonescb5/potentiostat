clc
clear
close all

measurements = readcell('../meas.xlsx');

vals.r = cell2mat(measurements(:,1));
vals.vo = cell2mat(measurements(:,2));
vals.vcvc = cell2mat(measurements(:,3));
vals.dty = cell2mat(measurements(:,4));
vals.pwm = cell2mat(measurements(:,5));

figure(1)
hold on
for i = 1:5:length(vals.r)
plot(vals.vo(i:i+4), vals.vcvc(i:i+4))
end
hold off
xlabel('Vo (V)');
% ylabel('Rtest (Ohm)');
ylabel('Vcvc (V)');
legend('1 Ohm', '10 Ohm', '100 Ohm', '1K Ohm', '10K Ohm', '100k Ohm', '1M Ohm' , '51K Ohm')
grid on
% set(gca,'YScale','log')