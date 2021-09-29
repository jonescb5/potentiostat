//float ct = A0; //ADC
//float c = 0;
//int val = 0;

void setup() {
  // put your setup code here, to run once:

  pinMode(11, OUTPUT);

  Serial.begin(115200);

  pinMode(A0,INPUT); 

}

void loop() {
  digitalWrite(11, HIGH);
  delay(10);
  digitalWrite(11, LOW);
  delay(9);
  Serial.println(analogRead(A0));
//  // put your main code here, to run repeatedly:
//  for(val = 0; val <= 255; val++){
//    c = analogRead(ct);
//    Serial.println(c);
//    delay(100);
//    OCR2A = val;
//  }
}
