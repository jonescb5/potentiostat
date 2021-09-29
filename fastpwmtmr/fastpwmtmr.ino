#define PWM_PIN 11
#define ADC_PIN A0
#define INC_DEL 50 //Delay time between incremet/decrement of dutyCycle
#define NUM_INC 100

uint8_t dutyCycle = 0; // 0-255 for 0%-100%
uint8_t incFlag = 0;
uint8_t updn = 0;

void setup() {
  TIMSK2 = (TIMSK2 & 0b11111000) | 0b00000001; // use TIMER2_COMPA_vect
  
//  BEGIN   PWM SETUP
  TCCR2B = TCCR2B & B11111000 | B00000010; // 3.9KHz
  pinMode(PWM_PIN, OUTPUT);
  analogWrite(PWM_PIN, dutyCycle);
//  END     PWM SETUP

  //OCR2A = 254; // compare value A
  //OCR2B = 255; // compare value B

//  BEGIN   ADC SETUP
  pinMode(ADC_PIN, INPUT);
//  END     ADC SETUP

  Serial.begin(9600);

}

void loop() {
//  Serial.println("enterloop");
//  while(dutyCycle < 255){
//    if(incFlag >= NUM_INC){
//      incFlag = 0;
//      Serial.println(dutyCycle);
//      analogWrite(PWM_PIN, dutyCycle++);
//    }
//    delay(1);
//  }
//  while(dutyCycle > 0){
//    if(incFlag >= NUM_INC){
//      incFlag = 0;
//      Serial.println(dutyCycle);
//      analogWrite(PWM_PIN, dutyCycle--);
//    }
//    delay(1);
//  }


    if(incFlag >= NUM_INC & updn == 0){
      incFlag = 0;
      dutyCycle++;
      if(dutyCycle == 255){
        updn = 1;
      }

    }
    else if(incFlag >= NUM_INC & updn == 1){
      incFlag = 0;
      dutyCycle--;
      if(dutyCycle == 0){
        updn = 0;
      }
    }

    analogWrite(PWM_PIN, dutyCycle);
    Serial.println(analogRead(ADC_PIN));
}


//when TCNT2 == OCR2A
//ISR(TIMER2_COMPA_vect){
//  Serial.println(analogRead(ADC_PIN));
//}

// //when TCNT2 == OCR2B
//ISR(TIMER2_COMPB_vect){
//  incFlag++;
//}

ISR(TIMER2_OVF_vect){
  incFlag++;
}
