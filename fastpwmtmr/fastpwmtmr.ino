float ct = A0; //ADC
float c = 0;
int val = 0;

void setup() {
  // put your setup code here, to run once:
//  pinMode(3, OUTPUT);
  pinMode(11, OUTPUT);
  TCCR2A = _BV(COM2A1) | _BV(COM2B1) | _BV(WGM21) | _BV(WGM20);
//  TCCR2B = _BV(CS22);
  OCR2A = val;
//  OCR2B = 50;
  Serial.begin(9600);
  //pinMode(a,OUTPUT);
  pinMode(ct,INPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
  for(val = 0; val <= 255; val++){
    c = analogRead(ct);
    Serial.print(val);
    Serial.print(", ");
    Serial.println(c);
//    Serial.println(val + ", " + c + ", ");
    delay(100);
    OCR2A = val;
  }
}
