clc
clear all
close all
disp(‘ Welcome to TEP!!!’);
disp(‘ ‘);
disp(‘ www.TheEngineeringProjects.com’);
disp(‘ ‘);
tep=serial(‘COM1’); % assign serial port object
set(tep, ‘BaudRate’, 9600); % set BaudRate to 9600
set(tep, ‘Parity’, ‘none’); % set Parity Bit to None
set(tep, ‘DataBits’, 8); % set DataBits to 8
set(tep, ‘StopBit’, 1); % set StopBit to 1
%display the properties of serial port object in MATLAB Window
disp(get(tep,{‘Type’,’Name’,’Port’,’BaudRate’,’Parity’,’DataBits’,’StopBits’}));
fopen(tep); % Open Serial Port Object
fprintf(tep,’a’); %Print character ‘a’ to the serial port
disp(‘Charater sent to Serial Port is “a”.’);
fclose(tep); %Close Serial Port Object
