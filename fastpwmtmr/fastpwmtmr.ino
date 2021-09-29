#define PWM_PIN 11
#define ADC_PIN A0
#define INC_DEL 50 //Delay time between incremet/decrement of dutyCycle

int dutyCycle = 0; // 0-255 for 0%-100%

void setup() {

  TCCR2B = TCCR2B & B11111000 | B00000010; // 3.9KHz
  pinMode(PWM_PIN, OUTPUT);
  analogWrite(PWM_PIN, dutyCycle);

}

void loop() {
  for(dutyCycle = 0; dutyCycle < 255; dutyCycle++){
    analogWrite(PWM_PIN, dutyCycle);
    delay(INC_DEL); 
  }
  delay(INC_DEL);
  for(dutyCycle = 255; dutyCycle >= 0; dutyCycle--){
    analogWrite(PWM_PIN, dutyCycle);
    delay(INC_DEL);
  }
}
