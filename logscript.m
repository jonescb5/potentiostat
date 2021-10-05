clc
clear
close all

% path = "./oscope_logs/";
path = "./AAAlogs/";

infopath = path + "fileinfo.csv";

fileinfo = readtable(infopath,'Delimiter', ',');
numLogs = height(fileinfo);
% numLogs = 2;
for n = 1:numLogs
    filepath = path + string(fileinfo.FileName(n));
    BK = readtable(filepath, 'Delimiter', ',');
    
    plotTitle = string(fileinfo.FileName(n)) + " (" + string(fileinfo.R_test(n)) + ", " + string(fileinfo.f_pwm(n)) + ")";
%     plotyLabel = string(fileinfo.CH1(n)) + ", "+ string(fileinfo.CH2(n))+ " (V)";
    plotyLabel = "Voltage (V)";
    BKt = BK.Var4(3:end);
    BKCH1 = BK.Var5(3:end);
    BKCH2 = BK.Var6(3:end);
%     BKdiff = BKCH1 - BKCH2;
    
    ch1ts = timeseries(BKCH1, BKt);
    ch2ts = timeseries(BKCH2, BKt);
    
%     ch1ts = timeseries(BKdiff, BKt);

    figure(n)
    %subplot(2,1,1)
    hold on
    plot(ch1ts);
    %subplot(2,1,2)
    plot(ch2ts);
    legend(string(fileinfo.CH1(n)), string(fileinfo.CH2(n)));
    ylabel(plotyLabel);
    title(plotTitle);
    xlabel("Time (s)");
    hold off
  

end
