export interface Question {
  question: string;
  options: string[];
  correct: number;
}


const iotQuestions: Question[] = [
  {
    question: "What does CoAP stand for?",
    options: [
      "Common Application Protocol",
      "Constrained Application Protocol",
      "Coherent Application Protocol",
      "Connected Application Protocol"
    ],
    correct: 1
  },
  {
    question: "What is the main advantage of CoAP over HTTP in IoT?",
    options: [
      "Larger header size",
      "Smaller header size",
      "Higher bandwidth usage",
      "Lower latency"
    ],
    correct: 1
  },
  {
    question: "What does the MAC layer in IEEE 802.15.4 standardize?",
    options: [
      "Physical layer",
      "Application layer",
      "Link layer",
      "Network layer"
    ],
    correct: 2
  },
  {
    question: "Which type of networks does IEEE 802.15.4 MAC focus on?",
    options: [
      "High bandwidth networks",
      "Constrained environment networks",
      "Long-range communication networks",
      "Satellite communication networks"
    ],
    correct: 1
  },
  {
    question: "What is the maximum frame length in IEEE 802.15.4 PHY?",
    options: [
      "127 bytes",
      "1280 bytes",
      "576 bytes",
      "250 kbps"
    ],
    correct: 0
  },
  {
    question: "What is the typical throughput of IEEE 802.15.4 PHY?",
    options: [
      "1 Gbps",
      "10 Mbps",
      "250 kbps",
      "100 kbps"
    ],
    correct: 2
  },
  {
    question: "What does RPL stand for in the context of IPv6?",
    options: [
      "Routing Protocol for Low-Power and Lossy Networks",
      "Routing Protocol for Local Networks",
      "Robust Protocol Layer",
      "Redundant Path Layer"
    ],
    correct: 0
  },
  {
    question: "Which RFC defines RPL?",
    options: [
      "RFC 6282",
      "RFC 6550",
      "RFC 1234",
      "RFC 5678"
    ],
    correct: 1
  },
  {
    question: "What does 6LoWPAN stand for?",
    options: [
      "IPv6 over Low Power Wide Area Network",
      "IPv6 over Low Power Wireless Personal Area Network",
      "IPv6 over Local Power Wireless Personal Area Network",
      "IPv6 over Limited Power Wireless Personal Area Network"
    ],
    correct: 1
  },
  {
    question: "What is the main function of 6LoWPAN?",
    options: [
      "Increase data throughput",
      "Reduce packet size for transmission",
      "Enhance security protocols",
      "Provide long-range communication"
    ],
    correct: 1
  },
  {
    question: "What does UDP stand for?",
    options: [
      "User Data Protocol",
      "User Datagram Protocol",
      "Unified Data Protocol",
      "Universal Datagram Protocol"
    ],
    correct: 1
  },
  {
    question: "What is a key characteristic of UDP?",
    options: [
      "Connection-oriented",
      "Reliable",
      "Connectionless",
      "High overhead"
    ],
    correct: 2
  },
  {
    question: "What layer does CoAP operate in the IoT protocol stack?",
    options: [
      "Physical Layer",
      "Link Layer",
      "Network Layer",
      "Application Layer"
    ],
    correct: 3
  },
  {
    question: "Which layer is responsible for compressing and fragmenting IPv6 packets in IoT?",
    options: [
      "Application Layer",
      "Transport Layer",
      "6LoWPAN Adaptation Layer",
      "Network Layer"
    ],
    correct: 2
  },
  {
    question: "What is the minimum MTU size for IPv6?",
    options: [
      "576 bytes",
      "127 bytes",
      "1280 bytes",
      "250 bytes"
    ],
    correct: 2
  },
  {
    question: "Why is IPv6 preferred in IoT networks?",
    options: [
      "Larger header size",
      "Smaller address space",
      "Supports a vast number of devices",
      "Incompatibility with 6LoWPAN"
    ],
    correct: 2
  },
  {
    question: "What is a primary function of the Link Layer in the IoT stack?",
    options: [
      "Data presentation",
      "Routing",
      "Sharing medium and sending communications",
      "Security management"
    ],
    correct: 2
  },
  {
    question: "Which IEEE standard is used for Ethernet?",
    options: [
      "IEEE 802.3",
      "IEEE 802.11",
      "IEEE 802.15.4",
      "IEEE 802.15.1"
    ],
    correct: 0
  },
  {
    question: "What is the main feature of route-over routing in IoT?",
    options: [
      "Uses the link layer for forwarding data",
      "Uses the network layer for routing",
      "Suitable for smaller local networks",
      "Considered to be one IP subnet"
    ],
    correct: 1
  },
  {
    question: "What type of traffic does RPL support?",
    options: [
      "Unicast only",
      "Multicast only",
      "Broadcast only",
      "Multipoint-to-point and point-to-multipoint"
    ],
    correct: 3
  },
  {
    question: "What does the 6LoWPAN Adaptation Layer do with IPv6 packets?",
    options: [
      "Encrypts them",
      "Compresses and fragments them",
      "Converts them to IPv4",
      "Expands their size"
    ],
    correct: 1
  },
  {
    question: "What additional header is used in 6LoWPAN for packet reassembly?",
    options: [
      "IPHC Header",
      "Fragment Header",
      "UDP Header",
      "TCP Header"
    ],
    correct: 1
  },
  {
    question: "What is the focus of IEEE 802.15.4 standard?",
    options: [
      "High-speed data transfer",
      "Long-range communication",
      "Low power, low bandwidth communication",
      "High memory usage devices"
    ],
    correct: 2
  },
  {
    question: "Which IEEE standard is used for Bluetooth?",
    options: [
      "IEEE 802.15.4",
      "IEEE 802.11",
      "IEEE 802.15.1",
      "IEEE 802.3"
    ],
    correct: 2
  },
  {
    question: "What is a major security challenge in 6LoWPAN implementation?",
    options: [
      "Large packet sizes",
      "High power consumption",
      "Susceptibility to packet fragmentation attacks",
      "High cost"
    ],
    correct: 2
  },
  {
    question: "Which layer is responsible for security in IoT protocol stack?",
    options: [
      "Physical Layer",
      "Link Layer",
      "Network Layer",
      "Application Layer"
    ],
    correct: 2
  },
  {
    question: "What is mesh-under routing in IoT?",
    options: [
      "Routing at the network layer",
      "Routing at the link layer",
      "Routing at the application layer",
      "Routing at the transport layer"
    ],
    correct: 1
  },
  {
    question: "Which is better suited for smaller and local networks, mesh-under or route-over?",
    options: [
      "Mesh-under",
      "Route-over",
      "Both",
      "Neither"
    ],
    correct: 0
  },
  {
    question: "What is a key feature of RPL related to energy?",
    options: [
      "High power consumption",
      "Energy-efficient routing",
      "Energy-intensive topology changes",
      "No energy management"
    ],
    correct: 1
  },
  {
    question: "Why is energy efficiency important in IoT?",
    options: [
      "To increase bandwidth",
      "To prolong battery life of devices",
      "To enhance security",
      "To reduce latency"
    ],
    correct: 1
  },
  {
    question: "What does 6LoWPAN use to reduce the size of IPv6 packets?",
    options: [
      "Encryption",
      "Header compression",
      "Header expansion",
      "Fragmentation only"
    ],
    correct: 1
  },
  {
    question: "Which field does 6LoWPAN assume common usage of to compress IPv6 headers?",
    options: [
      "Unique fields",
      "Optional fields",
      "Common fields",
      "Mandatory fields"
    ],
    correct: 2
  },
  {
    question: "How does 6LoWPAN handle large IPv6 packets?",
    options: [
      "Drops them",
      "Expands them",
      "Fragments and reassembles them",
      "Encrypts them"
    ],
    correct: 2
  },
  {
    question: "What happens to the additional fragment header after reassembly in 6LoWPAN?",
    options: [
      "It is kept",
      "It is discarded",
      "It is expanded",
      "It is compressed"
    ],
    correct: 1
  },
  {
    question: "What role does the 6LoWPAN Edge Router play?",
    options: [
      "Only local data exchange",
      "Data exchange between 6LoWPAN devices and the Internet",
      "Provides power to devices",
      "Manages security keys"
    ],
    correct: 1
  },
  {
    question: "Which layers does the Dual Stack in the Edge Router support?",
    options: [
      "Only IPv6",
      "Only 6LoWPAN",
      "Both IPv6 and 6LoWPAN",
      "Only IPv4"
    ],
    correct: 2
  },
  {
    question: "What is an advantage of 6LoWPAN?",
    options: [
      "High power consumption",
      "High latency",
      "End-to-end IP addressable nodes",
      "Proprietary protocols"
    ],
    correct: 2
  },
  {
    question: "What type of routing does 6LoWPAN support?",
    options: [
      "One-to-one routing only",
      "One-to-many & many-to-one routing",
      "One-to-all routing",
      "Only broadcast routing"
    ],
    correct: 1
  },
  {
    question: "What does MAC stand for in the context of IEEE 802.15.4?",
    options: [
      "Media Access Control",
      "Memory Access Control",
      "Media Application Control",
      "Memory Application Control"
    ],
    correct: 0
  },
  {
    question: "Which protocol is unreliable and connectionless?",
    options: [
      "TCP",
      "UDP",
      "HTTP",
      "CoAP"
    ],
    correct: 1
  },
  {
    question: "What specific security mechanisms are currently adopted for 6LoWPAN?",
    options: [
      "AES encryption",
      "None specific",
      "RSA encryption",
      "TLS encryption"
    ],
    correct: 1
  },
  {
    question: "What type of attack is 6LoWPAN susceptible to?",
    options: [
      "DOS attack",
      "Packet fragmentation attack",
      "Phishing attack",
      "Malware attack"
    ],
    correct: 1
  },
  {
    question: "Which protocol is connection-oriented and reliable?",
    options: [
      "UDP",
      "CoAP",
      "TCP",
      "IPv6"
    ],
    correct: 2
  },
  {
    question: "Which protocol provides communication services directly to the application layer in IoT?",
    options: [
      "HTTP",
      "CoAP",
      "UDP",
      "TCP"
    ],
    correct: 2
  },
  {
    question: "What is used to reassemble fragmented packets in 6LoWPAN?",
    options: [
      "Encryption header",
      "Fragment header",
      "Compression header",
      "IPv6 header"
    ],
    correct: 1
  },
  {
    question: "Why does 6LoWPAN fragment IPv6 packets?",
    options: [
      "To increase packet size",
      "To fit them into smaller 802.15.4 frames",
      "To enhance security",
      "To reduce latency"
    ],
    correct: 1
  },
  {
    question: "What is the key enabler of the IoT revolution according to the content?",
    options: [
      "Wi-Fi",
      "6LoWPAN",
      "Ethernet",
      "Bluetooth"
    ],
    correct: 1
  },
  {
    question: "What does IPHC stand for in the context of 6LoWPAN?",
    options: [
      "Internet Protocol Header Compression",
      "Internet Protocol Header Control",
      "Internet Protocol Header Configuration",
      "Internet Protocol Header Calculation"
    ],
    correct: 0
  },
  {
    question: "Which layer in the IoT stack provides data formatting and presentation for web transfer?",
    options: [
      "Physical Layer",
      "Link Layer",
      "Network Layer",
      "Application Layer"
    ],
    correct: 3
  },
  {
    question: "Which type of protocol is CoAP compared to in the content?",
    options: [
      "HTTP",
      "FTP",
      "SMTP",
      "SNMP"
    ],
    correct: 0
  },
  {
    question: "Who coined the term 'Internet of Things'?",
    options: [
      "Tim Berners-Lee",
      "Kevin Ashton",
      "Steve Jobs",
      "Bill Gates"
    ],
    correct: 1
  },
  {
    question: "What year was the first patent for an RFID tag received?",
    options: [
      "1963",
      "1973",
      "1983",
      "1993"
    ],
    correct: 1
  },
  {
    question: "Which device was an early example of connected objects in the 1980s?",
    options: [
      "Microwave Oven",
      "Coffee Maker",
      "Coke Vending Machine",
      "Digital Clock"
    ],
    correct: 2
  },
  {
    question: "What technology did the Auto ID Centre at MIT use to connect objects?",
    options: [
      "Bluetooth",
      "WiFi",
      "RFID technology",
      "Zigbee"
    ],
    correct: 2
  },
  {
    question: "In which year did major publications highlight the potential of IoT in home automation and healthcare?",
    options: [
      "2000",
      "2004",
      "2008",
      "2012"
    ],
    correct: 1
  },
  {
    question: "Who invented the barcode and in what year?",
    options: [
      "Norman Joseph Woodland in 1945",
      "Alan Turing in 1955",
      "Tim Berners-Lee in 1965",
      "Steve Jobs in 1975"
    ],
    correct: 0
  },
  {
    question: "What does a sensor do?",
    options: [
      "It converts electrical signals into physical actions.",
      "It senses and measures physical quantities and converts them into digital values.",
      "It stores data in the cloud.",
      "It processes data into meaningful information."
    ],
    correct: 1
  },
  {
    question: "What does an actuator do?",
    options: [
      "It senses environmental changes.",
      "It transmits data over a network.",
      "It receives control signals and performs physical actions.",
      "It stores digital values."
    ],
    correct: 2
  },
  {
    question: "Give an example of a position sensor.",
    options: [
      "Thermometer",
      "Proximity sensor",
      "Barometer",
      "Hygrometer"
    ],
    correct: 1
  },
  {
    question: "What type of sensor detects the presence of people or animals?",
    options: [
      "Light sensor",
      "Pressure sensor",
      "Occupancy sensor",
      "Temperature sensor"
    ],
    correct: 2
  },
  {
    question: "Which sensor measures how fast an object moves or rotates?",
    options: [
      "Humidity sensor",
      "Pressure sensor",
      "Velocity sensor",
      "Biosensor"
    ],
    correct: 2
  },
  {
    question: "What sensor type measures the force applied by liquids or gases?",
    options: [
      "Pressure sensor",
      "Proximity sensor",
      "Light sensor",
      "Temperature sensor"
    ],
    correct: 0
  },
  {
    question: "Give an example of a biosensor.",
    options: [
      "Accelerometer",
      "Blood glucose biosensor",
      "Proximity sensor",
      "Light sensor"
    ],
    correct: 1
  },
  {
    question: "What type of actuator uses fluid pressure to create movement?",
    options: [
      "Electrical actuator",
      "Mechanical actuator",
      "Hydraulic actuator",
      "Electromagnetic actuator"
    ],
    correct: 2
  },
  {
    question: "What type of actuator is used in electric recliners to adjust the angle?",
    options: [
      "Rotary actuator",
      "Linear actuator",
      "Hydraulic actuator",
      "Pneumatic actuator"
    ],
    correct: 1
  },
  {
    question: "What type of actuator is used in automatic door openers?",
    options: [
      "Mechanical actuator",
      "Linear actuator",
      "Electromechanical actuator",
      "Rotary actuator"
    ],
    correct: 3
  },
  {
    question: "How many layers are there in the IoT architecture?",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    correct: 1
  },
  {
    question: "What is the first layer of IoT architecture?",
    options: [
      "Network Layer",
      "Application Layer",
      "Sensing Layer",
      "Application Service Layer"
    ],
    correct: 2
  },
  {
    question: "Which layer handles data analytics and streaming analytics?",
    options: [
      "Application Support Layer",
      "Network Layer",
      "Sensing Layer",
      "Application Service Layer"
    ],
    correct: 3
  },
  {
    question: "Which layer interconnects the real and physical world?",
    options: [
      "Sensing Layer",
      "Application Service Layer",
      "Network Layer",
      "Application Layer"
    ],
    correct: 3
  },
  {
    question: "Which layer provides robust and high-performance network infrastructure?",
    options: [
      "Network Layer",
      "Sensing Layer",
      "Application Service Layer",
      "Application Layer"
    ],
    correct: 0
  },
  {
    question: "Name a device found in the Sensing Layer.",
    options: [
      "Microcontroller",
      "Router",
      "GPS",
      "Switch"
    ],
    correct: 2
  },
  {
    question: "Full form of GPS?",
    options: [
      "Global Positioning System",
      "General Positioning System",
      "Global Process System",
      "General Process System"
    ],
    correct: 0
  },
  {
    question: "What type of sensor is used in street lights to detect ambient light?",
    options: [
      "IR sensor",
      "Ultrasonic sensor",
      "LDR sensor",
      "Proximity sensor"
    ],
    correct: 2
  },
  {
    question: "Which sensor is used in TV remote controls?",
    options: [
      "Proximity sensor",
      "Ultrasonic sensor",
      "IR sensor",
      "Pressure sensor"
    ],
    correct: 2
  },
  {
    question: "What type of sensor is used in smartphones to turn off the screen when you hold it to your ear?",
    options: [
      "Pressure sensor",
      "Proximity sensor",
      "Humidity sensor",
      "Temperature sensor"
    ],
    correct: 1
  },
  {
    question: "What type of sensor is used in car parking assistance systems?",
    options: [
      "Ultrasonic sensor",
      "Light sensor",
      "Temperature sensor",
      "IR sensor"
    ],
    correct: 0
  },
  {
    question: "What type of actuator is used in car repair shop lifts?",
    options: [
      "Electromechanical actuator",
      "Hydraulic actuator",
      "Pneumatic actuator",
      "Mechanical actuator"
    ],
    correct: 1
  },
  {
    question: "What type of actuator is used in trucks and buses for air brakes?",
    options: [
      "Hydraulic actuator",
      "Pneumatic actuator",
      "Electromechanical actuator",
      "Mechanical actuator"
    ],
    correct: 1
  },
  {
    question: "What does IPv6 stand for?",
    options: [
      "Internet Protocol version 5",
      "Internet Protocol version 6",
      "Internet Protocol version 7",
      "Internet Protocol version 8"
    ],
    correct: 1
  },
  {
    question: "Why is IPv6 important for IoT?",
    options: [
      "It provides a larger address space.",
      "It uses less power.",
      "It is faster than IPv4.",
      "It is more secure."
    ],
    correct: 0
  },
  {
    question: "Which IoT application uses sensors to monitor soil moisture and optimize irrigation?",
    options: [
      "Smart City",
      "Smart Home",
      "Smart Agriculture",
      "Smart Health"
    ],
    correct: 2
  },
  {
    question: "What type of actuator is used in automated window blinds?",
    options: [
      "Hydraulic actuator",
      "Pneumatic actuator",
      "Electromechanical actuator",
      "Mechanical actuator"
    ],
    correct: 2
  },
  {
    question: "Which IoT device can help monitor and manage energy consumption in a household?",
    options: [
      "Smart Meter",
      "Smart Bulb",
      "Smart Refrigerator",
      "Smart Camera"
    ],
    correct: 0
  },
  {
    question: "Which type of sensor is used in smart irrigation systems to detect soil moisture levels?",
    options: [
      "Temperature sensor",
      "Proximity sensor",
      "Soil moisture sensor",
      "Humidity sensor"
    ],
    correct: 2
  },
  {
    question: "What kind of IoT application involves using sensors to monitor health parameters like heart rate and blood pressure?",
    options: [
      "Smart Agriculture",
      "Smart City",
      "Smart Health",
      "Smart Grid"
    ],
    correct: 2
  },
  {
    question: "Which sensor would be used in an automatic door system to detect people approaching?",
    options: [
      "Pressure sensor",
      "Proximity sensor",
      "Temperature sensor",
      "Light sensor"
    ],
    correct: 1
  },
  {
    question: "Which protocol is often used to secure IoT device communication?",
    options: [
      "HTTP",
      "FTP",
      "TLS",
      "DNS"
    ],
    correct: 2
  },
  {
    question: "What is the primary concern regarding IoT device security?",
    options: [
      "Power consumption",
      "Data privacy",
      "Device size",
      "Device cost"
    ],
    correct: 1
  },
  {
    question: "Which technology is commonly used to protect data transmitted between IoT devices?",
    options: [
      "Encryption",
      "Compression",
      "Amplification",
      "Modulation"
    ],
    correct: 0
  },
  {
    question: "What kind of attack involves an unauthorized entity gaining control of an IoT device?",
    options: [
      "Phishing attack",
      "Man-in-the-middle attack",
      "Spoofing attack",
      "Hijacking attack"
    ],
    correct: 3
  },
  {
    question: "Which security measure is essential for ensuring the authenticity of IoT devices?",
    options: [
      "Encryption",
      "Authentication",
      "Data compression",
      "Signal amplification"
    ],
    correct: 1
  },
  {
    question: "Which method is often used to ensure data integrity in IoT systems?",
    options: [
      "Hashing",
      "Data redundancy",
      "Signal modulation",
      "Data compression"
    ],
    correct: 0
  },
  {
    question: "Which IoT application uses sensors to monitor and manage city infrastructure?",
    options: [
      "Smart Grid",
      "Smart City",
      "Smart Home",
      "Smart Health"
    ],
    correct: 1
  },
  {
    question: "In a smart home, which device is commonly used to automate lighting?",
    options: [
      "Light Bulb",
      "Smart Thermostat",
      "Smart Switch",
      "Motion Sensor"
    ],
    correct: 2
  },
  {
    question: "What type of sensor would be used in a smart thermostat to detect temperature?",
    options: [
      "Pressure sensor",
      "Humidity sensor",
      "Temperature sensor",
      "Light sensor"
    ],
    correct: 2
  },
  {
    question: "Which IoT application involves tracking the location and movement of goods?",
    options: [
      "Smart Health",
      "Smart Grid",
      "Smart Agriculture",
      "Supply Chain Management"
    ],
    correct: 3
  },
  {
    question: "What type of sensor is used in wearable fitness trackers to measure steps?",
    options: [
      "Light sensor",
      "Proximity sensor",
      "Accelerometer",
      "Temperature sensor"
    ],
    correct: 2
  },
  {
    question: "What is the primary microcontroller used in the Arduino Uno?",
    options: [
      "ATmega328P",
      "ATmega2560",
      "ATmega32U4",
      "ATtiny85"
    ],
    correct: 0
  },
  {
    question: "How many digital I/O pins are available on the Arduino Uno?",
    options: [
      "10",
      "14",
      "16",
      "20"
    ],
    correct: 1
  },
  {
    question: "What is the function of the analog pins on the Arduino Uno?",
    options: [
      "Output digital signals",
      "Read analog input values",
      "Control the power supply",
      "Connect to the USB port"
    ],
    correct: 1
  },
  {
    question: "Which architecture does the ATmega328P microcontroller follow?",
    options: [
      "ARM",
      "AVR",
      "x86",
      "MIPS"
    ],
    correct: 1
  },
  {
    question: "What is the clock speed of the Arduino Uno's ATmega328P microcontroller?",
    options: [
      "1 MHz",
      "8 MHz",
      "16 MHz",
      "32 MHz"
    ],
    correct: 2
  },
  {
    question: "How much Flash memory does the ATmega328P microcontroller have?",
    options: [
      "8 KB",
      "32 KB",
      "64 KB",
      "128 KB"
    ],
    correct: 1
  },
  {
    question: "Which pin on the Arduino Uno is used for PWM output?",
    options: [
      "Pin 10",
      "Pin 3",
      "Pin 5",
      "All of the above"
    ],
    correct: 3
  },
  {
    question: "What is the purpose of the RESET pin on the Arduino Uno?",
    options: [
      "To restart the microcontroller",
      "To enter programming mode",
      "To disconnect power",
      "To ground the circuit"
    ],
    correct: 0
  },
  {
    question: "Which component on the Arduino Uno board regulates voltage?",
    options: [
      "Voltage regulator",
      "Crystal oscillator",
      "LED",
      "Microcontroller"
    ],
    correct: 0
  },
  {
    question: "What type of USB port is used on the Arduino Uno?",
    options: [
      "USB-C",
      "USB-B",
      "USB-A",
      "Mini-USB"
    ],
    correct: 1
  },
  {
    question: "How many analog input pins are available on the Arduino Uno?",
    options: [
      "4",
      "6",
      "8",
      "10"
    ],
    correct: 1
  },
  {
    question: "What is the function of the AREF pin on the Arduino Uno?",
    options: [
      "To reset the microcontroller",
      "To power the board",
      "To provide a reference voltage for analog inputs",
      "To ground the circuit"
    ],
    correct: 2
  },
  {
    question: "What does the '328' in ATmega328P represent?",
    options: [
      "The number of I/O pins",
      "The microcontroller model number",
      "The clock speed",
      "The amount of Flash memory"
    ],
    correct: 1
  },
  {
    question: "Which software is primarily used to program the Arduino Uno?",
    options: [
      "MPLAB IDE",
      "Code::Blocks",
      "Arduino IDE",
      "Eclipse"
    ],
    correct: 2
  },
  {
    question: "What is the role of the bootloader on the Arduino Uno?",
    options: [
      "To manage memory",
      "To protect the microcontroller",
      "To facilitate uploading programs to the microcontroller",
      "To increase clock speed"
    ],
    correct: 2
  },
  {
    question: "Which of the following is true about the ATmega328P microcontroller's SRAM?",
    options: [
      "It is non-volatile",
      "It stores the program code",
      "It temporarily stores variables during program execution",
      "It cannot be accessed by the microcontroller"
    ],
    correct: 2
  },
  {
    question: "What voltage range is recommended for powering the Arduino Uno via the VIN pin?",
    options: [
      "3.3V to 5V",
      "7V to 12V",
      "1.8V to 3.3V",
      "12V to 15V"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of the crystal oscillator on the Arduino Uno?",
    options: [
      "To power the microcontroller",
      "To provide a clock signal for the microcontroller",
      "To store program code",
      "To reset the microcontroller"
    ],
    correct: 1
  },
  {
    question: "How is an LED connected to a digital pin on the Arduino Uno to turn it on?",
    options: [
      "Anode to the pin, cathode to ground",
      "Cathode to the pin, anode to ground",
      "Both terminals to the pin",
      "Anode to ground, cathode to 5V"
    ],
    correct: 0
  },
  {
    question: "Which command is used in the Arduino IDE to set a pin as an output?",
    options: [
      "pinMode(pin, INPUT)",
      "pinMode(pin, OUTPUT)",
      "digitalWrite(pin, HIGH)",
      "digitalRead(pin)"
    ],
    correct: 1
  },
  {
    question: "What happens when digitalWrite(pin, HIGH) is executed on an output pin?",
    options: [
      "The pin is set to 5V",
      "The pin is set to 0V",
      "The pin is configured as input",
      "The pin is disconnected"
    ],
    correct: 0
  },
  {
    question: "What is the maximum current that can be drawn from a single digital I/O pin on the Arduino Uno?",
    options: [
      "10 mA",
      "20 mA",
      "40 mA",
      "80 mA"
    ],
    correct: 2
  },
  {
    question: "Which tool in the Arduino IDE is used to upload the code to the Arduino board?",
    options: [
      "Serial Monitor",
      "Tools menu",
      "Upload button",
      "Serial Plotter"
    ],
    correct: 2
  },
  {
    question: "What is the function of the TX and RX LEDs on the Arduino Uno?",
    options: [
      "Indicate data transmission and reception",
      "Indicate power status",
      "Indicate program status",
      "Indicate reset status"
    ],
    correct: 0
  },
  {
    question: "Which command is used to start serial communication in the Arduino IDE?",
    options: [
      "Serial.read()",
      "Serial.write()",
      "Serial.begin(9600)",
      "Serial.print()"
    ],
    correct: 2
  },
  {
    question: "What does the setup() function in Arduino code do?",
    options: [
      "Loops continuously",
      "Runs once at the start",
      "Runs when a button is pressed",
      "Monitors serial data"
    ],
    correct: 1
  },
  {
    question: "What does the loop() function in Arduino code do?",
    options: [
      "Repeats continuously",
      "Runs once at the start",
      "Runs when a sensor is triggered",
      "Ends the program"
    ],
    correct: 0
  },
  {
    question: "How can the Arduino Uno be powered other than via USB?",
    options: [
      "Through the VIN pin",
      "Through the barrel jack",
      "Both a and b",
      "Neither a nor b"
    ],
    correct: 2
  },
  {
    question: "What is the function of the onboard LED connected to pin 13?",
    options: [
      "To indicate power status",
      "To show USB connection",
      "To provide a built-in LED for testing",
      "To display error codes"
    ],
    correct: 2
  },
  {
    question: "Which file extension is used for Arduino sketch files?",
    options: [
      ".txt",
      ".ino",
      ".cpp",
      ".hex"
    ],
    correct: 1
  },
  {
    question: "Which programming language is primarily used in Arduino IDE?",
    options: [
      "Python",
      "C++",
      "Java",
      "HTML"
    ],
    correct: 1
  },
  {
    question: "How many hardware timers does the ATmega328P microcontroller have?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correct: 2
  },
  {
    question: "What is the maximum input voltage the Arduino Uno’s analog pins can safely read?",
    options: [
      "3.3V",
      "10V",
      "5V",
      "12V"
    ],
    correct: 2
  },
  {
    question: "What does PWM stand for in the context of Arduino?",
    options: [
      "Power With Modulation",
      "Phase Waveform Modulation",
      "Pulse Width Modulation",
      "Positive Wave Measurement"
    ],
    correct: 2
  },
  {
    question: "Which component is used in the Arduino Uno to interface with the USB?",
    options: [
      "ATmega328P",
      "ATmega16U2",
      "Voltage regulator",
      "Crystal oscillator"
    ],
    correct: 1
  },
  {
    question: "How is a new library included in an Arduino sketch?",
    options: [
      "By using the #include directive",
      "By copying the library files to the sketch",
      "By importing via the IDE’s File menu",
      "By using the import keyword"
    ],
    correct: 0
  },
  {
    question: "What is the main purpose of the Arduino bootloader?",
    options: [
      "To enable programming via the USB without external hardware",
      "To manage power consumption",
      "To increase clock speed",
      "To handle serial communication"
    ],
    correct: 0
  },
  {
    question: "What does the digitalRead(pin) function do in Arduino?",
    options: [
      "Reads the value of a digital input pin",
      "Sets a digital pin to HIGH",
      "Configures a pin as input",
      "Sends data to the serial monitor"
    ],
    correct: 0
  },
  {
    question: "Which command is used to delay the execution of code in Arduino?",
    options: [
      "delay(ms)",
      "wait(ms)",
      "pause(ms)",
      "stop(ms)"
    ],
    correct: 0
  },
  {
    question: "In the Arduino IDE, what does the Serial Monitor do?",
    options: [
      "Displays data sent from the Arduino to the computer",
      "Compiles the Arduino code",
      "Controls the power to the Arduino board",
      "Uploads code to the Arduino board"
    ],
    correct: 0
  },
  {
    question: "What does GPIO stand for?",
    options: [
      "General-Purpose Input/Output",
      "General-Purpose Inner/Outer",
      "Both A & B",
      "None of the Above"
    ],
    correct: 0
  },
  {
    question: "When was the actual term 'Internet of Things' coined?",
    options: [
      "1998",
      "1999",
      "2000",
      "2002"
    ],
    correct: 1
  },
  {
    question: "Which Arduino Boards use the Atmega328?",
    options: [
      "Arduino Uno",
      "Arduino Mega",
      "Arduino Fio",
      "Arduino Due"
    ],
    correct: 0
  },
  {
    question: "Which library is used to access I2C in Arduino IoT devices?",
    options: [
      "EEPROM",
      "Wire",
      "DHT11",
      "ArduinoJson"
    ],
    correct: 1
  },
  {
    question: "Which of the following is false about IoT devices?",
    options: [
      "IoT devices use the internet for collecting and sharing data",
      "IoT devices need microcontrollers",
      "IoT devices use wireless technology",
      "IoT devices are completely safe"
    ],
    correct: 3
  },
  {
    question: "Which of the following is not an actuator in IoT?",
    options: [
      "Stepper motor",
      "A fan",
      "An LED",
      "Arduino"
    ],
    correct: 3
  },
  {
    question: "Which of the following is not related to Arduino IDE IoT software?",
    options: [
      "Serial monitor",
      "Verify",
      "Upload",
      "Terminate"
    ],
    correct: 3
  },
  {
    question: "Which protocol is used to link all the devices in the IoT?",
    options: [
      "TCP/IP",
      "Network",
      "UDP",
      "HTTP"
    ],
    correct: 0
  },
  {
    question: "Who coined the term 'Internet of Things'?",
    options: [
      "Kevin Ashton",
      "John Wright",
      "Edward Jameson",
      "George Garton"
    ],
    correct: 0
  },
  {
    question: "Will CoAP connect to the internet?",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "What is the defining characteristic of IoT devices?",
    options: [
      "High power consumption",
      "Internet connectivity and interaction with the physical environment",
      "Ability to run without electricity",
      "Lack of communication"
    ],
    correct: 1
  },
  {
    question: "Which protocol is often used for lightweight communication in IoT applications?",
    options: [
      "HTTP",
      "FTP",
      "MQTT",
      "SMTP"
    ],
    correct: 2
  },
  {
    question: "What is a key application of IoT in healthcare?",
    options: [
      "Managing stock prices",
      "Monitoring patient vital signs remotely",
      "Running simulations",
      "Predicting the weather"
    ],
    correct: 1
  },
  {
    question: "Which layer of IoT architecture is responsible for data collection from sensors?",
    options: [
      "Application layer",
      "Perception layer",
      "Network layer",
      "Processing layer"
    ],
    correct: 1
  },
  {
    question: "What type of sensor would you use to detect motion?",
    options: [
      "Temperature sensor",
      "Ultrasonic sensor",
      "PIR sensor",
      "Gas sensor"
    ],
    correct: 2
  },
  {
    question: "Which protocol is used for secure communication in IoT devices?",
    options: [
      "MQTT",
      "CoAP",
      "HTTPS",
      "FTP"
    ],
    correct: 2
  },
  {
    question: "How can you measure the resistance of a sensor using the Arduino Uno?",
    options: [
      "Use a voltmeter to manually measure the voltage drop across the sensor and calculate the resistance using Ohm's law outside of the Arduino circuit.",
      "Create a voltage divider circuit with the sensor and measure the voltage across it",
      "Directly measure resistance via Arduino pins",
      "Use an ammeter"
    ],
    correct: 1
  },
  {
    question: "Which IoT characteristic allows devices to make decisions without human intervention?",
    options: [
      "Connectivity",
      "Autonomy",
      "Interoperability",
      "Scalability"
    ],
    correct: 1
  },
  {
    question: "What is a common security challenge in IoT?",
    options: [
      "Overheating",
      "Data breaches",
      "Limited battery life",
      "Signal interference"
    ],
    correct: 1
  },
  {
    question: "Which of the following is not a communication protocol supported by the ATmega328P in Arduino Uno?",
    options: [
      "UART",
      "SPI",
      "I2C",
      "CAN Bus"
    ],
    correct: 3
  },
  {
    question: "What is the function of a pull-up resistor in Arduino circuits?",
    options: [
      "Reduces current",
      "Ensures a high default value on input pins",
      "Grounds the circuit",
      "Lowers voltage"
    ],
    correct: 1
  },
  {
    question: "Which sensor is typically used to measure temperature in IoT applications?",
    options: [
      "DHT11",
      "LDR",
      "Ultrasonic sensor",
      "PIR sensor"
    ],
    correct: 0
  },
  {
    question: "Which communication protocol is often used in constrained environments for IoT?",
    options: [
      "HTTP",
      "MQTT",
      "TCP",
      "POP3"
    ],
    correct: 1
  },
  {
    question: "In an IoT system, what does the term 'edge computing' refer to?",
    options: [
      "Processing data in the cloud",
      "Processing data on the devices closer to the data source",
      "An alternative to cloud computing",
      "A method to increase bandwidth"
    ],
    correct: 1
  },
  {
    question: "What does the LDR sensor measure?",
    options: [
      "Light intensity",
      "Humidity",
      "Motion",
      "Sound"
    ],
    correct: 0
  },
  {
    question: "Which type of actuator would you use to move a robotic arm?",
    options: [
      "Temperature sensor",
      "Buzzer",
      "Motor",
      "PIR sensor"
    ],
    correct: 2
  },
  {
    question: "What is the role of the network layer in IoT architecture?",
    options: [
      "Processing data",
      "Sensing physical phenomena",
      "Providing connectivity between devices",
      "Interacting with users"
    ],
    correct: 2
  },
  {
    question: "Which communication protocol is typically used in IoT for long-range, low-power communication?",
    options: [
      "Zigbee",
      "LoRaWAN",
      "Bluetooth",
      "Wi-Fi"
    ],
    correct: 1
  },
  {
    question: "Which of the following is a key benefit of using IoT in agriculture?",
    options: [
      "Reducing food prices",
      "Enhancing crop yield through data-driven decisions",
      "Decreasing the need for fertilizers",
      "Eliminating manual labor entirely"
    ],
    correct: 1
  },
  {
    question: "Which communication protocol is commonly used for IoT in home automation systems?",
    options: [
      "Wi-Fi",
      "Zigbee",
      "LoRa",
      "HTTP"
    ],
    correct: 1
  },
  {
    question: "What is the primary role of actuators in an IoT system?",
    options: [
      "To process data",
      "To sense changes in the environment",
      "To perform physical actions",
      "To transmit data over the internet"
    ],
    correct: 2
  },
  {
    question: "Which of the following is an example of a security risk in IoT?",
    options: [
      "Sensor malfunctions",
      "Weak encryption leading to data breaches",
      "Device overheating",
      "Unreliable power supply"
    ],
    correct: 1
  },
  {
    question: "What is a key feature of artificial intelligence (AI) in IoT?",
    options: [
      "AI replaces all human labor",
      "AI analyzes data to enable predictive maintenance",
      "AI removes the need for cloud computing",
      "AI increases the energy consumption of devices"
    ],
    correct: 1
  },
  {
    question: "Which of the following is a key application of IoT in the healthcare industry?",
    options: [
      "Remote patient monitoring",
      "Managing agricultural equipment",
      "Predicting weather patterns",
      "Enhancing social media platforms"
    ],
    correct: 0
  },
  {
    question: "What is the main purpose of a communication protocol in IoT?",
    options: [
      "To control devices",
      "To ensure interoperability between different IoT devices",
      "To store data locally",
      "To analyze sensor data"
    ],
    correct: 1
  },
  {
    question: "What is the role of an IoT gateway?",
    options: [
      "To generate data",
      "To store data",
      "To connect IoT devices to the cloud or other networks",
      "To power IoT devices"
    ],
    correct: 2
  },
  {
    question: "What does the term 'scalability' refer to in the context of IoT?",
    options: [
      "The ability to connect a small number of devices",
      "The capability to expand the IoT network to accommodate more devices",
      "The capacity of sensors to measure larger areas",
      "The limitation on data processing speed"
    ],
    correct: 1
  },
  {
    question: "Which of the following sensors can measure proximity or distance in an IoT system?",
    options: [
      "Gas sensor",
      "Ultrasonic sensor",
      "Temperature sensor",
      "Light sensor"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of edge computing in IoT?",
    options: [
      "To reduce power consumption",
      "To process data closer to the data source, reducing latency",
      "To store large amounts of data",
      "To enhance cloud storage capabilities"
    ],
    correct: 1
  },
  {
    question: "Which of the following is true about the ATmega328P microcontroller in Arduino Uno?",
    options: [
      "It supports Wi-Fi communication natively",
      "It has 14 digital I/O pins",
      "It requires external power to operate",
      "It only supports analog inputs"
    ],
    correct: 1
  },
  {
    question: "Which wireless communication technology is commonly used in wearable IoT devices for short-range data transfer?",
    options: [
      "Wi-Fi",
      "LoRa",
      "Bluetooth",
      "Zigbee"
    ],
    correct: 2
  },
  {
    question: "Which of the following best describes a smart home IoT system?",
    options: [
      "A system that monitors and controls home appliances remotely",
      "A system that provides high-speed internet",
      "A system that automates industrial machinery",
      "A system that manages traffic signals"
    ],
    correct: 0
  },
  {
    question: "What type of sensor is typically used to monitor air quality in IoT applications?",
    options: [
      "Temperature sensor",
      "Gas sensor",
      "Ultrasonic sensor",
      "PIR sensor"
    ],
    correct: 1
  },
  {
    question: "Which of the following is a major advantage of using LoRaWAN in IoT?",
    options: [
      "High data transfer rates",
      "Long-range communication with low power consumption",
      "High bandwidth",
      "Low latency"
    ],
    correct: 1
  },
  {
    question: "What is the main advantage of using cloud computing in IoT systems?",
    options: [
      "Reducing hardware costs",
      "Providing unlimited storage and processing power",
      "Ensuring real-time processing",
      "Decreasing latency"
    ],
    correct: 1
  },
  {
    question: "Which of the following IoT use cases would most likely involve predictive maintenance?",
    options: [
      "Smart city lighting",
      "Connected agriculture",
      "Industrial machinery monitoring",
      "Wearable health devices"
    ],
    correct: 2
  },
  {
    question: "What is the primary function of sensors in IoT devices?",
    options: [
      "To display data to the user",
      "To send data to the cloud",
      "To detect and measure physical conditions such as temperature or motion",
      "To process data in real-time"
    ],
    correct: 2
  },
  {
    question: "Which of the following is an example of an actuator?",
    options: [
      "Temperature sensor",
      "Humidity sensor",
      "Motor",
      "Camera"
    ],
    correct: 2
  },
  {
    question: "What is the role of machine learning in IoT?",
    options: [
      "To replace sensors in the system",
      "To process and analyze IoT data for insights and predictions",
      "To provide internet connectivity",
      "To ensure security"
    ],
    correct: 1
  },
  {
    question: "Which component in an IoT system stores and processes large amounts of data from connected devices?",
    options: [
      "Sensor",
      "Actuator",
      "Cloud",
      "Gateway"
    ],
    correct: 2
  },

  {
    question: "How can the ATmega328P microcontroller differentiate between analog and digital inputs on the Arduino Uno?",
    options: [
      "Through dedicated analog and digital pins",
      "By using a voltage threshold",
      "By configuring the pins in the software using the pinMode() function",
      "Using the onboard ADC (Analog-to-Digital Converter)"
    ],
    correct: 2
  },
  {
    question: "What happens if you exceed the maximum input voltage on a digital pin of the Arduino Uno?",
    options: [
      "It may damage the pin or the microcontroller",
      "The pin will automatically reset",
      "The pin will ignore the excess voltage",
      "It will increase the output voltage"
    ],
    correct: 0
  },
  {
    question: "What is the role of the EEPROM memory in the Arduino Uno?",
    options: [
      "To temporarily store variables during execution",
      "To store data permanently even after power is lost",
      "To store the bootloader",
      "To manage USB communication"
    ],
    correct: 1
  },
  {
    question: "How can you measure the resistance of a sensor using the Arduino Uno?",
    options: [
      "Directly connect the sensor to an analog pin",
      "Create a voltage divider circuit with the sensor and measure the voltage across it",
      "Use a digital pin and measure the voltage",
      "Use a current sensor module"
    ],
    correct: 1
  },
  {
    question: "What is the significance of using a pull-up resistor on an input pin of the Arduino Uno?",
    options: [
      "To prevent the input pin from floating and reading erroneous values",
      "To increase the pin’s voltage",
      "To lower the pin’s resistance",
      "To power external devices"
    ],
    correct: 0
  },
  {
    question: "How can you safely interface a 12V relay with an Arduino Uno?",
    options: [
      "Connect the relay directly to a digital pin",
      "Use a transistor as a switch to control the relay with the Arduino",
      "Connect the relay to an analog pin"
    ],
    correct: 1
  },
  {
    question: "Which communication protocol is not natively supported by the Arduino Uno’s ATmega328P microcontroller?",
    options: [
      "UART",
      "CAN Bus",
      "I2C",
      "SPI"
    ],
    correct: 1
  },
  {
    question: "How can you increase the number of digital I/O pins on the Arduino Uno for a project?",
    options: [
      "Use a shift register like the 74HC595",
      "Add an external power supply",
      "Use analog pins as digital pins",
      "Modify the microcontroller’s firmware"
    ],
    correct: 0
  },
  {
    question: "What is the purpose of the decoupling capacitors near the microcontroller on the Arduino Uno board?",
    options: [
      "To filter out noise and stabilize the voltage supply",
      "To store charge for the microcontroller",
      "To increase the current supply",
      "To enable PWM output"
    ],
    correct: 0
  },
  {
    question: "How can the Arduino Uno be used to generate a frequency signal?",
    options: [
      "By using the analogWrite() function",
      "By using an external oscillator",
      "By configuring the Timer/Counter registers to generate PWM signals",
      "By rapidly toggling a digital pin using digitalWrite()"
    ],
    correct: 2
  },
  {
    question: "What is the function of the Wire.begin() command in an Arduino sketch?",
    options: [
      "To initiate I2C communication",
      "To start serial communication",
      "To enable SPI communication",
      "To reset the microcontroller"
    ],
    correct: 0
  },
  {
    question: "How does the Arduino Uno handle multiple interrupts from different sources?",
    options: [
      "By executing them simultaneously",
      "By handling them in the order they occur, prioritizing based on the vector table",
      "By ignoring lower priority interrupts",
      "By queuing them for later execution"
    ],
    correct: 1
  },
  {
    question: "Which command would you use to read a sensor value connected to an analog pin in an Arduino sketch?",
    options: [
      "analogRead(pin)",
      "digitalRead(pin)",
      "sensorRead(pin)",
      "analogWrite(pin)"
    ],
    correct: 0
  },
  {
    question: "What will happen if you connect an external power supply to the Arduino Uno and USB simultaneously?",
    options: [
      "The board will draw power from both sources",
      "The Arduino Uno will automatically select the external power supply",
      "The Arduino Uno will only use the USB power",
      "The Arduino will reset"
    ],
    correct: 1
  },
  {
    question: "How can you achieve low power consumption in an Arduino Uno project?",
    options: [
      "Increase the clock speed",
      "Use the sleep() function and reduce the clock speed",
      "Use digital pins instead of analog",
      "Add more sensors"
    ],
    correct: 1
  },
  {
    question: "What is the maximum resolution of the PWM signal that the Arduino Uno can generate?",
    options: [
      "4-bit",
      "6-bit",
      "8-bit",
      "10-bit"
    ],
    correct: 2
  },
  {
    question: "Which command would you use to send data from the Arduino to a connected computer for debugging?",
    options: [
      "Serial.read()",
      "Serial.print()",
      "Wire.write()",
      "Serial.begin()"
    ],
    correct: 1
  },
  {
    question: "What is the significance of the Brown-out Detector (BOD) in the Arduino Uno?",
    options: [
      "It monitors the temperature of the microcontroller",
      "It resets the microcontroller if the supply voltage drops below a certain level",
      "It manages power consumption",
      "It controls the clock speed"
    ],
    correct: 1
  },
  {
    question: "How can you control the brightness of an LED connected to the Arduino Uno?",
    options: [
      "By varying the voltage directly",
      "By using PWM with the analogWrite() function",
      "By adjusting the resistance in series with the LED",
      "By rapidly toggling the LED with digitalWrite()"
    ],
    correct: 1
  },
  {
    question: "What is the function of the ICSP (In-Circuit Serial Programming) header on the Arduino Uno?",
    options: [
      "To allow programming the microcontroller without removing it from the board",
      "To provide additional digital I/O pins",
      "To connect the Arduino to a computer",
      "To enable wireless communication"
    ],
    correct: 0
  },
  {
    question: "What is the function of the analog pins on the Arduino Uno?",
    options: [
      "Output digital signals",
      "Read analog input values",
      "Control the power supply",
      "Connect to the USB port"
    ],
    correct: 1
  },
  {
    question: "Which architecture does the ATmega328P microcontroller follow?",
    options: [
      "ARM",
      "AVR",
      "x86",
      "MIPS"
    ],
    correct: 1
  },
  {
    question: "What is the clock speed of the Arduino Uno's ATmega328P microcontroller?",
    options: [
      "1 MHz",
      "8 MHz",
      "16 MHz",
      "32 MHz"
    ],
    correct: 2
  },
  {
    question: "How much Flash memory does the ATmega328P microcontroller have?",
    options: [
      "8 KB",
      "32 KB",
      "64 KB",
      "128 KB"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of the RESET pin on the Arduino Uno?",
    options: [
      "To restart the microcontroller",
      "To enter programming mode",
      "To disconnect power",
      "To ground the circuit"
    ],
    correct: 0
  },
  {
    question: "Which component on the Arduino Uno board regulates voltage?",
    options: [
      "Voltage regulator",
      "Crystal oscillator",
      "LED",
      "Microcontroller"
    ],
    correct: 0
  },
  {
    question: "What type of USB port is used on the Arduino Uno?",
    options: [
      "USB-C",
      "USB-B",
      "USB-A",
      "Mini-USB"
    ],
    correct: 1
  },
  {
    question: "How many analog input pins are available on the Arduino Uno?",
    options: [
      "4",
      "6",
      "8",
      "10"
    ],
    correct: 1
  },
  {
    question: "What is the function of the AREF pin on the Arduino Uno?",
    options: [
      "To reset the microcontroller",
      "To power the board",
      "To provide a reference voltage for analog inputs",
      "To ground the circuit"
    ],
    correct: 2
  },
  {
    question: "What does the '328' in ATmega328P represent?",
    options: [
      "The number of I/O pins",
      "The microcontroller model number",
      "The clock speed",
      "The amount of Flash memory"
    ],
    correct: 1
  },
  {
    question: "Which software is primarily used to program the Arduino Uno?",
    options: [
      "MPLAB IDE",
      "Code::Blocks",
      "Arduino IDE",
      "Eclipse"
    ],
    correct: 2
  }
]

const iotMLEdgeQuestions = [
  {
    question: "Which of the following is a building block of edge computing?",
    options: [
      "Data ingestion and stream processing",
      "Centralized data centers",
      "High-bandwidth CDN",
      "Traditional three-tier architecture"
    ],
    correct: 0
  },
  {
    question: "In edge computing, which tier is responsible for running machine learning models?",
    options: [
      "Data Source Tier",
      "Storage Tier",
      "Actionable Insight Tier",
      "Intelligence Tier"
    ],
    correct: 3
  },
  {
    question: "What is the role of M2M brokers in edge computing?",
    options: [
      "Data storage management",
      "Enabling machine-to-machine communication",
      "Training machine learning models",
      "Real-time data conversion"
    ],
    correct: 1
  },
  {
    question: "What is a limitation of the current cloud system for AI use cases?",
    options: [
      "It offers only local processing capabilities",
      "It has a low capacity for data storage",
      "It cannot provide real-time responses due to latency",
      "It lacks programmability of the network stack"
    ],
    correct: 2
  },
  {
    question: "Which component is responsible for real-time queries and data processing in edge computing?",
    options: [
      "Stream Processing",
      "Function as a Service",
      "Object Storage",
      "M2M Brokers"
    ],
    correct: 0
  },
  {
    question: "How does edge computing mimic public cloud capabilities?",
    options: [
      "By centralizing data storage in remote data centers",
      "By providing capabilities like device management and stream analytics near data sources",
      "By reducing the need for hardware innovations",
      "By utilizing client-server architecture for processing"
    ],
    correct: 1
  },
  {
    question: "What is the primary purpose of the actionable insight layer in edge computing?",
    options: [
      "Storing unstructured data",
      "Running machine learning training models",
      "Sending alerts and controlling actuators",
      "Performing real-time data ingestion"
    ],
    correct: 2
  },
  {
    question: "What is the primary advantage of edge computing over cloud computing?",
    options: [
      "High latency",
      "Centralized processing",
      "Data sovereignty",
      "Limited scalability"
    ],
    correct: 2
  },
  {
    question: "Which IoT data flow path processes real-time data immediately upon generation?",
    options: [
      "Cold path",
      "Warm path",
      "Batch path",
      "Hot path"
    ],
    correct: 3
  },
  {
    question: "Which of the following is a key feature of Federated Learning?",
    options: [
      "Training occurs on centralized data",
      "Data remains decentralized while models are aggregated",
      "IoT data is processed only in the cloud",
      "Training is skipped in federated models"
    ],
    correct: 1
  },
  {
    question: "Which IoT data flow path processes real-time data immediately upon generation?",
    options: [
      "Cold path",
      "Hot path",
      "Batch path",
      "Warm path"
    ],
    correct: 1
  },
  {
    question: "Because of _________, customers are not willing to send their data to cloud.",
    options: [
      "Data Integrity Concern",
      "Data Privacy Concern",
      "High Cost Concern",
      "None of these"
    ],
    correct: 1
  },
  {
    question: "What is the role of a 'Planner' component in the Edge Controller?",
    options: [
      "Schedule and allocate tasks to edge nodes",
      "Manage communication between edge and cloud",
      "Monitor IoT device health",
      "Perform real-time analytics"
    ],
    correct: 0
  },
  {
    question: "Which of the following technologies is commonly used for IoT data storage and batch processing?",
    options: [
      "Azure Event Hub",
      "Kafka",
      "Data Lake",
      "IoT Hub"
    ],
    correct: 2
  },
  {
    question: "How does IoT Central differ from IoT Hub in Azure's IoT architecture?",
    options: [
      "IoT Central is a SaaS-based IoT application platform, while IoT Hub is a device management and messaging service.",
      "IoT Central only supports edge computing, while IoT Hub only supports cloud computing.",
      "IoT Central processes only batch data, while IoT Hub handles real-time data.",
      "IoT Central is used only for consumer IoT applications, while IoT Hub is used for industrial applications."
    ],
    correct: 0
  },
  {
    question: "Which of the following is an example of a real-time data processing tool in IoT?",
    options: [
      "Data Factory",
      "Azure Synapse",
      "Stream Analytics",
      "Power BI"
    ],
    correct: 2
  },
  {
    question: "What is the function of IoT Edge in an IoT architecture?",
    options: [
      "It acts as a middleware between cloud and devices.",
      "It is used only for device registration.",
      "It only manages IoT device security.",
      "It provides local processing and reduces cloud dependency."
    ],
    correct: 3
  },
  {
    question: "Which of the following is NOT a component of IoT data processing architecture?",
    options: [
      "Hot Path",
      "Cold Path",
      "Warm Path",
      "Static Path"
    ],
    correct: 3
  },
  {
    question: "What is the role of Digital Twins in an IoT ecosystem?",
    options: [
      "It creates a virtual model of physical IoT devices.",
      "It replaces physical sensors in IoT devices.",
      "It stores real-time sensor data permanently.",
      "It only provides security for IoT devices."
    ],
    correct: 0
  },
  {
    question: "In the IoT architecture, what does the Presentation Layer primarily handle?",
    options: [
      "Device management and provisioning",
      "Reporting, visualization, and data APIs",
      "Real-time data processing",
      "IoT security and encryption"
    ],
    correct: 1
  },
  {
    question: "In the context of Edge ML, which of the following describes a key benefit of local data processing at the edge?",
    options: [
      "It reduces latency by avoiding the round-trip time to cloud data centers.",
      "It requires large amounts of continuous bandwidth for streaming data to the cloud.",
      "It relies solely on batch processing in remote cloud servers.",
      "It prevents devices from operating when offline."
    ],
    correct: 0
  },
  {
    question: "What is the main function of a Content Delivery Network (CDN) as mentioned in the context of cloud storage?",
    options: [
      "Providing containerized machine learning models",
      "Scheduling data processing tasks at the edge",
      "Replicating and caching data across multiple edge locations",
      "Running inference on large, unstructured datasets"
    ],
    correct: 2
  },
  {
    question: "Which step in the machine learning workflow involves feeding a model with new, unlabeled data to generate predictions?",
    options: [
      "Data collection",
      "Model training",
      "Model deployment",
      "Inference"
    ],
    correct: 3
  },
  {
    question: "What is the chief advantage of deploying machine learning models in containers at the edge?",
    options: [
      "Increased manual configuration for network resources",
      "Portability and ease of updating the model near data sources",
      "Requirement of high-end servers for container orchestration",
      "Strict reliance on proprietary APIs for all edge services"
    ],
    correct: 1
  },
  {
    question: "Azure IoT Hub is characterized by which of the following?",
    options: [
      "A static, one-way communication channel to the cloud",
      "Absence of protocol support for IoT devices",
      "A managed service offering bi-directional communication between devices and the cloud",
      "An offline-only solution that does not integrate with other Azure services"
    ],
    correct: 2
  },
  {
    question: "Which of the following object detection models is known for its single-step approach, simultaneously predicting bounding boxes and class labels?",
    options: [
      "Faster R-CNN",
      "SSD (Single Shot Detector)",
      "Fast R-CNN",
      "RCNN"
    ],
    correct: 1
  },
  {
    question: "Why is specialized hardware (e.g., GPUs, NPUs) often necessary at the edge to run machine learning workloads effectively?",
    options: [
      "Deep learning inference typically requires accelerated computation",
      "Traditional CPUs cannot connect to IoT devices",
      "It reduces the need for bandwidth and storage",
      "Virtual machines cannot handle parallel computing"
    ],
    correct: 0
  },
  {
    question: "Which of the following is a key characteristic of the YOLOv3 object detection algorithm?",
    options: [
      "It selects regions in an image using a region proposal network.",
      "It processes the entire image in one forward pass to predict bounding boxes and probabilities.",
      "It focuses only on classification without localizing objects",
      "It relies heavily on multi-stage detection pipelines"
    ],
    correct: 1
  },
  {
    question: "What is the first step in deploying an Edge ML workload to an IoT edge device?",
    options: [
      "Target the IoT edge runtime on the edge device.",
      "Write a deployment manifest to define the workload.",
      "Push the containers to a container registry.",
      "Package the data transform, insight, and action into containers."
    ],
    correct: 3
  },
  {
    question: "What is the primary advantage of a SaaS architecture for computer vision models?",
    options: [
      "It eliminates the need to label images before training models.",
      "It requires domain experts to manage the training process entirely.",
      "It restricts the training process to the cloud without offline support.",
      "It allows seamless scaling of datasets and downloading models for offline use."
    ],
    correct: 3
  },
  {
    question: "Which of the following control plane components is the only one that interacts directly with etcd?",
    options: [
      "Controller Manager",
      "API Server",
      "Scheduler",
      "Kubelet"
    ],
    correct: 1
  },
  {
    question: "In the context of Kubernetes, orchestration is best described as:",
    options: [
      "Managing and deploying containers across multiple hosts in a fault-tolerant manner",
      "Running local compute jobs on a single node",
      "Using hypervisors to isolate VMs on a single server",
      "Ensuring minimal CPU and memory usage across cloud instances"
    ],
    correct: 0
  },
  {
    question: "Which of the following Kubernetes worker node components is primarily responsible for managing pod networking and handling load balancing?",
    options: [
      "kube-proxy (Service proxy)",
      "Scheduler",
      "Container runtime",
      "Kubelet"
    ],
    correct: 0
  },
  {
    question: "In the Docker client-server model, which component performs the actual tasks of building, running, and distributing containers?",
    options: [
      "Docker Compose",
      "Docker daemon",
      "Docker registry",
      "Docker Desktop"
    ],
    correct: 1
  },
  {
    question: "Which maintenance strategy focuses on preventing failures by performing periodic, scheduled maintenance based on worst-case lifetimes?",
    options: [
      "Reactive maintenance",
      "Preventive (planned) maintenance",
      "Condition-based maintenance",
      "Predictive maintenance"
    ],
    correct: 1
  },
  {
    question: "In a predictive maintenance workflow, which step involves removing duplicates, dealing with missing values, and handling outliers before modeling?",
    options: [
      "Define the problem",
      "Prepare the data",
      "Analyse the data",
      "Monitor performance"
    ],
    correct: 1
  },
  {
    question: "Which of the following is an advantage of using LSTM (Long Short-Term Memory) networks for predictive maintenance?",
    options: [
      "LSTMs require less data than traditional models",
      "LSTMs cannot handle time-dependent sequences",
      "LSTMs remember long-term patterns in sensor data",
      "LSTMs only work for image recognition tasks"
    ],
    correct: 2
  },
  {
    question: "Which statement best describes Azure Time Series Insights in the context of IoT data?",
    options: [
      "A serverless compute platform for deploying Docker containers",
      "A PaaS offering that ingests, stores, and visualizes large volumes of time-series data from IoT devices",
      "A virtualization hypervisor for running multiple operating systems",
      "A CPU-only compute service for training complex deep learning models"
    ],
    correct: 2
  },
  {
    question: "In Kubernetes, which component assigns pods to nodes?",
    options: [
      "Scheduler",
      "API Server",
      "Controller Manager",
      "Kubelet"
    ],
    correct: 0
  },
  {
    question: "What is the primary advantage of Recurrent Neural Networks (RNNs), including LSTMs, over Convolutional Neural Networks (CNNs) in time-series applications?",
    options: [
      "RNNs are better at extracting spatial features.",
      "RNNs require less data preprocessing compared to CNNs.",
      "RNNs focus on feature extraction rather than sequence mapping.",
      "RNNs add native support for sequential data and temporal dependencies."
    ],
    correct: 3
  },
  {
    question: "What is the primary role of the experience replay pool in the CERAI algorithm?",
    options: [
      "To store completed tasks for analysis after training.",
      "To directly update the Actor and Critic networks after each action.",
      "To store state transition tuples for sampling during gradient descent.",
      "To track resource allocation history across multiple iterations."
    ],
    correct: 2
  },
  {
    question: "In the DDPG-based resource allocation algorithm, what action does the Actor main network perform?",
    options: [
      "It selects an action based on the state and random noise.",
      "It calculates the reward for the Critic network.",
      "It directly updates the allocation record H.",
      "It computes the next state for the edge node."
    ],
    correct: 0
  },
  {
    question: "How is the cost of collaborative cloud-edge computing calculated in a public cloud environment?",
    options: [
      "Based solely on the on-demand instance cost.",
      "By considering only the computing cost of cloud nodes.",
      "By adding the cost of cloud instances (on-demand, reserved, and spot) and the edge node.",
      "By averaging the costs of edge and cloud nodes."
    ],
    correct: 2
  },
  {
    question: "What is the role of the Critic network in the Deep Deterministic Policy Gradient (DDPG) algorithm?",
    options: [
      "To directly perform actions based on the policy.",
      "To generate resource allocation policies independently.",
      "To store experience in the replay pool.",
      "To evaluate the Actor’s performance using a value function."
    ],
    correct: 3
  },
  {
    question: "What is the main goal of the resource allocation algorithms in cloud-edge computing?",
    options: [
      "To maximize the number of VMs allocated",
      "To minimize the long-term cost of the system",
      "To increase the computing time duration",
      "To maximize the reward function"
    ],
    correct: 1
  },
  {
    question: "What are Availability Zones in AWS?",
    options: [
      "Geographic areas where AWS services are available",
      "Multiple isolated locations/data centers within a region",
      "Edge locations to deliver content to end users",
      "Virtual networks defined by customers"
    ],
    correct: 2
  },
  {
    question: "What is the main difference between PAMDP and MDP?",
    options: [
      "PAMDP has a different reward function",
      "PAMDP uses a finite set of parameterized actions",
      "PAMDP doesn't use neural networks",
      "PAMDP is only used for private cloud environments"
    ],
    correct: 1
  },
  {
    question: "What does the Deep Deterministic Policy Gradient (DDPG) algorithm involve?",
    options: [
      "Only Actor networks.",
      "Only Critic networks.",
      "Both Actor and Critic networks.",
      "Neither Actor nor Critic networks."
    ],
    correct: 2
  },
  {
    question: "What is the purpose of the experience replay pool in DDPG?",
    options: [
      "To store allocation records.",
      "To sample experiences for training the networks.",
      "To manage cloud costs.",
      "To predict user demand."
    ],
    correct: 1
  },
  {
    question: "What is the Markov Decision Process (MDP) used for in resource allocation?",
    options: [
      "To model sequential decision-making problems.",
      "To predict user demand.",
      "To manage cloud costs.",
      "To optimize edge node performance."
    ],
    correct: 0
  },
  {
    question: "What happens in a non-FIFO message queue?",
    options: [
      "Messages are processed in the order they are added",
      "Messages are processed randomly",
      "Messages are deleted before being processed",
      "Messages are queued indefinitely"
    ],
    correct: 1
  },
  {
    question: `
Match the following properties with appropriate statements:\n
Properties:\n
X: Consistency\n
Y: Partition-tolerance\n
Z: Availability\n
Statements:\n
1: All nodes see the same data at any time, or reads return the latest written value by any client\n
2: The system allows operations all the time, and operations return quickly\n
3: The system continues to work in spite of network partitions\n
`,
    options: [
      "X-1, Y-2, Z-3",
      "X-3, Y-2, Z-1",
      "X-1, Y-3, Z-2",
      "X-3, Y-1, Z-2"
    ],
    correct: 2
  },
  {
    question: "Which of the following conditions must be satisfied for a global state to be consistent?",
    options: [
      "Messages sent after recording the state must be included in the snapshot.",
      "Messages received after recording the state must be excluded from the snapshot.",
      "Messages received by a process must have been sent before the snapshot was recorded.",
      "Messages sent and received after the snapshot is recorded must be included in the snapshot."
    ],
    correct: 2
  },
  {
    question: "What is the primary role of the marker in the Chandy-Lamport algorithm?",
    options: [
      "To separate messages included in the snapshot from those that are not.",
      "To identify all incoming messages for a process.",
      "To record the state of a process at a specific time.",
      "To terminate the distributed snapshot algorithm."
    ],
    correct: 0
  },
  {
    question: "What does the total system cost in a cloud-edge computing environment consist of?",
    options: [
      "Only the computation cost of service nodes",
      "Only the communication cost of network connections",
      "Both the computation cost of service nodes and the communication cost of network connections",
      "The sum of computation cost, communication cost, and storage cost"
    ],
    correct: 2
  },
  {
    question: "When tasks are offloaded to a local edge node, the end-to-end service time latency is determined by the sum of which two delays?",
    options: [
      "Data transmission delay and queuing delay",
      "Network delay and computational delay",
      "Communication delay and storage delay",
      "Scheduling delay and execution delay"
    ],
    correct: 1
  },
  {
    question: "In the joint LSTM and deep reinforcement learning model for task offloading, what role does the threshold value in LSTM prediction serve?",
    options: [
      "It sets the maximum processing capacity of the edge server.",
      "It decides the communication protocol for task offloading.",
      "It balances prediction accuracy and overhead by determining if the predicted task parameters are acceptable.",
      "It chooses between local execution and offloading based solely on energy consumption."
    ],
    correct: 2
  },
  {
    question: "What is the main objective of the DRL algorithm in the context of task offloading based on LSTM prediction?",
    options: [
      "To minimize the number of offloaded tasks",
      "To increase energy consumption for faster processing",
      "To maximize the total long-term reward by optimizing task scheduling decisions (balancing delay, energy, and task drop rate).",
      "To determine the physical location of IoT devices"
    ],
    correct: 2
  },
  {
    question: "Which of the following best describes horizontal offloading in a cloud-edge computing environment?",
    options: [
      "Transferring workloads from edge nodes to the cloud",
      "Transferring tasks between edge nodes to balance load and reduce latency",
      "Offloading tasks from mobile devices to a nearby cloudlet",
      "Moving computation from a central data center to a remote cloud"
    ],
    correct: 1
  },
  {
    question: "In the Chandy-Lamport algorithm for recording a global snapshot in distributed systems, what is the primary purpose of the marker message?",
    options: [
      "To trigger the execution of local processes",
      "To reset the state of the distributed system",
      "To separate messages that should be included in the snapshot from those that should not",
      "To confirm the termination of the distributed computation"
    ],
    correct: 2
  },
  {
    question: "Which of the following best describes Spark Streaming?",
    options: [
      "A real-time stream processing framework that uses micro-batches",
      "A traditional batch processing engine",
      "A relational database system",
      "A machine learning library"
    ],
    correct: 0
  },
  {
    question: "In Spark Streaming, what is a DStream?",
    options: [
      "A static dataset stored on disk",
      "A sequence of RDDs representing a continuous data stream",
      "A batch file processing tool",
      "A database connector"
    ],
    correct: 1
  },
  {
    question: "What is a major limitation of traditional stream processing systems?",
    options: [
      "Lack of integration with batch processing",
      "Inability to process large data streams",
      "High processing latencies",
      "Limited support for machine learning queries"
    ],
    correct: 0
  },
  {
    question: "In Kafka’s architecture, which component is responsible for storing, replicating, and delivering messages?",
    options: [
      "Producers",
      "Brokers",
      "Consumers",
      "Topics"
    ],
    correct: 1
  },
  {
    question: "Which communication pattern does MQTT primarily use?",
    options: [
      "Request/response",
      "Publish/subscribe",
      "Peer-to-peer",
      "Client polling"
    ],
    correct: 1
  },
  {
    question: "What is a major advantage of edge data centers compared to centralized data centers?",
    options: [
      "They increase latency due to remote processing",
      "They provide lower latency by processing data closer to the source",
      "They require more bandwidth for data transmission",
      "They centralize all processing in one location"
    ],
    correct: 1
  },
  {
    question: "According to the CAP theorem, what trade-off must distributed systems make during a network partition?",
    options: [
      "They can guarantee both consistency and availability",
      "They must choose between consistency and availability",
      "They can ignore partition tolerance",
      "They only need to focus on scalability"
    ],
    correct: 1
  },
  {
    question: "In Cassandra, which consistency level requires a majority of replicas to respond?",
    options: [
      "ONE",
      "ANY",
      "ALL",
      "QUORUM"
    ],
    correct: 3
  },
  {
    question: "What is the primary function of a Bloom filter in Cassandra?",
    options: [
      "Encrypting data on disk",
      "Quickly determining if a key might exist in an SSTable",
      "Replicating data across multiple nodes",
      "Compressing log files"
    ],
    correct: 1
  },
  {
    question: "Which statement best characterizes a key-value store in the context of IoT edge storage?",
    options: [
      "It is a distributed, schema-less storage system optimized for fast lookups using keys",
      "It is a relational database designed for complex joins",
      "It is a file system for storing unstructured data without indexing",
      "It is a batch processing engine for big data analytics"
    ],
    correct: 0
  },
  {
    question: "Which AWS IoT layer is responsible for registering and managing devices?",
    options: [
      "Things",
      "Cloud",
      "Intelligence",
      "Device Shadow"
    ],
    correct: 1
  },
  {
    question: "AWS Greengrass primarily provides what capability at the edge?",
    options: [
      "Device registration",
      "Bulk device onboarding",
      "Local processing and inference",
      "Device security audit"
    ],
    correct: 2
  },
  {
    question: "Which AWS IoT component serves as a digital identity or twin of a physical device?",
    options: [
      "Rules Engine",
      "Device Shadow",
      "Device Gateway",
      "Device Registry"
    ],
    correct: 2
  },
  {
    question: "Which communication protocols does AWS IoT Core predominantly use?",
    options: [
      "MQTT and HTTP",
      "FTP and SMTP",
      "SSH and TCP",
      "UDP and RTP"
    ],
    correct: 0
  },
  {
    question: "In AWS IoT architecture, what role does AWS IoT Device Defender primarily fulfil?",
    options: [
      "Device management",
      "Data analytics",
      "Security monitoring and alerts",
      "Device shadow synchronization"
    ],
    correct: 2
  },
  {
    question: "In the federated learning approach, what primarily differentiates it from traditional machine learning?",
    options: [
      "Centralized data processing",
      "Decentralized model training",
      "Use of supervised learning only",
      "High-speed internet dependency"
    ],
    correct: 1
  },
  {
    question: "What key challenge is associated with federated learning due to non-IID data distribution?",
    options: [
      "Higher accuracy",
      "Easier computation",
      "Client drift",
      "Reduced data privacy"
    ],
    correct: 2
  },
  {
    question: "Autonomous vehicles require edge computing primarily because:",
    options: [
      "It is cheaper than cloud computing.",
      "It provides faster real-time processing.",
      "It has unlimited storage.",
      "It is easier to deploy globally."
    ],
    correct: 1
  },
  {
    question: "What is the primary role of the Lambda functions in AWS Greengrass?",
    options: [
      "Managing network security",
      "Facilitating device-to-device communication",
      "Running local compute tasks triggered by events",
      "Registering devices in the cloud"
    ],
    correct: 2
  },
  {
    question: "Which sensor data is commonly used in autonomous vehicles to provide detailed 3D representations of surroundings?",
    options: [
      "Camera",
      "Radar",
      "Lidar",
      "Ultrasonic"
    ],
    correct: 2
  },
  {
    question: "What is the main difference between edge computing and traditional cloud computing?",
    options: [
      "Edge computing relies entirely on remote data centers",
      "Edge computing processes data closer to the source, reducing latency",
      "Cloud computing processes data locally",
      "Cloud computing does not handle IoT data"
    ],
    correct: 1
  },
  {
    question: "Which of the following best describes the role of IoT in the context of cloud computing?",
    options: [
      "IoT only focuses on storing data in the cloud",
      "IoT connects devices and enables data processing on local edge devices",
      "IoT connects devices to the cloud for data collection and analysis",
      "IoT eliminates the need for cloud storage"
    ],
    correct: 2
  },
  {
    question: "What does the term 'edge computing' primarily refer to?",
    options: [
      "Processing data exclusively in data centers",
      "Bringing computation and data storage closer to the devices generating data",
      "Storing all data locally without using the cloud",
      "Centralizing data analysis to reduce hardware complexity"
    ],
    correct: 1
  },
  {
    question: "Which of the following is a common protocol used in IoT for communication between devices?",
    options: ["HTTP", "MQTT", "FTP", "TCP/IP"],
    correct: 1
  },
  {
    question: "What is a major advantage of using federated learning in IoT systems?",
    options: [
      "It centralizes all data for training models",
      "It keeps data decentralized and trains models on local devices",
      "It requires all devices to send data to a central server",
      "It speeds up data transfer to the cloud"
    ],
    correct: 1
  },
  {
    question: "In which scenario would edge computing provide the most benefit?",
    options: [
      "When data can be processed in batches on a centralized cloud server",
      "When real-time decision-making is critical, such as in autonomous vehicles",
      "When large amounts of data need to be stored for long-term analysis",
      "When the system requires minimal hardware and low energy usage"
    ],
    correct: 1
  },
  {
    question: "What does IoT stand for?",
    options: [
      "Internet of Technology",
      "Internet of Things",
      "Integrated Online Tools",
      "Intelligent Operating Techniques"
    ],
    correct: 1
  },
  {
    question: "What is the main purpose of edge computing?",
    options: [
      "To store all data in one central location",
      "To process data closer to where it is created",
      "To reduce the need for any computation",
      "To eliminate the use of cloud computing"
    ],
    correct: 1
  },
  {
    question: "What type of data does a 'cold path' handle in IoT?",
    options: [
      "Data that needs immediate processing",
      "Data stored for long-term analysis",
      "Data encrypted in real time",
      "Data processed by edge devices only"
    ],
    correct: 1
  },
  {
    question: "What happens when an edge device runs out of resources?",
    options: [
      "It processes tasks faster",
      "It sends tasks to the cloud",
      "It deletes all stored data",
      "It stops working"
    ],
    correct: 1
  }
];

const questionList = {
  iot: iotQuestions,
  iotMLEdge: iotMLEdgeQuestions
}

export default questionList;

