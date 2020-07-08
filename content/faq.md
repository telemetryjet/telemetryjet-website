---
title: "FAQ"
---

## Q. Why is the Desktop Client an electron application?

In order to ensure the TelemetryJet UI experience is consistent across all platforms, we use Electron for our desktop application.
This allows our team to more rapidly ship features on all platforms, including Windows, Mac OS, Linux, and the web.
The Desktop Client uses the same technology built into the TelemetryJet Cloud web interface.

## Q. Is there a native version of the Desktop Client?
There is not currently a native version of the client. If you are seeking to display telemetry data on embedded platforms
or those not supported by the Desktop Client, you can use the TelemetryJet REST API to poll data points from the server
and display them directly in any interface of your choice.

## Q. What platforms does the TelemetryJet Local Server support?

The TelemetryJet Local Server has builds available for:

- Windows 32-bit and 64-bit (Tested on Windows 10)
- Mac OS
- Linux x86 (Tested on Ubuntu 18.04)
- Linux ARM (Tested on Raspberry Pi 4B)


Other platforms have not been tested. The source code and build tools are available at [https://github.com/telemetryjet/tjet-server](https://github.com/telemetryjet/tjet-server)

## Q. What platforms does the TelemetryJet Desktop Client support?

The TelemetryJet Desktop Client has builds available for:
- Windows 32-bit and 64-bit (Tested on Windows 10)
- Mac OS
- Linux x86 (Tested on Ubuntu 18.04)
- Linux ARM (Tested on Raspberry Pi 4B)


## Q. Why are the Local Server and Desktop Client installed separately?

While you can install a Local Server and Desktop Client on the same host, 
The Desktop Client can also be used separately from the server.
The client can be pointed to a server running on the local network, or the TelemetryJet Cloud.

Similarly, the Local Server can run on a headless device such as a Raspberry Pi, and can be remotely accessed.
One common setup is to install the Local Server on a device running on a robot, and access telemetry data
remotely via the Desktop Client running on a secondary laptop.


