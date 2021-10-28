clc
clear
close all

% prompt = 'Scan In Data? Y/N [Y]: ';
% str = input(prompt,'s');
% if isempty(str)
%     str = 'Y';
% end

%% Get File Info
infoFile = "fileinfo.csv";

fileInfo = readtable(infoFile,'Delimiter', ',');
numLogs = height(fileInfo);

PlotProperties = readtable('PlotProperties.xlsx');

%% Get Log Data
for n = 1:numLogs

    
    csv = readcell(string(fileInfo.FileName(n)));


    if strcmp(csv{1,2}, 'MSO2024B')
        scopeLog(n).time       = cell2mat(csv(16:end, 1));
        scopeLog(n).ch1        = cell2mat(csv(16:end, 2));
        scopeLog(n).ch1Peak    = cell2mat(csv(16:end, 3));
        scopeLog(n).ch2        = cell2mat(csv(16:end, 4));
        scopeLog(n).ch2Peak    = cell2mat(csv(16:end, 5));
        scopeLog(n).x          = scopeLog(n).time;
        scopeLog(n).y          = scopeLog(n).time;
    else
        error('Oscope Model Not Supported.')Rm1 = Rm - Rleads;
    end 
    
    
end
%% Special
Rm = 10.24;
Rt1 = 977.5;
Rt10 = 9879;
Rleads = 0.29;
Rm1 = Rm - Rleads;
Rm2 = Rm1;

smooth = 1;
factor = 100;

if smooth
    for i = 1:numLogs
        scopeLog(i).ch1 = smoothdata(scopeLog(i).ch1, 'gaussian', factor);
        scopeLog(i).ch2 = smoothdata(scopeLog(i).ch2, 'gaussian', factor);
    end
end

i = 2;
scopeLog(i).y = (scopeLog(i).ch1 - scopeLog(i).ch2)/Rm1;

i = 3;
scopeLog(i).y = (scopeLog(i).ch1 - scopeLog(i).ch2)/Rm1;

i = 4;
scopeLog(i).x = (scopeLog(i).ch1 - scopeLog(i).ch2);
scopeLog(i).y = (scopeLog(i).ch1 - scopeLog(i).ch2)/Rm2;

i = 5;
scopeLog(i).x = (scopeLog(i).ch1 - scopeLog(i).ch2);
scopeLog(i).y = (scopeLog(i).ch1 - scopeLog(i).ch2)/Rm2;

%%%%%
%% Plot Data
close all
for n = 1:numLogs
    

    switch PlotProperties.PlotType(n)
        case 1
            
            x1 = scopeLog(n).time;
            y1 = scopeLog(n).ch1;
            x2 = scopeLog(n).time;
            y2 = scopeLog(n).ch2;
            
            title1 = PlotProperties.Title1(n);
            xlabel1 = PlotProperties.xlabel1(n);
            ylabel1 = PlotProperties.ylabel1(n);
            
            title2 = PlotProperties.Title2(n);
            xlabel2 = PlotProperties.xlabel2(n);
            ylabel2 = PlotProperties.ylabel2(n);
            
            legend1 = string(PlotProperties.Legend1a(n));
            legend2 = string(PlotProperties.Legend2a(n));

            figure(n)

            subplot(2,1,1)
            hold on
            plot(x1, y1)
            xlabel(xlabel1);
            ylabel(ylabel1);
            title(title1);
            legend(legend1);
            hold off

            subplot(2,1,2)
            hold on
            plot(x2, y2)
            xlabel(xlabel2);
            ylabel(ylabel2);
            title(title2);
            legend(legend2);
            hold off
            
        case 2
            
            x1 = scopeLog(n).time;
            y1a = scopeLog(n).ch1;
            y1b = scopeLog(n).ch2;
            x2 = scopeLog(n).x;
            y2 = scopeLog(n).y;
            
            title1 = PlotProperties.Title1(n);
            xlabel1 = PlotProperties.xlabel1(n);
            ylabel1 = PlotProperties.ylabel1(n);
            
            title2 = PlotProperties.Title2(n);
            xlabel2 = PlotProperties.xlabel2(n);
            ylabel2 = PlotProperties.ylabel2(n);
            
            legend1a = string(PlotProperties.Legend1a(n));
            legend1b = string(PlotProperties.Legend1b(n));
            legend2 = string(PlotProperties.Legend2a(n));

            figure(n)

            subplot(2,1,1)
            hold on
            plot(x1, y1a)
            plot(x1, y1b)
            xlabel(xlabel1);
            ylabel(ylabel1);
            title(title1);
            legend(legend1a,legend1b);
            hold off

            subplot(2,1,2)
            hold on
            plot(x2, y2)
            xlabel(xlabel2);
            ylabel(ylabel2);
            title(title2);
            legend(legend2);
            hold off
            
        otherwise
            continue
    end
        
    
end

