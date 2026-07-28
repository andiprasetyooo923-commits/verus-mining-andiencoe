⛏️ COEVRS MINER

VerusHash V2.2 · Android / Termux

A Bash-based Verus Coin (VRSC) mining launcher designed for Android phones using Termux.

✅ Created by: ANDI ENCOE
✅ Telegram: t.me/AndiENCOE
✅ License: MIT License for original code created by ANDI ENCOE

---

📱 VERUSSH / COEVRS

COEVRS is a simple Bash-based launcher for VerusHash mining on Android / Termux.

It uses an ARM-based ccminer mining core and provides an easy terminal menu for configuring the wallet, worker name, CPU cores, and mining pool.

---

✨ FEATURES

- ✅ VerusHash mining
- ✅ Android / Termux support
- ✅ LuckPool support
- ✅ Vipor support
- ✅ Change receiving wallet address
- ✅ Change worker name
- ✅ Configure CPU core usage
- ✅ Automatic CPU information detection
- ✅ Display total CPU cores
- ✅ Mining connection status
- ✅ Accepted / rejected share status
- ✅ Reset settings to default
- ✅ Simple terminal interface

---

📱 REQUIREMENTS

- Android phone
- Termux
- ARM / ARM64 compatible device
- Internet connection
- Verus wallet address
- Compatible VerusHash mining core

---

🚀 INSTALLATION

1. Clone the main repository

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

2. Enter the VERUSSH folder

cd verus-mining-andiencoe/VERUSSH

3. Give execution permission

chmod +x coe.sh

4. Run COEVRS

./coe.sh

---

🔄 RUN AGAIN

If the repository has already been downloaded and execution permission has already been given:

cd ~/verus-mining-andiencoe/VERUSSH
./coe.sh

---

🔄 AUTO START COEVRS

To automatically enter the VERUSSH folder and run COEVRS every time a new Termux shell is opened, run:

echo "cd ~/verus-mining-andiencoe/VERUSSH && ./coe.sh" >> ~/.bashrc

After that, close and reopen Termux or start a new shell.

COEVRS will automatically run:

cd ~/verus-mining-andiencoe/VERUSSH
./coe.sh

«Note: Auto-start will run COEVRS automatically every time a new Termux shell is opened. Make sure you only add this command once to "~/.bashrc".»

---

🛑 STOP MINING

If COEVRS is currently running, press:

CTRL + C

This stops the running mining process.

---

❌ DISABLE AUTO START

If you no longer want COEVRS to automatically start when opening a new Termux shell:

nano ~/.bashrc

Find and delete this line:

cd ~/verus-mining-andiencoe/VERUSSH && ./coe.sh

Save the file and exit "nano".

Then close and reopen Termux.

🔍 CHECK AUTO START STATUS

To check whether the COEVRS auto-start line is still present:

grep "verus-mining-andiencoe/VERUSSH" ~/.bashrc

If there is no output, auto-start has been successfully disabled.

«Note: Disabling auto-start does not delete COEVRS. You can still run the miner manually at any time.»

cd ~/verus-mining-andiencoe/VERUSSH
./coe.sh

---

📋 COEVRS MENU

1. ⛏️ START MINING ON LUCKPOOL
2. ⛏️ START MINING ON VIPOR
3. ✏️ CHANGE MY WALLET ADDRESS
4. ✏️ CHANGE WORKER NAME
5. ⚙️ CHANGE CPU CORE COUNT
6. 🔄 RESET TO DEFAULT SETTINGS
7. ❌ EXIT PROGRAM

---

⛏️ SUPPORTED POOLS

LuckPool

stratum+tcp://na.luckpool.net:3956

Vipor

stratum+tcp://ap.vipor.net:5040

---

💰 WALLET

The receiving wallet can be changed directly from the COEVRS menu.

Default Support Wallet

RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw

To use your own wallet, select:

3. CHANGE MY WALLET ADDRESS

The wallet address is used as the mining username.

---

🏷️ WORKER NAME

Default Worker Name

hp-01

The worker name can be changed through:

4. CHANGE WORKER NAME

Mining Username Format

WALLET.WORKER

Example:

RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw.hp-01

---

⚙️ CPU CONFIGURATION

COEVRS automatically detects the number of CPU cores available on the device.

Example:

TOTAL       : 8 CORE
RECOMMENDED : MAXIMUM 7 CORE

The CPU core count can be changed through:

5. CHANGE CPU CORE COUNT

For better stability, it is recommended to leave at least one CPU core available for the Android system.

---

🔧 MINING CORE SOURCE

COEVRS uses an ARM-based ccminer mining core.

Clone the ARM Branch

git clone --single-branch -b ARM https://github.com/monkins1010/ccminer.git

Source Repository

https://github.com/monkins1010/ccminer

Branch Used

ARM

🙏 Special thanks to monkins1010 and all original ccminer developers and contributors.

---

🔄 RESET SETTINGS

To restore the default COEVRS settings, select:

6. RESET TO DEFAULT SETTINGS

Default Settings

Wallet : RPDY7CtU9kanXYrugZ4a2N8Hr3kF3rzCUw
Worker : hp-01
CPU    : 7 cores

---

⚠️ DISCLAIMER

COEVRS is a Bash-based launcher and configuration script for VerusHash mining.

All copyrights, credits, and licenses for third-party software remain with their respective developers and projects.

The MIT License included in this repository applies only to the original code and materials created by ANDI ENCOE.

Please review and follow the license and terms of the third-party mining software used by this project.

Mining performance depends on the device, CPU, operating system, temperature, network connection, and pool conditions.

---

❤️ SUPPORT THE PROJECT

If this project is useful to you, you can support the development and maintenance of the project.

Created by: ANDI ENCOE

Telegram: t.me/AndiENCOE

---

⛏️ COEVRS MINER

VERUSHASH V2.2

Android / Termux

Made by ANDI ENCOE

⛏️ Happy Mining!
