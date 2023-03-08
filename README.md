# **PROJECT 2 Music Theory Quiz**
Music Theory Quiz is a simple multiple choice answers music theory quiz with images.  It's aim is to test the user's knowledge of music theory.  
<br>

This is the live site: [music-theory-symbol-quiz](https://8000-caitriona71-musictheory-al09nogg78y.ws-eu89b.gitpod.io/)

## **Features**
A relevant background image, a "How to play" section lists the rules for how to play the game, a "start game" button, a quiz of 10 questions with images displayed pertaining to each question together with four multiple choice answer options from which the user selects an answer, a "restart game" button which appears when the user has finished the quiz and alert messages informing the user whether they have selected the correct answer and alerting them when the game is over.
<br>
<br>

## **Design**

### **Imagery**
<br>

![background image](/assets/screenshots/background-image.jpg)

* The background image is relevant to the theme of the site and was chosen over a plain colored background.
<br>

![questions images](/assets/images/clef-1.jpg)

* The relevant question images are from Clipart Library

### **Typography**
<br>

![background image](/assets/screenshots/header-font.png)

* The header font Boogaloo was chosen as it is fun and visually striking. If the font isn't imported correctly, cursive will serve as fallback. 

### **Colors**
* The color scheme for the website was chosen to blend in with the background image. The answer buttons have a 2px solid (#ffffff) border and when hovered over, the answer buttons change colors from (#goldenrod) to (#0a0500). The "start game" and "restart game" buttons are (#goldenrod) with a 2px solid (#ffffff) border also. A border radius of 10px was used on the buttons to blend in with the header font.

![color scheme](/assets/screenshots/color-scheme.png)<br>
![color scheme](/assets/screenshots/color-scheme2.png)


## **Technologies Used**

* HTML5
* CSS
* Javascript
* Gitpod
* GitHub
* [Google Fonts](https://fonts.google.com)
* [TinyPNG](https://tinypng.com)
* [webformatter.com](https://webformatter.com)
<br>
<br>

## **Future Improvements**

* Various levels of difficulty could be included.
* A score counter could be included.
<br>
<br>

## **Content**
Images from Clipart Library [http://clipart-library.com/]
<br>
<br>

## **Testing**
The site contains 10 multiple choice answer questions.  The user has the option of selecting one answer from a selection of four.  An alert message informs them if their answer is correct or wrong and they have the option of restarting the quiz when the quiz is over or after they have started the quiz. The site has been tested on different devices and it works well. 
<br>

![Device Testing](/assets/screenshots/site-testing1.png)
<br>
<br>
![Device Testing](/assets/screenshots/site-testing2.png)
<br>
<br>
![Device Testing](/assets/screenshots/site-testing3.png)
<br>
<br>
![Device Testing](/assets/screenshots/site-testing4.png)
<br>
<br>

## **Validator Testing**
### ***Lighthouse*** - The quiz was tested for performance using Lighthouse.
<br>

![Lighthouse Performance](/assets/screenshots/light-house.png)
<br>
<br>
### ***W3C HTML Validator*** - HTML code was tested and returned no errors.

![W3C HTML Validator Test](/assets/screenshots/html-validator.png)
<br>
<br>
### ***W3C CSS Validator*** - CSS code was tested and returned no errors.

![W3C CSS Validator Test](/assets/screenshots/css-validator.png)
<br>
<br>
### ***JS Hint Validator*** - Javascript code was tested and returned no errors.

![JSHintValidatorTest](/assets/screenshots/js-hint-validator.png)
<br>
<br>
## **Image Compression**
### ***Tinypng*** - Images were compressed with Tinypng.

![TinyPng](/assets/screenshots/tinypng.png)
<br>
<br>
## **Deployment**
The site was deployed to GitHub pages. The steps to deploy are as follows:
* In the GitHub respository, click on the "settings" tab.
* From the Source Section drop-down menu, select the Main branch.
* Once the Main branch has been selected, the page will be refreshed with a detailed ribbon display indicating that the project was successfully deployed.
<br>
<br>

## **Credits**
* YouTube tutorials<br>
* Clipart Library<br>
* Tinypng
<br>
<br>

## **Acknowledgements**
* My Course Facilitator for her helpful advice, guidance and encouragement. <br>
* My mentor for his help and feedback. <br>
* Tutor Support at Code Institute. <br>







![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome Caitriona71,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **September 1, 2021**

## Gitpod Reminders

To run a frontend (HTML, CSS, Javascript only) application in Gitpod, in the terminal, type:

`python3 -m http.server`

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

To run a backend Python file, type `python3 app.py`, if your Python file is named `app.py` of course.

A blue button should appear to click: _Make Public_,

Another blue button should appear to click: _Open Browser_.

In Gitpod you have superuser security privileges by default. Therefore you do not need to use the `sudo` (superuser do) command in the bash terminal in any of the lessons.

To log into the Heroku toolbelt CLI:

1. Log in to your Heroku account and go to *Account Settings* in the menu under your avatar.
2. Scroll down to the *API Key* and click *Reveal*
3. Copy the key
4. In Gitpod, from the terminal, run `heroku_config`
5. Paste in your API key when asked

You can now use the `heroku` CLI program - try running `heroku apps` to confirm it works. This API key is unique and private to you so do not share it. If you accidentally make it public then you can create a new one with _Regenerate API Key_.

------

## Release History

We continually tweak and adjust this template to help give you the best experience. Here is the version history:

**September 1 2021:** Remove `PGHOSTADDR` environment variable.

**July 19 2021:** Remove `font_fix` script now that the terminal font issue is fixed.

**July 2 2021:** Remove extensions that are not available in Open VSX.

**June 30 2021:** Combined the P4 and P5 templates into one file, added the uptime script. See the FAQ at the end of this file.

**June 10 2021:** Added: `font_fix` script and alias to fix the Terminal font issue

**May 10 2021:** Added `heroku_config` script to allow Heroku API key to be stored as an environment variable.

**April 7 2021:** Upgraded the template for VS Code instead of Theia.

**October 21 2020:** Versions of the HTMLHint, Prettier, Bootstrap4 CDN and Auto Close extensions updated. The Python extension needs to stay the same version for now.

**October 08 2020:** Additional large Gitpod files (`core.mongo*` and `core.python*`) are now hidden in the Explorer, and have been added to the `.gitignore` by default.

**September 22 2020:** Gitpod occasionally creates large `core.Microsoft` files. These are now hidden in the Explorer. A `.gitignore` file has been created to make sure these files will not be committed, along with other common files.

**April 16 2020:** The template now automatically installs MySQL instead of relying on the Gitpod MySQL image. The message about a Python linter not being installed has been dealt with, and the set-up files are now hidden in the Gitpod file explorer.

**April 13 2020:** Added the _Prettier_ code beautifier extension instead of the code formatter built-in to Gitpod.

**February 2020:** The initialisation files now _do not_ auto-delete. They will remain in your project. You can safely ignore them. They just make sure that your workspace is configured correctly each time you open it. It will also prevent the Gitpod configuration popup from appearing.

**December 2019:** Added Eventyret's Bootstrap 4 extension. Type `!bscdn` in a HTML file to add the Bootstrap boilerplate. Check out the <a href="https://github.com/Eventyret/vscode-bcdn" target="_blank">README.md file at the official repo</a> for more options.

------

## FAQ about the uptime script

**Why have you added this script?**

It will help us to calculate how many running workspaces there are at any one time, which greatly helps us with cost and capacity planning. It will help us decide on the future direction of our cloud-based IDE strategy.

**How will this affect me?**

For everyday usage of Gitpod, it doesn’t have any effect at all. The script only captures the following data:

- An ID that is randomly generated each time the workspace is started.
- The current date and time
- The workspace status of “started” or “running”, which is sent every 5 minutes.

It is not possible for us or anyone else to trace the random ID back to an individual, and no personal data is being captured. It will not slow down the workspace or affect your work.

**So….?**

We want to tell you this so that we are being completely transparent about the data we collect and what we do with it.

**Can I opt out?**

Yes, you can. Since no personally identifiable information is being captured, we'd appreciate it if you let the script run; however if you are unhappy with the idea, simply run the following commands from the terminal window after creating the workspace, and this will remove the uptime script:

```
pkill uptime.sh
rm .vscode/uptime.sh
```

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
