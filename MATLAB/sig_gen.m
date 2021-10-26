clc
clear

f = 3906.25;
inc = 1;

T = 1/f;
Tsw = 10;

del = 1/256;

for n = 1:256
    cnt(n) = n * del;
    
end

for n = 257:511
    cnt(n) = cnt(n-1) - del;
    
end

Ti = Tsw/length(cnt);


t = 0:Ti:(Tsw-Ti);

inputsig = timeseries(cnt, t);
