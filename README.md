## Guerilla

Guerilla is built on Node.js. It is optimized for use on the Bitcoin Mini.

## Installation

To load the npm dependencies:

`npm install`

To load the bower dependencies:

`bower install`

To run:

`node guerilla`

## Setup

Retail consumer setup is plug-and-play. When the Bitcoin Mini is delivered, the customer plugs in the two included cables in this order 1) ethernet 2) power. The Mini will bootup. When the Node.js server is running, the Mini discovers it's own internal network NAT IP and sends an email to the email associated with the purchase of the Mini. This is all done internally on the Mini itself and never connects to a Mini Computing server. When the customer recieves the email, they can simply point any browser from a network connected device at the IP contained in the email.

If the user doesn't have access to the email used for purchase, there is a manaul way to find the internal IP address by logging into the router's UI and finding devices on the network. More detailed directions are included with purchase, or can easily be found on the internet.

When a user shuts down or unplugs their Mini the process will have to be completed again.

### Security

The Mini is designed to run a server behind the router's firewall. The UI is protected from the wilds of the internet by the router's NAT routing protocol. Currently we do not recommend opening up ports on your router, like 8332 for bitcoin due, to the security risk, until the Bitcoin Mini gets to a point of higher security. What that means is that Bitcoin Minis don't seed the network. It does connect to peers, but doesn't offer the blockchain to download for new peers. The Mini functions as a fully operational full node.

There is a chance that your ISP will 

### Globally Installed Packages

These packages are installed globally on the Mini for ease of use in development.

	Node.js
	npm
	Expressjs
	Bower

### Locally Installed Packages

These packages are locally installed on the Mini, which means they are part of the app itself and can be seen in the node_modules folder.

	bitcoin
	bitcoinjs-lib
	body-parser
	colors
	ejs  - probably going to replace with a CDN for angular
	fs-extra
	internal-ip
	jsonp
	nodemailer
	nodemailer-direct-transport

	DEV Dependencies
	grunt
	sha1-file  - don't have a use right now....

## License

Guerilla is free and open-source software released under the MIT license.

## Copyright

Guerilla (c) 2015 Mini Computing, LLC 
Released under MIT license