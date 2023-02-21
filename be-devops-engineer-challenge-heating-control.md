
# WATTx Software Engineer Challenge: **Heating Control**

### Overview

For this task, you will need to prototype a simple heating control service consisting of temperature sensors and radiator valves.
You read temperature values from sensors and you can raise the temperature by opening the valve more and lower the temperature by closing it more.

Imagine that you have a single room with a few temperature sensors installed there and one radiator valve you can control.

Your task is to keep the room temperature at 22°C by setting the valve openness from 0 (fully closed) to 100 (fully open). The current room temperature is indicated by sensor readings.

The temperature sensors send the readings periodically to the mqtt topic. You can set the valve openness by sending a message to an mqtt topic.

### Input

You get the periodic temperature readings on the topic `/readings/room-1/temperature` in the json format:

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

Sending the message indicates that the valve should be set to 14% openness.

### Hints

- Use `docker` and `docker-compose` to orchestrate your solution
- The fastest way to get mqtt broker is to run mosquitto with docker:

    ```
    docker run -it -p 1883:1883 --name=mosquitto  toke/mosquitto
    ```

- You don't need to use fancy algorithms for temperature control; opt for something simple. If you want, you can describe a more complex solution in the README.

### Questions

tbd
