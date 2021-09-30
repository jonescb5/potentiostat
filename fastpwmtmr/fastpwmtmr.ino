#define PWM_PIN 11
#define ADC_PIN A0

#define INC_DEL 50  //Delay time between incremet/decrement of dutyCycle
#define NUM_INC 127 //Num times tmr ovf isr happens before increment of dutyCycle

uint8_t dutyCycle = 0; // 0-255 for 0%-100%
uint8_t incFlag = 0;
uint8_t updn = 0;

void setup() {
  TIMSK2 = (TIMSK2 & 0b11111000) | 0b00000001; // use TIMER2_OVF_vect
  
//  BEGIN   PWM SETUP
  TCCR2B = TCCR2B & 0b11111000 | 0b00000010; // 3.9KHz
//  TCCR2B = TCCR2B & 0b11111000 | 0b00000001; // 31KHz
  pinMode(PWM_PIN, OUTPUT);
  analogWrite(PWM_PIN, dutyCycle);
//  END     PWM SETUP

  //OCR2A = 254; // compare value A
  //OCR2B = 255; // compare value B

//  BEGIN   ADC SETUP
  pinMode(ADC_PIN, INPUT);
//  END     ADC SETUP

  Serial.begin(115200);

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
      analogWrite(PWM_PIN, dutyCycle);
      if(dutyCycle == 255){
        updn = 1;
      }

    }
    else if(incFlag >= NUM_INC & updn == 1){
      incFlag = 0;
      dutyCycle--;
      analogWrite(PWM_PIN, dutyCycle);
      if(dutyCycle == 0){
        updn = 0;
      }
    }

    
    Serial.print(dutyCycle);
    Serial.print(", ");
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
