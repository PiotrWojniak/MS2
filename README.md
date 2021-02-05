# Discover Poland 

Code Instytute - Milestone Project 2

This project is a one-page webside about Poland. The purpose of the website is to present interesting Polish cities where tourists can learn about the culture and customs of the country through monuments, cuisine, and the charms of nature

# Website Showcase

<img src="assets/readme/Im-resp-home.jpg">

# User stories

+ As a tourist, I would like to get to know the history and culture of Poland so that I can visit it during my vacation.
+ As a tourist, I wish to get to know some of the most popular places in Poland.
+ As a tourist, I would like to learn about the attractions that can be seen during a day trip.
+ As a tourist who does not speak Polish, I would like to get information about places where the staff also speaks English.

# UX 

This website is aimed at users who intend to visit Poland but do not know which part to go to. The page presents four of the most visited cities in Poland, rich in tourist attractions for both children and adults. The places presented on this site are cultural and historical heritage. Some of those attractions present difficult polish history and others where you can forget about everyday life and just enjoy having fun.

## Project planning

1. My wireframe was create in - Balsamiq Wireframe.

My project planning can be download [here.](https://github.com/PiotrWojniak/MS2/blob/96d00aa6a8333c4c0b87cc91e621972b38b01ccb/assets/Readme/Piotr%20Wojniak%20MS2.pdf) and is display below.

+ Home
    <img src="/assets/Readme/Home.png">

+ Explore
    <img scr="/assets/Readme/Explore.png">

+ Contact
    <img src="/assets/Readme/contact.png">
# Design

## Colours
+ Navbars and footer background colour in sky blue.
+ Buttons in blue and highlighting text to red and white border when hover. - The colors used refer to the national colors of Poland.

## Typography
+ Roboto:ital - to set as defoult style
+ Tangerine - to style all headings and paragraph - is very similar to the font using in old historical books.
+ Bodoni Moda - to style inside button text and navigation bar menu.
+ Gothambook - to style displayed info about atraction on marker.

## Background image
+ Home - the photo shows the landscape of Polish mountains.
+ Map section - to refer to the country, the map is placed against the background of the Polish flag 
+ Contact section - photo shows the landscape of Tatry mountains.
# Features

## Existing features
1. Nav Bar
+ On the top of the website there is a blue navigation bar. When you click either home, explore or contact on the navigation bar it brings you directly to the relevant section. 

1. Home Page
+ On the home page there is an imagine of the Polish Mountains along with text describing the purpose of the website. There is an explore button which once pressed brings you directly to the explore page. There is a question mark representing an imagine which doesn’t pop up. 

1. Explore Page
+ In the explore page there is a set of buttons which should show the relevant location, these currently do not operate as intended. Further, there is a Google map with markers scattered around the most important cities. Each marker can be pressed and once it is pressed it brings up an image and a description of the tourist attraction. Once another marker is pressed a new box with text and an image appears and the prior once disappears. 

1. Contact Page
+ On the contact page one can fill in their name, email address and a request to come directly into contact with the website’s owners. Once all of the relevant information is filled in, the send request button can be pressed to proceed the contact form. 

1. Footer
+ On the footer there are icons which once pressed link directly to the social media sites. It also features a copy right notice.  

## Features left to implement
1. Information window obove marker will be display beside map
# Technology

1. [HTML](https://en.wikipedia.org/wiki/HTML) - to creating structure and layout of the webpsite.
1. [CSS](https://en.wikipedia.org/wiki/CSS) - to styling the website.
1. [JavaScript](https://pl.wikipedia.org/wiki/JavaScript) - to interactive web applications.
1. [Bootstrap](https://getbootstrap.com/) - for design and customize responsive mobile-first sites.
1. [Fontawesome](https://fontawesome.com/start) - for icon style.
1. [Google font](https://fonts.google.com/) - for font style.
1. [Visual studio](https://visualstudio.microsoft.com) - console for writing code.
1. [EmailJS](https://www.emailjs.com/) - for email service
# Testing
## [W3C Markup Validation Service](https://validator.w3.org/) To validate html and css

1. Html
+ typo error in line: 92, column 17 and 131, column 35

2. CSS 
+ No issue found

## [JSHint](https://jshint.com/) version 2.12.0

### To validate java script.
1. Value of clear marker has already been determined.
+ Removing repeted code.
#### Warnings.
1. 240, 283, 319, 355	Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. (google, krakow, map, markers, infowindow)
+ Need to be fixed in the future

1. Undefined variables - google, $, i
+ All three variable is nesserly to run function

### Lighthouse

+ Mobile test resuls twill be dowloaded [here](https://github.com/PiotrWojniak/MS2/blob/master/assets/Readme/mobLigh.pdf)
+ Mobile test resuls twill be dowloaded [here](https://github.com/PiotrWojniak/MS2/blob/master/assets/Readme/descLigh.pdf}
## Errors and fix

1. Info window not closing when new marker is click.
+ Move info window from the local function to the global and store in variable fixed issue in commit - f8facd6

1. Not display confirm window after submiting form.
+ Add alert window in function to display message when form is submited.

1. Info window on map not display content correctly on mobile and tablet.
## Bugs and Problems

1. Image did not display in window info on map.
+ Typo issue fixed in commit - 
1. Bg image not display correctly in Explore section.
+  Fixed in commit - 
# Deployment

## To create a repository:
1. Go to the GitHub web page and login
1. Click Repository on the right side of the profile
1. Click New green buton on rigt side
1. Choose your repository name and click create repository button on bottom

## To deploy a website on GitHub Pages, follow these steps:
1. Go to the repository page
1. Click on settings icon in the top of the page
1. Find "GitHub Pages" section
1. Click on the "Source" dropdown menu
1. Select "master branch" option
1. A green success message should appear in the "GitHub Pages" section with the link to the live preview of the project.

# Credits

1. Description of the "Afrykarium", "Sky Tower", "Kolejkowo" of Wrocław in Polish comes from https://gazetawroclawska.pl and has been translated into English.
1. Image use for European Solidarity Centre was create by Photograph Mike Peel (www.mikepeel.net).
1. Images used for this project was downloaded from Google free source.
1. This pice of code //-- $.each(krakow, function(i, item) --// was used to display info window above markers and was copied from stackoverflow.com.