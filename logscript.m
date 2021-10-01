clc
clear
close all

path = "./oscope_logs/";
infopath = path + "fileinfo.csv";

fileinfo = readtable(infopath,'Delimiter', ',');
numLogs = height(fileinfo);

for n = 2:numLogs
    filepath = path + string(fileinfo.FileName(n));
    BK = readtable(filepath, 'Delimiter', ',');
    
    plotTitle = string(fileinfo.FileName(n)) + " (" + string(fileinfo.R_test(n)) + ", " + string(fileinfo.f_pwm(n)) + ")";
%     plotyLabel = string(fileinfo.CH1(n)) + ", "+ string(fileinfo.CH2(n))+ " (V)";
    plotyLabel = "Voltage (V)";
    BKt = BK.Var4(3:end);
    BKCH1 = BK.Var5(3:end);
    BKCH2 = BK.Var6(3:end);
    
    ch1ts = timeseries(BKCH1, BKt);
    ch2ts = timeseries(BKCH2, BKt);

    figure(n)
    hold on
    plot(ch1ts);
    plot(ch2ts);

    title(plotTitle);
    ylabel(plotyLabel);
    xlabel('Time (s)');
    legend(string(fileinfo.CH1(n)), string(fileinfo.CH2(n)));
    hold off
    
end
