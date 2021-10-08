clc
clear
close all

% path = "./oscope_logs/";
path = "./AAAlogs/";

infopath = path + "fileinfo.csv";

fileinfo = readtable(infopath,'Delimiter', ',');
numLogs = height(fileinfo);
% numLogs = 2;
% for n = 2:numLogs
R = 977.4;

for n = 4:4
    filepath = path + string(fileinfo.FileName(n));
    BK = readtable(filepath, 'Delimiter', ',');
    
    plotTitle = string(fileinfo.FileName(n)) + " (" + string(fileinfo.R_test(n)) + ", " + string(fileinfo.f_pwm(n)) + ")";
    plotTitlediff = string(fileinfo.CH1(n)) +" - "+ string(fileinfo.CH2(n));
%     plotyLabel = string(fileinfo.CH1(n)) + ", "+ string(fileinfo.CH2(n))+ " (V)";
    plotyLabel = "Voltage (V)";
    BKt = BK.Var4(3:end);
    BKCH1 = BK.Var5(3:end);
    BKCH2 = BK.Var6(3:end);
    BKdiff = BKCH1 - BKCH2;
%     BKdiffr = BKCH2 - BKCH1;
    
    I = BKdiff / R;
%     Ir = BKdiffr / R;
    
    ch1ts = timeseries(BKCH1, BKt);
    ch2ts = timeseries(BKCH2, BKt);
    
    chdiffts = timeseries(BKdiff, BKt);
%     chdiffrts = timeseries(BKdiffr, BKt);
    Its = timeseries(I,BKt);
%     Irts = timeseries(Ir,BKt);

    figure(n)
    
    subplot(3,1,1)
    
    hold on
    plot(ch1ts);
    plot(ch2ts);
    legend(string(fileinfo.CH1(n)), string(fileinfo.CH2(n)));
    ylabel(plotyLabel);
    title(plotTitle);
    xlabel("Time (s)");
    hold off
    
    subplot(3,1,2)
    hold on
    plot(chdiffts);
%     plot(chdiffrts);
%     legend(string(fileinfo.CH1(n)), string(fileinfo.CH2(n)));
%     ylabel(plotyLabel);
%     title(plotTitlediff);
    xlabel("Time (s)");
    
    subplot(3,1,3)
    hold on
    plot(Its);
%     plot(Irts);
    %legend(string(fileinfo.CH1(n)), string(fileinfo.CH2(n)));
%     ylabel(plotyLabel);
%     title(plotTitlediff);
    xlabel("Time (s)");
    
%     subplot(4,1,4)
%     plot(Its);

%     figure(n)
%     
%     subplot(2,1,1)
%     hold on
%     plot(ch1ts);
%     
%     legend(string(fileinfo.CH1(n)));
%     ylabel(plotyLabel);
%     title(string(fileinfo.FileName(n)) + " (" + string(fileinfo.R_test(n)) + ", " + string(fileinfo.f_pwm(n)) + ")  "+ string(fileinfo.CH1(n)));
%     xlabel("Time (s)");
%     hold off
%     
%     subplot(2,1,2)
%     plot(ch2ts);
%     legend(string(fileinfo.CH2(n)));
%     ylabel(plotyLabel);
%     title(string(fileinfo.FileName(n)) + " (" + string(fileinfo.R_test(n)) + ", " + string(fileinfo.f_pwm(n)) + ")  "+ string(fileinfo.CH2(n)));
%     xlabel("Time (s)");
%   

end
