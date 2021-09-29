//  Script from
//  Gabriel N. Meloni, "Building a Microcontroller based potentiostat: A Inexpensive and
//  versatile platform for teaching electrochemistry and instrumentation."
//  
//  "Basic Arduino script used to run electrochemical experiments. ... 
//  The script presented below was used to automatically perform cyclic voltammetry
//  experiments at different scan rates as seen in the diffusion coefficient determination section
//  of the main manuscript. All the parameters (scan rates and potential window) can be
//  defined in the software."


//Script starts
#include <LiquidCrystal.h>


LiquidCrystal lcd(8, 9, 4, 5, 6, 7);
int a = 10;
int val = 0;
float ct = A0; //ADC
float c = 0;
int n = 0;
float Potstep = 0.0078; // fixed due to the DAC resolution
int vevals[] = {100,20,50,100,200,250,300}; //multiple scan rates values (mV/s)
int const count = 6;
long intervalos[count];


void setup() {
  TCCR1B = TCCR1B & B11111000 | B00000001; //Set dividers to change PWM frequency
  Serial.begin(9600);
  pinMode(a,OUTPUT);
  pinMode(ct,INPUT);
//  analogWrite(a, 127);
}

void loop() {
  for(int pos = 0; pos < count; pos++){
    intervalos[pos]=(1000000L/((vevals[pos])*128L));
  }
  for(int pos = 0; pos <= count; pos++){
    n = 0;
    while(n <= 1){
      //Start the forward scan
      for(val = 0; val <= 255; val++){    
        analogWrite(a,val);
        Serial.print(val);
        delay(intervalos[pos]);
        //c = ((0.00195*(analogRead(ct))-1)*1000); // Current reading outputs in uA!!!
        c =analogRead(ct);
        Serial.print(", ");
        Serial.print(c);
        Serial.print(" ");
        Serial.println(n);
//        Serial.print(" ");
//        Serial.print(vevals[pos]);
//        Serial.print(" ");
//        Serial.println(intervalos[pos]);
       }
      //Start the reverse scan
      for(val = 255; val >= 0; val--){
        analogWrite(a,val);
        Serial.print(val);
        delay(intervalos[pos]);
        //c = ((0.00195*(analogRead(ct))-1)*1000); // Current reading outputs in uA!!!c =analogRead(ct);
        c =analogRead(ct);
        Serial.print(" ");
        Serial.print(c);
        Serial.print(" ");
        Serial.println(n);
//        Serial.print(" ");
//        Serial.print(vevals[pos]);
//        Serial.print(" ");
//        Serial.println(intervalos[pos]);
      }
      n=n+1;
    }
  }
}
//Script ends
