clc
clear all
close all
tep=serialport("/dev/ttyACM0", 115200); % assign serial port object
set(tep, 'Parity', 'none'); % set Parity Bit to None
set(tep, 'DataBits', 8); % set DataBits to 8
set(tep, 'StopBit', 1); % set StopBit to 1

while true
    line = readline(tep)
    
end