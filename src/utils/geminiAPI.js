const prompt = `Analyze this traffic scene and provide detailed information in the following JSON format:
{
  "trafficDensity": {
    "level": "low/medium/high",
    "description": "brief description of traffic conditions",
    "peakHourStatus": "yes/no"
  },
  "vehicleAnalysis": {
    "totalCount": number,
    "composition": "description of vehicle types present",
    "emergencyVehiclesPresent": boolean
  },
  "safetyAssessment": {
    "riskLevel": "low/medium/high",
    "concerns": "detailed safety concerns if any",
    "recommendations": "safety recommendations",
    "pedestrianActivity": "low/medium/high"
  },
  "trafficFlow": {
    "status": "flowing/moderate/congested",
    "signalLogic": {
      "currentSignal": "red/yellow/green",
      "timer": number, // in seconds
      "logic": {
        // Inverse traffic control logic
        "heavyTraffic": {
          "signal": "green",
          "defaultTimer": 30
        },
        "lightTraffic": {
          "signal": "red",
          "defaultTimer": 45
        },
        "moderateTraffic": {
          "signal": "yellow",
          "defaultTimer": 15
        }
      }
    },
    "estimatedWaitTime": number // in minutes
  },
  "adaptiveControl": {
    "nextStateRecommendation": "string",
    "reasonForChange": "string",
    "priorityOverride": boolean // for emergency vehicles or special conditions
  }
}

Analysis rules:
1. For heavy traffic (vehicle count > 50):
   - Always set signal to green
   - Timer fixed at 30 seconds
   - Increase estimated wait time based on vehicle density

2. For light traffic (vehicle count < 20):
   - Always set signal to red
   - Timer should be longer (45 seconds)
   - Minimal wait time estimation

3. The system should adapt based on:
   - Emergency vehicle presence
   - Pedestrian activity
   - Peak hour status
   - Current safety risk level

4. Additional considerations:
   - Monitor for pattern changes
   - Suggest signal timing adjustments
   - Consider cross-traffic impact
   - Factor in pedestrian crossing needs`;
