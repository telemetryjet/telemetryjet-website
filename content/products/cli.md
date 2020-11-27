---
title: "TelemetryJet CLI"
---

<div class="sectionWrapper">
    <section class="landingSection">
        <div class="sectionBackground">
		</div>
		<div class="sectionForeground">
			<div class="row top-xs between-xs">
				<div class="col-xs-12 col-md-4">
					<h1>Monitor and control embedded hardware from your terminal.</h1>
					<p>
                        The TelemetryJet CLI is an easy-to-use, portable tool to interact with embedded hardware from the terminal.
					</p>
					<p>
                        Collect and stream data live from serial devices. The CLI can 
                        The CLI can be used on any platform, whether it's your desktop workstation, laptop, or a Raspberry Pi. Whether you're in the shop or in the field, the TelemetryJet CLI is the perfect multi-tool for working with telemetry.
                        Automatic data normalization and conversion: TelemetryJet handles data parsing and normalization, converting all data to a common format. Easily integrate multiple protocols into a single consistent log of telemetry data.
					</p>
				</div>
				<div class="col-xs-12 col-md-7">
					<div id="cliDemoContainer">
						<script id="asciicast-BIn5LRVWUJ0NulMAvzFAcduHN" src="https://asciinema.org/a/BIn5LRVWUJ0NulMAvzFAcduHN.js" async data-autoplay="true" data-preload="true" data-loop="true" data-theme="solarized-dark" data-t="5" data-rows="10"></script>
						<noscript>
						<a href="https://asciinema.org/a/BIn5LRVWUJ0NulMAvzFAcduHN" target="_blank"><img src="https://asciinema.org/a/BIn5LRVWUJ0NulMAvzFAcduHN.svg" /></a>
						</noscript>
					</div>
				</div>
			</div>
			<div class="row middle-xs between-xs">
				<div class="col-xs-12">
					<h1>Multiple output options</h1>
					<div class="landingPageOutlineHeading">
						Stream to a TelemetryJet Server
					</div>
                    <p>
                    Stream directly to a TelemetryJet Server, and use the Server's dashboard and live visualization features to view data as it streams in.
                    </p>
					<div class="landingPageOutlineHeading">
						Stream to a file
					</div>
                    <p>
                    TelemetryJet can output data to a CSV, Sqlite database, or other offline files.
                    TelemetryJet CLI integrates directly with the TelemetryJet Server via the server's websocket API. Pairing the CLI with the Server allows you to instantly collect and visualize live data from your hardware.
                    </p>
				</div>
				<div class="col-md-0 col-lg-7 col-xs-0 col-sm-0">
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
    </section>
</div>

<div class="sectionWrapper landingSectionHighlight overflowHiddenSection">
    <section class="landingSection">
        <div class="sectionBackground">
		</div>
		<div class="sectionForeground">
			<div class="row middle-xs">
			</div>
			<div class="row middle-xs between-xs">
				<div class="col-xs-12 col-md-6 col-lg-6">
					<h1>Compatible with many industry-standard protocols and platforms.</h1>
					<div class="landingPageOutlineHeading">
						Wide compatibility
					</div>
					<p>
						TelemetryJet CLI is compatible with a growing number of industry-standard protocols and platforms such as Mavlink, ROS, Victron Energy, NMEA 0183, and more.
					</p>
					<div class="landingPageOutlineHeading">
						Scriptable protocols
					</div>
					<p>If your protocol is not on the list, use the scriptable encoder and decoder system to interface with any format you need.
					</p>
					<div class="landingPageOutlineHeading">
						Easy-to-use defaults
					</div>
					<p>Haven't chosen a protocol for your project? Consider the TelemetryJet Arduino SDK, a lightweight and flexible library for communicating with microcontrollers. The Arduino SDK has been designed for ease-of-use with the CLI.
					</p>
				</div>
				<div class="col-xs-0 col-sm-0 col-md-6 col-lg-6">
					<img id="dataSourceListImage" src="/img/data-source-list.svg">
				</div>
				<div class="col-xs-12 col-sm-12 col-md-0 col-lg-0">
					<img id="dataSourceListImageMobile" src="/img/data-source-list.svg">
				</div>
			</div>
		</div>
    </section>
</div>
<div class="sectionWrapper">
    <section class="landingSection">
        <div class="sectionBackground">
		</div>
		<div class="sectionForeground">
			<div class="row">
				<div class="col-xs-12">
					<h1>Advanced Features</h1>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6">
					<div class="landingPageOutlineHeading">
						Share serial streams with other software
					</div>
                    <p>
                    Using other programs, such as the Arduino IDE, to read and write data? No problem. The CLI can create a "virtual serial port", sitting in front of your other software, silently collecting data. When the other software writes data, TelemetryJet will keep silent to avoid interrupting your workflow.
                    </p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6">
					<div class="landingPageOutlineHeading">
						Bidirectional communication and control
					</div>
                    <p>
                    Control devices directly from the CLI, or relay data between multiple devices. If you are using the TelemetryJet Arduino SDK or another protocol that supports bidirectional communication, TelemetryJet CLI works a central telemetry hub.
                    Data will automatically be transmitted between microcontrollers and the CLI. Send commands from the CLI, between controllers, or remotely from the TelemetryJet Server.
                    Remote control of your devices opens up a world of possibilities. 
                    The TelemetryJet CLI is a great alternative to platforms such as ROS for simple multi-node applications
                    that require communication between devices and monitoring from a separate computer.
                    </p>
				</div>
			</div>
			<div class="clearfix"></div>
		</div>
    </section>
</div>