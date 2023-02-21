
# WATTx Software Engineer Challenge: **Heating Control**

Please Note: The challenge contains two parts:

1. Implementation part
2. DevOps part

## Intro

One of our customers – a German Mittelstand company in the heating industry – wants to launch a new startup. The goal of the startup is to improve energy efficiency in private households by providing a smart valve control. You are assigned with designing and implementing a first prototype for the backend for this task.

## 1. Implementation

For this task, imagine you are given **one room** that contains

- **five** temperature sensors that are sending temperature values
- **one** radiator that you can control dynamically

The current room temperature is is indicated by the sensor readings that are sent periodically to an mqtt topic. You can adapt the valve openness of the radiator from 0 (fully closed) to 100 (fully opened) to control the heating power. If you want to lower the temperature you have to reduce the valve setting, if you want to raise it, you have to increase the valve value. Your goal is to achieve a cosy constant room temperature of **22°C**.
You need to set the valve openness by sending a message to an mqtt topic.

Please simulate a system that runs continuously over the cycle of a day.

### Input

You get the periodic temperature readings on the topic `/readings/room-1/temperature` in this json format:

```json
{
  "sensorID": "sensor-1",
  "type": "temperature",
  "value": 25.3
}
```

Receiving this message should indicate that Sensor 1 reads 25.3°C at its location.

### Output

You will need to send the valve openness value to the topic `/actuators/room-1` in the json format:

```json
{
  "level": 14
}
```

Sending this message indicates that the valve should be set to 14% openness.

### Hints

- Use `docker` and `docker-compose` to orchestrate your solution
- The fastest way to get mqtt broker is to run mosquitto with docker:

    ```
    docker run -it -p 1883:1883 --name=mosquitto  toke/mosquitto
    ```

- You don't need to use fancy algorithms for temperature control; opt for something simple. If you want, you can describe a more complex solution in the README.

## 2. DevOps

Imagine that you are working on a real-life heating control system that allows thousands o users to control their devices using a webapp and a mobile app. Please design a suitable infrastructure architecture for such a system.
We do not expec you to actually create an infrastructure or write any code but rather a description, optionally with some simple diagrams. This will be the base for a conversation with one of our engineers. 
Example topics that you might consider are:

* What kind of 3rd party tools and provides would you use?
* How would you deploy (assume there migh be multiple deployments / day) and maintain such infrastructure?
* What would you do to ensure that it is easy to deploy a copy of a system across multiple environments?
* How would you ensure that the system is highly available?
* What kind of tools and techniues could be used to ensure that real-time high volume data communication is possible across the parts of the system itself as well as any 3rd party providers?
* How would you design monitoring and failure recovery systems?
* Any considerations about the network setup?
* How would you handle performing recurring tasks such as automated builds, test runs etc.?

