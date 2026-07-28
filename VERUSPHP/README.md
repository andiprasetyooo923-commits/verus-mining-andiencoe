🚀 VERUSPHP · Verus Coin Mining Bot

Verus Mining Bot for Android / Termux · VRSPHP Version

---

📌 DEVELOPER INFORMATION

- Name: ANDI ENCOE
- Telegram: @AndiENCOE
- Version: VRSPHP
- Language: PHP

---

✨ MAIN FEATURES

✅ Automatically downloads and installs ccminer from the configured source repository
✅ Supports Luckpool Asia & Vipor Asia pools
✅ Automatically detects the device's available CPU cores
✅ Allows you to choose how many CPU cores to use
✅ Automatically saves configuration settings — no need to enter them again
✅ Automatically reconnects when the connection is lost
✅ Simple and easy-to-use interface
✅ Ready to run directly on Termux

---

📋 MINIMUM REQUIREMENTS

- Android phone with at least 2 GB RAM
- Latest version of Termux
- Stable internet connection
- Disable Battery Saver / Battery Optimization for Termux

---

📥 INSTALLATION & USAGE

Open Termux and run the following commands one by one.

1. Update Termux packages

yes | pkg update && pkg upgrade -y

2. Install required packages

yes | pkg install libjansson git php termux-tools -y

3. Clone this repository

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

4. Enter the VERUSPHP folder

cd verus-mining-andiencoe/VERUSPHP

5. Run the mining bot

php bot.php

---

🔄 RUNNING AGAIN

If the repository has already been downloaded and the required packages have been installed:

cd ~/verus-mining-andiencoe/VERUSPHP
php bot.php

---

🔄 AUTO START VERUSPHP

To automatically enter the VERUSPHP folder and run the mining bot every time a new Termux shell is opened, run:

echo "cd ~/verus-mining-andiencoe/VERUSPHP && php bot.php" >> ~/.bashrc

After that, close and reopen Termux or start a new shell.

VERUSPHP will automatically run:

cd ~/verus-mining-andiencoe/VERUSPHP
php bot.php

«Note: Auto-start will run VERUSPHP automatically every time a new Termux shell is opened. Make sure you only add this command once to "~/.bashrc".»

---

🛑 STOP MINING

If VERUSPHP is currently running, press:

CTRL + C

This stops the running mining process.

---

❌ DISABLE AUTO START

If you no longer want VERUSPHP to automatically start when opening a new Termux shell:

nano ~/.bashrc

Find and delete this line:

cd ~/verus-mining-andiencoe/VERUSPHP && php bot.php

Save the file and exit "nano".

Then close and reopen Termux.

🔍 CHECK AUTO START STATUS

To check whether the VERUSPHP auto-start line is still present:

grep "verus-mining-andiencoe/VERUSPHP" ~/.bashrc

If there is no output, auto-start has been successfully disabled.

«Note: Disabling auto-start does not delete VERUSPHP. You can still run the mining bot manually at any time.»

cd ~/verus-mining-andiencoe/VERUSPHP
php bot.php

---

⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

All third-party software, source code, copyrights, and licenses remain the property of their respective developers and contributors.

This project does not claim ownership of third-party mining software.

---

📚 SOURCE & ACKNOWLEDGEMENTS

Core Mining Program: ccminer Verus

The mining core used by VERUSPHP is based on ccminer Verus.

Original Developers and Contributors

- Christian Buchner
- Christian H. (Chris84)
- Tanguy Pruvot
- Darktron
- Oink70
- zikyu7 — Android / ARM development

🔗 Original repository:
https://github.com/zikyu7/ccminer

🙏 Special thanks to zikyu7 and all original developers and contributors.

This project only simplifies the usage, installation, and configuration process.

All copyrights, credits, and licenses for third-party software remain with their respective original authors and projects.

---

👤 CREATOR

VERUSPHP — ANDI ENCOE

Telegram: @AndiENCOE

⛏️ Verus Coin Mining on Android / Termux
