#define _RAMP_

int dty_inc = 0;

#define PWM_PIN 11
#define ADC_PIN A0

uint8_t dty[] = {0, 63, 127, 191, 255};



#define NUM_INC 127 //Num times tmr ovf isr happens before increment of dutyCycle
//clipping occurs at dutyCycle values less than DTY_MIN, greater than DTY_MAX 
//#define DTY_MIN 17 //dutyCycle minimum value
//#define DTY_MAX 240 //dutyCycle maximum value
#define DTY_MIN 0 //dutyCycle minimum value
#define DTY_MAX 255 //dutyCycle maximum value
#define PRESCLR 0b00000010

int numCycles = 0;

uint8_t dutyCycle = dty[dty_inc]; // 0-255 for 0%-100%
uint16_t incFlag = 0;
uint8_t updn = 0;
uint8_t ovf = 0;
//uint8_t buff[];
//int bytesSent = 0;


void setup() {
  TIMSK2 = (TIMSK2 & 0b11111000) | 0b00000001; // use TIMER2_OVF_vect
  
//  BEGIN   PWM SETUP
  TCCR2B = TCCR2B & 0b11111000 | PRESCLR;
  pinMode(PWM_PIN, OUTPUT);
  analogWrite(PWM_PIN, dutyCycle);
//  END     PWM SETUP


//  BEGIN   ADC SETUP
  pinMode(ADC_PIN, INPUT);
//  END     ADC SETUP

  Serial.begin(115200);
  delay(1000);
  
  Serial.println("waiting for input");
  while(!Serial.available()){}
  Serial.println("lets go");
}

void loop() {

  

#ifdef _RAMP_
    if(incFlag >= NUM_INC & updn == 0){
      incFlag = 0;
      dutyCycle++;
      analogWrite(PWM_PIN, dutyCycle);
      if(dutyCycle >= DTY_MAX){
        updn = 1;
      }

    }
    else if(incFlag >= NUM_INC & updn == 1){
      incFlag = 0;
      dutyCycle--;
      analogWrite(PWM_PIN, dutyCycle);
      if(dutyCycle <= DTY_MIN){
        updn = 0;
        numCycles++;
      }
    }
#else
    delay(10);
#endif
    if(ovf == 1){
      Serial.print(dutyCycle);
      Serial.print(", ");
      Serial.println(analogRead(ADC_PIN));
    }
    if(numCycles >= 1){
      Serial.println("Stopping...");
      while(1){}
    }
}


ISR(TIMER2_OVF_vect){
  incFlag++;
  ovf = 1;
}
