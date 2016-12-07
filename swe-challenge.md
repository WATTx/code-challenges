# WATTx Software Engineer Challenge


## Heating Control


For this task, you will need to prototype a simple heating control service.


Imagine that you have a single room where you can control a radiator valve and a few temperature sensors installed there.


The temperature sensors send the readings periodically to the mqtt topic.


Your task is to keep the room temperature at 22C (as indicated by sensor readings) by setting the valve from 0 (fully closed) to 100 (fully open).


You should set the valve by sending a specific message to a specific mqtt topic.


### Input


You will use the periodic temperature readings on the topic `/readings/temperature` in the json format:


```json
{
  "sensorID": "sensor-1",
  "type": "temperature",
  "value": 25.3
}
```


Receiving this message should indicate that Sensor 1 reads 25.3C for the area of the room where it has been installed.


### Output


You will need to send the valve value to the topic `/actuators/room-1` in the json format:


```json
{
  "level": 14
}
```


Sending the message indicates that the valve should be set to 14% openness.


### Hints


- You're free to use any language and any libraries. Think about the best fit for solving the task. As we use `go` for such problems, we'd be pleased if you used `go` if you are familiar with it. Remember that the next step would be a pair programming session with one of our engineers, so you need to be comfortable with the language you've choosen.


- The fastest way to get mqtt broker is to run mosquitto with docker:
    ```
    docker run -it -p 1883:1883 --name=mosquitto  toke/mosquitto
    ```
    
- Don't use fancy algorithms for temperature control; opt for something simple. If you want, you can describe a more complex solution in the README.


### Too easy?


If you finished the task quickly and feel like doing more (that's completely optional):
- You can imagine that there's also a motion sensor and you want to keep the room warm only when motion is present.
- You can imagine there are a lot of rooms! And the sensors and valves should be controlled on per room basis.
- You can imagine any other limitations you think would be fun to work with.
