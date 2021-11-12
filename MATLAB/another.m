clc
clear
close all

csv = readcell('../Oscope_Logs/testdata_20211109/T0004ALL.CSV');
Rname = "Sample";

n = 1;
scopeLog(n).time       = cell2mat(csv(16:end, 1));
scopeLog(n).ch1        = cell2mat(csv(16:end, 2));
scopeLog(n).ch1Peak    = cell2mat(csv(16:end, 3));
scopeLog(n).ch2        = cell2mat(csv(16:end, 4));
scopeLog(n).ch2Peak    = cell2mat(csv(16:end, 5));
scopeLog(n).x          = scopeLog(n).time;
scopeLog(n).y          = scopeLog(n).time;

Vo = scopeLog(n).ch1;
Vcvc = scopeLog(n).ch2;

Vo = smoothdata(Vo, 'gaussian', 500);
Vcvc = smoothdata(Vcvc, 'gaussian', 500);

mini = find(Vo == min(Vo));
maxi = find(Vo == max(Vo));
maxi = maxi(end);

Vo = Vo(mini:maxi);
Vcvc = Vcvc(mini:maxi);
t = scopeLog(n).time(mini:maxi);

ipt = findchangepts(Vcvc);



Vo_ts = timeseries(Vo, t);
Vcvc_ts = timeseries(Vcvc, t);




figure();

subplot(2,1,1);

Vo_plot = plot(Vo_ts);

title(Rname + " - Vo");
ylabel('E/V');
xlim([t(1) t(end)])
datatip(Vo_plot)
datatip(Vo_plot,'DataIndex',ipt)
datatip(Vo_plot,'DataIndex',maxi)

subplot(2,1,2);

Vcvc_plot = plot(Vcvc_ts);
title(Rname + " - Vcvc");
ylabel('E/V');
xlim([t(1) t(end)])
hline(Vcvc(1))
hline(Vcvc(end))
vline(t(ipt))
datatip(Vcvc_plot)
datatip(Vcvc_plot,'DataIndex',ipt)
datatip(Vcvc_plot,'DataIndex',maxi)


% someticks = -400:100:400;
figure();

potential = - Vo;
res_plot = plot(potential, Vcvc);

title(Rname + " - Polarization Curve");
ylabel('E/V - Vcvc (Iin)');
xlabel('E/V')
ylim([0 5])
xlim([-1.25 1.25])
datatip(res_plot)
datatip(res_plot,'DataIndex',ipt)
datatip(res_plot,'DataIndex',maxi)
% yticks(someticks)
