⛏️ VERUS MINING ANDI ENCOE

A collection of Verus Coin (VRSC) mining tools and launchers designed for Android phones using Termux and Linux VPS / servers.

The project provides several mining versions with different programming languages, interfaces, and mining cores.

✅ Created by: ANDI ENCOE
✅ Telegram: t.me/AndiENCOE
✅ License: MIT License for original code created by ANDI ENCOE

---

📂 AVAILABLE VERSIONS

Choose the version that matches your device and requirements.

Folder| Language| Main Advantage| Requirements
📂 VERUSC| C| Lightweight, fast, and efficient| C Compiler
📂 VERUSJS| JavaScript| Colorful and interactive interface| Node.js + npm
📂 VERUSPHP| PHP| Simple and easy to configure| PHP
📂 VERUSPHYTHON| Python| Simple and easy to use| Python 3
📂 VERUSSH| Bash| Lightweight Android / Termux launcher| Bash + compatible mining core
📂 VERUSVPS| C / Binary| Ready-to-run Linux VPS mining| Linux x86-64

---

📱 ANDROID / TERMUX

The following versions are designed to run on Android phones using Termux:

- VERUSC
- VERUSJS
- VERUSPHP
- VERUSPHYTHON
- VERUSSH / COEVRS

Each version has its own installation method, configuration, interface, and mining core.

Please enter the corresponding folder and read its "README.md" before running the program.

---

🖥️ VPS / LINUX

"VERUSVPS" is designed for Linux VPS / servers using the x86-64 architecture.

Supported examples:

- Ubuntu 22.04 / 24.04 x86-64
- Debian x86-64
- Other compatible Linux x86-64 systems

Check your system architecture:

uname -m

If the output is:

x86_64

the VERUSVPS binary is compatible.

⚠️ "VERUSVPS" is compiled for Linux x86-64 and is not intended for ARM64 VPS.

---

🚀 INSTALLATION

📱 ANDROID PHONE — TERMUX

Clone the repository:

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

Enter the repository:

cd verus-mining-andiencoe

Choose the version you want.

Example — VERUSPHP:

cd VERUSPHP

Run the program:

php bot.php

For other versions, enter the corresponding folder and follow the instructions in its "README.md".

---

⛏️ VERUSSH / COEVRS

"VERUSSH" contains COEVRS MINER, a Bash-based VerusHash mining launcher designed for Android / Termux.

Features include:

- ⛏️ LuckPool support
- ⛏️ Vipor support
- 💰 Change wallet address
- 🏷️ Change worker name
- ⚙️ Configure CPU cores
- 📱 Automatic CPU information detection
- 📊 Mining connection status
- ✅ Accepted / rejected share status
- 🔄 Reset settings
- 🖥️ Simple terminal interface

Enter the folder:

cd verus-mining-andiencoe/VERUSSH

Give execution permission:

chmod +x coe.sh

Run COEVRS:

./coe.sh

For complete COEVRS instructions, see:

VERUSSH/README.md

---

🖥️ VPS / LINUX — VERUSVPS

Clone the repository:

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

Enter the VPS folder:

cd verus-mining-andiencoe/VERUSVPS

Check architecture:

uname -m

Make the mining binary executable:

chmod +x verus

Run:

./verus

Press:

Ctrl+C

to stop mining.

⚠️ Make sure your VPS uses the supported Linux x86-64 architecture.

---

📚 MINING CORES & SOURCES

VERUSC / ANDROID MINING CORE

The VERUSC version uses an ARM-compatible "ccminer" Verus mining core.

Original developers and contributors include:

- Christian Buchner
- Christian H. (Chris84)
- Tanguy Pruvot
- Darktron
- Oink70
- zikyu7 — Android / ARM development

Source repository:

https://github.com/zikyu7/ccminer

🙏 Special thanks to zikyu7 and all original ccminer developers and contributors.

---

VERUSSH / COEVRS MINING CORE

COEVRS uses an ARM-based ccminer mining core.

ARM branch:

git clone --single-branch -b ARM https://github.com/monkins1010/ccminer.git

Source repository:

https://github.com/monkins1010/ccminer

Branch:

ARM

🙏 Special thanks to monkins1010 and all original ccminer developers and contributors.

---

VERUSVPS / LINUX MINING CORE

The VERUSVPS version uses Hellminer / hminer as the mining core for VerusHash mining.

Source repository:

https://github.com/hellcatz/hminer

🙏 Special thanks to the Hellminer developers and contributors for their work on VerusHash mining software.

---

📁 PROJECT STRUCTURE

verus-mining-andiencoe/
│
├── VERUSC/
│   └── README.md
│
├── VERUSJS/
│   └── README.md
│
├── VERUSPHP/
│   └── README.md
│
├── VERUSPHYTHON/
│   └── README.md
│
├── VERUSSH/
│   ├── coe.sh
│   └── README.md
│
├── VERUSVPS/
│   └── README.md
│
└── README.md

---

⚙️ CHOOSE YOUR VERSION

📱 Android / Termux

Choose according to your preference:

VERUSC       → C
VERUSJS      → JavaScript
VERUSPHP     → PHP
VERUSPHYTHON → Python
VERUSSH      → Bash / COEVRS

🖥️ Linux VPS

VERUSVPS     → Linux x86-64

---

🔐 SECURITY

Only use a public Verus wallet address for mining configuration.

Never share:

- ❌ Private key
- ❌ Seed phrase
- ❌ Recovery phrase
- ❌ Wallet password

Do not place private wallet credentials inside mining scripts.

---

⚠️ DISCLAIMER

This project provides tools, launchers, configuration scripts, and setup assistance for Verus Coin (VRSC) mining.

Mining performance depends on:

- CPU architecture
- CPU performance
- Number of CPU cores
- Device temperature
- Operating system
- Internet connection
- Mining pool conditions
- Mining difficulty

All copyrights, credits, and licenses for third-party software remain with their respective developers and projects.

The MIT License included in this repository applies only to the original code and materials created by ANDI ENCOE.

Third-party mining software remains subject to its own licenses and terms.

Users are responsible for reviewing and complying with the licenses and terms of any third-party software used with this project.

---

❤️ SUPPORT THE PROJECT

If this project is useful to you, you can support the development and maintenance of the project.

Created by:

ANDI ENCOE

Telegram:

t.me/AndiENCOE

---

⛏️ VERUS MINING ANDI ENCOE

VERUS COIN (VRSC)

Android / Termux / Linux VPS

Made by ANDI ENCOE

⛏️ Happy Mining!
