#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <AsyncTCP.h>
#include <SPIFFS.h>
#include <Wire.h>
#include "soc/rtc.h"
#include "HX711.h"
#include "esp32-hal-cpu.h"

// WiFi Credentials 
#define WIFI_SSID "MAKERSPACE"                                    
#define WIFI_PASSWORD "12345678" 

const int LOADCELL_DOUT_PIN = D10;
const int LOADCELL_SCK_PIN = D9;

// Create AsyncWebServer object on port 80
AsyncWebServer server(80);
HX711 scale;

String readweight() {
  long w = scale.get_units();
  if (isnan(w)) {    
    Serial.println("Failed to read from weight sensor!");
    return "";
  }
  else {
    Serial.println(w);
    return String(w);
  }
}


void setup(){
  Serial.begin(115200);
  while(!Serial);
  
  // Connect to Wi-Fi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);                         
  while (WiFi.status() != WL_CONNECTED) {
    Serial.println(F("Not connected to WiFi."));
    delay(1000);
  }

  if (!SPIFFS.begin(true)) {
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }

  Serial.println("Does index.html exist?");
  Serial.print(SPIFFS.exists("/index.html"));

  // Print ESP32 Local IP Address
  Serial.println(WiFi.localIP());

//  Serial.println("Turning on scale.");
  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);
  scale.power_up();
  scale.set_scale(3188);
  scale.tare();
  Serial.println("Scale ready.");

  // Route for root / web page
  server.on("/", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send(SPIFFS, "/index.html");
  });
  server.on("/force", HTTP_GET, [](AsyncWebServerRequest *request){
    request->send_P(200, "text/plain", readweight().c_str());
  });
  
  // Start server
  server.begin();
}
 
void loop(){
}
