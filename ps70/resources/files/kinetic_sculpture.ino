const int A1A = 3;  
const int A1B = 4;  
const int button = 13; 

int speed = 100; 

void setup() {
  pinMode(A1A, OUTPUT);     
  pinMode(A1B, OUTPUT);
  pinMode(button, INPUT);

  analogWrite(A1A, speed);   
  digitalWrite(A1B, LOW);

  Serial.begin(9600);
}

void loop() {
  Serial.println(speed);

  if(digitalRead(button) == HIGH) {
    switch(speed) {
      case 100:
        speed = 150;
        break;

      case 150: 
        speed = 200;
        break;

      case 200:
        speed = 100;
        break;
    } 
    analogWrite(A1A, speed);
    digitalWrite(A1B, LOW);
    delay(500);
  }
}