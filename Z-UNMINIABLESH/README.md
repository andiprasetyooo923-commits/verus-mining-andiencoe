⛏️ Z-MINING-UNMINEABLESH

Easy CPU Mining on Android / Termux using unMineable RandomX

✅ Created by: ANDI ENCOE
✅ Telegram: https://t.me/AndiENCOE

---

✨ FEATURES

- ✅ Easy setup and configuration
- ✅ Supports unMineable RandomX
- ✅ Supports multiple cryptocurrencies
- ✅ Adjustable CPU core usage
- ✅ Custom worker/device name
- ✅ Lightweight and easy to use
- ✅ XMRig-based mining
- ✅ Ready to run on Termux
- ✅ Automatic startup option

---

📁 PROJECT STRUCTURE

Z-MINING-UNMINEABLESH/
├── README.md
├── run.sh
└── xmrig

File Description

- "run.sh" — Main launcher and configuration script
- "xmrig" — XMRig RandomX mining binary
- "README.md" — Project documentation

---

📋 REQUIREMENTS

- Android phone
- 2 GB RAM or higher recommended
- Termux
- Stable internet connection
- ARM64 Android device recommended
- RandomX-compatible CPU

---

📥 DOWNLOAD TERMUX

If you do not have Termux installed yet:

📦 Termux APK

https://sfile.co/qs62rLpT8d4

Install Termux and open it before continuing.

---

🚀 INSTALLATION

1. Update Termux

yes | pkg update && pkg upgrade -y

2. Install Required Packages

pkg install git libuv hwloc openssl -y

3. Clone Repository

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

4. Enter Project Folder

cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLESH

5. Give Execute Permission

chmod +x run.sh xmrig

6. Start Mining

./run.sh

Follow the instructions shown on the screen:

Coin Code
Wallet Address
Worker Name
CPU Core Count

---

🔄 RUN AGAIN

To start the miner again:

cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLESH
./run.sh

---

⚙️ CPU CORE USAGE

When "run.sh" asks for the CPU core count, choose according to your device.

Recommended:

1 Core   = Low
2 Cores  = Light
4 Cores  = Medium
6+ Cores = High

It is recommended to leave at least 1 CPU core free for normal Android system operation.

---

🚀 AUTO START

Auto Start can automatically launch the miner when a new Termux shell starts.

Run this command once:

echo 'cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLESH && printf "1\n" | ./run.sh' >> ~/.bashrc

Then restart Termux.

Auto Start will:

1. Enter the "Z-MINING-UNMINEABLESH" folder.
2. Launch "run.sh".
3. Automatically select option 1.

«⚠️ Make sure option "1" in your current "run.sh" is the option you want Auto Start to select.»

---

🛑 STOP MINING

Press:

CTRL + C

---

❌ DISABLE AUTO START

Open ".bashrc":

nano ~/.bashrc

Remove this line:

cd ~/verus-mining-andiencoe/Z-MINING-UNMINEABLESH && printf "1\n" | ./run.sh

Save the file and restart Termux.

Check Auto Start

grep "Z-MINING-UNMINEABLESH" ~/.bashrc

If there is no output, Auto Start has been successfully disabled.

---

💰 SUPPORTED COINS

Examples:

- LTC
- DOGE
- TRX
- SHIB
- XRP
- USDT
- ADA
- SOL
- XMR

And many other cryptocurrencies supported by unMineable.

«Coin availability may change. Check the current unMineable supported-coin list before mining.»

---

🌐 MINING

This project uses unMineable for pool/service infrastructure and XMRig as the RandomX CPU mining engine.

The "run.sh" launcher simplifies the configuration and startup process.

---

📚 MINING SOFTWARE

XMRig

Official Repository:

https://github.com/xmrig/xmrig

Special thanks to the XMRig developers and contributors.

This project simplifies the installation and configuration process for Android / Termux users.

---

⚠️ IMPORTANT NOTES

- Use UPPERCASE for Coin Code.
- Make sure your wallet address is correct.
- Choose a reasonable CPU core count.
- Leave at least 1 CPU core free when possible.
- Monitor your device temperature.
- Stop mining if your phone becomes excessively hot.
- Avoid prolonged high CPU usage while charging.
- Mining performance depends on the device CPU, cooling system, and Android configuration.
- Keep your device properly ventilated during mining.

---

⚠️ DISCLAIMER

This project is provided for educational and personal use.

Please use this project in accordance with the licenses of the original software.

All copyrights, source code, trademarks, and licenses of third-party software remain the property of their respective owners.

XMRig is an independent open-source project and is not affiliated with ANDI ENCOE.

---

❤️ SUPPORT THE PROJECT

If you would like to support this project, you can send a donation to:

TRON (TRX)

THbREaD5o9Ru48PpELKZngjW4NPpLzbp34

Thank you for your support! 🙏

---

👤 CREATOR

ANDI ENCOE

Telegram:
https://t.me/AndiENCOE

---

⛏️ Z-MINING-UNMINEABLESH

Easy CPU Mining on Android / Termux

Made with ❤️ by ANDI ENCOE
