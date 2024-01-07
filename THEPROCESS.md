1.THE LOOK (UI). 
  - page1: Landing Page
  -      - Testimonials (****DONE)
  -      - Footer (****DONE)
  -      - Features (****DONE)
  -      - Landing (****DONE)
  -      - News (**** NOT DONE)  
  - page2: About US (****ONGOING)
  - page3: Services
  - page4: Contacts
  - page5: Signup (****DONE)
  - page6: login (****DONE)

2. I WANT THAT WHEN SONEONE SELECTS TYPOLOGY AND THE OTHER DROP DOWNS, THE INFORMATION IS CAPTURED AND POSTED IN THE NEXT PAGE
###   
To capture and post the information selected in a typology dropdown and other dropdowns on the next page, you will need to use a combination of HTML, JavaScript, and server-side programming.

Here's a general outline of the steps you can follow:

- Create an HTML form on the first page with the typology dropdown and other dropdowns you want to capture information from.
- ### Here I have used form, in the typologies page, I have put the houses and the drop down menu in the same form
### That form is sent to js function that captures the data and parses it into the next page.
### now here is the kicker, in the <form> tag, we need an event listener for the id...
### This is the first victory for today, yesterday's victory was making the pages. 

### Use JavaScript to capture the selected values from the dropdowns when the form is submitted. You can use the addEventListener method to listen for the form submission event and retrieve the selected values.
### Store the captured values in JavaScript variables or objects.
### Submit the form to the next page using either the action attribute of the form or JavaScript's window.location method.
### On the next page, retrieve the captured values from the server-side using the programming language of your choice (e.g., PHP, Python, etc.).

I need to first make the moreoptions into line to work...Before going into the server

The test worked... this is the listener that I needed (id="myForm" action="testreceiver.html" onsubmit="return submitForm()")

Then I rewrote one by one the script2.js, while testing each...
Its quite satisfying to see things work...

For the image, I noticed that the image was never selected, there was an overlay and text on it... So instead of selecting an image, I selected the text tht was the topmost layer.... This was a EUROKA MOMENT FOR ME! I am glad it came through...

### Process the captured values on the server-side and use them as needed (e.g., store in a database, display on the page, etc.).


3. NOW WE HAVE TO LINK THE IMAGE SELECTED ON THE PREVIOUS PAGE TO DISPLAY IN THE CURRENT MOREOPTIONS PAGE.... iT SHOULD ALWays RETRIEVE OTHER IMAGES ON THE SAMEFROM THE DATA BASE SO AS TO PROVIE PLANS ETC

### now the first step is to have their functions on different files....DONE
### Linking the selection of typology to the moreoption first colunm:
  i realised the id i put in the <p> needed to cj=hange from the id of the element. And I updated the function to reflect that. Then I removed the script I had put in the moreoptions file and brought it into the moreoptions.js file.
  THis way the functions were not calling wach other... There were some repetitions in calling the parameters... So I deleted the repetitions and it worked....

### Next: I need to edit the sizes of the images Presented in the first column....

I willl keep updating as I go :)
This is the most excited I have been in a while :)
