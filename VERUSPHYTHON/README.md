⛏️ VERUS PYTHON MINER

An automatic, lightweight, and easy-to-use Verus Coin (VRSC) mining tool for Android phones using Termux.

Created by: ANDI ENCOE ✅
Telegram: t.me/AndiEncoe

---

✨ FEATURES

- ✅ Supports Luckpool & Vipor
- ✅ Adjustable CPU core usage
- ✅ Automatically saves settings
- ✅ Designed for Android / Termux
- ✅ Can be run directly with Python
- ✅ Virtual environment ("venv") is not required

---

🚀 INSTALLATION & USAGE

📱 TERMUX ANDROID

1. Update Termux

pkg update && pkg upgrade -y

2. Install requirements

pkg install python git libjansson -y

3. Clone the repository

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

4. Enter the VERUS PHYTHON folder

cd verus-mining-andiencoe/VERUSPHYTHON

5. Run the miner

python vrs_miner.py

«Note: A Python virtual environment ("venv") is not required. The miner can run directly using the Python environment provided by Termux.»

---

⚡ QUICK INSTALL — ONE COMMAND

Copy and paste the following command into Termux:

pkg update && pkg upgrade -y && pkg install python git libjansson -y && git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git && cd verus-mining-andiencoe/VERUSPHYTHON && python vrs_miner.py

---

🔄 RUN AGAIN

If the repository has already been downloaded and the required packages have been installed:

cd ~/verus-mining-andiencoe/VERUSPHYTHON
python vrs_miner.py

---

🔄 AUTO START VERUS PYTHON MINER

To automatically enter the VERUSPHYTHON folder and run the miner every time a new Termux shell is opened, run:

echo "cd ~/verus-mining-andiencoe/VERUSPHYTHON && python vrs_miner.py" >> ~/.bashrc

After that, close and reopen Termux or start a new shell.

VERUS PYTHON MINER will automatically run:

cd ~/verus-mining-andiencoe/VERUSPHYTHON
python vrs_miner.py

«Note: Auto-start will run the miner automatically every time a new Termux shell is opened. Make sure you only add this command once to "~/.bashrc".»

---

🛑 STOP MINING

If the miner is currently running, press:

CTRL + C

This stops the running mining process.

---

❌ DISABLE AUTO START

If you no longer want the miner to automatically start when opening a new Termux shell:

nano ~/.bashrc

Find and delete this line:

cd ~/verus-mining-andiencoe/VERUSPHYTHON && python vrs_miner.py

Save the file and exit "nano".

Then close and reopen Termux.

🔍 CHECK AUTO START STATUS

To check whether the auto-start line is still present:

grep "verus-mining-andiencoe/VERUSPHYTHON" ~/.bashrc

If there is no output, auto-start has been successfully disabled.

«Note: Disabling auto-start does not delete the miner. You can still run it manually at any time.»

cd ~/verus-mining-andiencoe/VERUSPHYTHON
python vrs_miner.py

---

📚 SOURCE & ACKNOWLEDGEMENTS

Core Mining Program: ccminer Verus

The mining core used by VERUS PYTHON MINER is based on ccminer Verus.

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

This project only simplifies the usage and configuration process.

All copyrights, credits, and licenses for third-party programs remain with their original authors and are subject to their respective licenses.

---

⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

All third-party software, source code, copyrights, and licenses remain the property of their respective developers and contributors.

This project does not claim ownership of third-party mining software.

---

⛏️ HAPPY MINING!

— ANDI ENCOE
