
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

Please design a suitable infrastructure architecture for the system you developed.
