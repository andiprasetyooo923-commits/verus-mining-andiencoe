⛏️ VERUSJS - JavaScript Verus Coin Mining

✅ Created by: ANDI ENCOE
✅ Telegram: t.me/AndiEncoe

A Node.js-based Verus Coin (VRSC) mining script for Android phones using Termux, featuring an attractive interface and easy-to-use controls for both beginners and experienced users.

---

🔥 FEATURES

✅ Colorful interface with large text
✅ Automatically saves settings — no need to enter them again
✅ Choose between Luckpool / Vipor
✅ Adjust the number of CPU cores according to your phone's capabilities
✅ Automatically reconnects if the connection is lost
✅ Two mining modes: index.js / index-v2.js
✅ Designed for Android phones using Termux

---

🚀 COMPLETE INSTALLATION & USAGE

📱 TERMUX ANDROID

⚡ QUICK INSTALL — RUN WITH ONE COMMAND

Copy and paste the following command directly into Termux:

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git && cd verus-mining-andiencoe/VERUSJS && pkg update && pkg upgrade -y && pkg install nodejs git libjansson -y && npm install && node index.js

«Note: The quick install starts index.js by default.»

---

🛠️ MANUAL INSTALLATION

If you prefer to run the commands one by one:

1. Update Termux

pkg update && pkg upgrade -y

2. Install required packages

pkg install nodejs git libjansson -y

3. Clone the repository

git clone https://github.com/andiprasetyooo923-commits/verus-mining-andiencoe.git

4. Enter the VERUSJS folder

cd verus-mining-andiencoe/VERUSJS

5. Install dependencies

npm install

---

▶️ RUN VERUSJS

VERUSJS provides two mining modes.

🔹 OPTION 1 — index.js

node index.js

🔹 OPTION 2 — index-v2.js

node index-v2.js

Choose the version that best suits your device and configuration.

---

🔄 RUNNING AGAIN

If the repository has already been downloaded and the dependencies have been installed:

Option 1

cd ~/verus-mining-andiencoe/VERUSJS
node index.js

Option 2

cd ~/verus-mining-andiencoe/VERUSJS
node index-v2.js

---

🔄 AUTO START VERUSJS

You can choose which version should automatically start whenever a new Termux shell is opened.

⚡ AUTO START — index.js

echo "cd ~/verus-mining-andiencoe/VERUSJS && node index.js" >> ~/.bashrc

⚡ AUTO START — index-v2.js

echo "cd ~/verus-mining-andiencoe/VERUSJS && node index-v2.js" >> ~/.bashrc

«Important: Use only one of the auto-start commands above. Do not add both to "~/.bashrc".»

After setting auto-start, close and reopen Termux or start a new shell.

---

🛑 STOP MINING

If VERUSJS is currently running, press:

CTRL + C

This stops the running mining process.

---

❌ DISABLE AUTO START

If you no longer want VERUSJS to automatically start when opening a new Termux shell:

nano ~/.bashrc

Find and delete the auto-start line that you previously added.

For index.js

Delete:

cd ~/verus-mining-andiencoe/VERUSJS && node index.js

For index-v2.js

Delete:

cd ~/verus-mining-andiencoe/VERUSJS && node index-v2.js

Save the file and exit "nano".

Then close and reopen Termux.

🔍 Check Auto Start Status

To check whether VERUSJS auto-start is still enabled:

grep "verus-mining-andiencoe/VERUSJS" ~/.bashrc

If there is no output, auto-start has been successfully disabled.

«Note: Disabling auto-start does not delete VERUSJS. You can still run either version manually anytime.»

---

📚 SOURCE & ACKNOWLEDGEMENTS

Core Mining Program: ccminer Verus

- Christian Buchner
- Christian H. (Chris84)
- Tanguy Pruvot
- Darktron
- Oink70
- zikyu7 — Android/ARM development

🔗 Source: https://github.com/zikyu7/ccminer

🙏 Special thanks to zikyu7 and all original developers and contributors.

This project only simplifies the usage and configuration process. All copyrights and credits for third-party programs remain with their original authors and are subject to their respective licenses.

---

⚠️ DISCLAIMER

Please use this program in accordance with the licenses and terms of the source projects used.

VERUSJS — ANDI ENCOE
⛏️ Verus Coin Mining on Android/Termux
