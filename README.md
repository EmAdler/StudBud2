# StudBud2
Old Repo is not working this is the new one


**Advanced Web Design**
READ ME

**What is it?**

This is a web application that has been built to increase the productivity of uni students (18yrs – 24yrs). The application has a range of assets that will assist students to get the most out of their uni course, by completing their work to a high stand.

**The target audience/need?**

The web application StudBud is aimed to help uni students with low range learning difficulties, including dyslexia, attention deficit hyperactivity disorder (ADHD), developmental coordination disorder (DCD), and developmental language disorder (DLD). (Vic.gov, n.d.). A learning disability is defined as a life-long neurobiological disorder that causes people to have difficulty receiving, storing, processing, and producing information- despite average ability (Idaminnesota, 2017). This disability can affect individuals learning capability very differently, and the application is built to try and make studying at university for these individuals easier. I personally have a mild form of dyslexia, which has allowed me to design in a way that would not only help others but also myself. To understand how I could create an application to help this target audience I sent out a range of surveys to ask about what application would be the most helpful for them (see below) as well as design factors that help them to study.

![research](/public/readmeimages/research.png)

 From my research finding the basic factor that I needed to incorporate including, font choice (large san-serif font with a large amount of leading), simple and consist of colours, short concise information (e.g. headers, bullet points), grey text rather than black text and using bold to emphasize information rather than underlining or italics. Hence, these are the factors that I incorporated throughout the application to ensure it meets the needs of the users (Morris, 2018).


**How the 'need' changed?**

In my initial pitch for advanced web design, my target audience was too broad as it was, “ to assist first-year university students (18yrs-24yrs) trying to navigate university work.” This target market was too broad to work with as I couldn’t base my design decision on any specific information. Moreover, by designing for people with learning difficulties it enabled me to design for a reason, which helped with any decision regarding font, colour, layout etc.


**The overall design of the StudBud:**

There is a range of design factors that I have considered and used across the web application to create consistency and professional appeal. I altered the type and colour of the text from the design pitch to the final product as in the final application I use the font 'Raleway' (sans-serif) in a dark grey colour to ensure it is easy to ready for the target audience. Moreover, I have used the design principles of colour association, throughout the website, as each page has its corresponding colour. For example, the task list is a light blue, and the music player is yellow, this will enable the users to link the function of each page to a colour, increasing the ease of navigation across the application. Initially, I had the logo and footer also change colour depending on the page the user is on, however once beginning to code the website it was too busy to have those elements also change colour, hence I decided to keep them black and white. Across the website, there is a range of different buttons, which all have the same layout and animation however, depending on the page the button is used on the colour will be changed. The buttons all have a colours background with white text and a white border which keeps the aesthetic simple without being too overpowering. I have employed the design principle of feedback as to when the user hovers over the buttons there is a .5sec animation that changes the colour providing instant feedback. The major changes I had for the overall design between the pitch and the final output was ensuring that all text has a max-width of 60% which ensures the sentence does not lead across the screen. I have also ensured to keep all text very small and concise with a maximum of 2 sentences of information in one block allowing the content to be easy to digest for the user. 

**Home page:**

The home page is a very simple landing page for the users, which provides a basic outline of what the application is, and how it can be used. It introduces the styling for the application, by showing which colour and icons are associated with each page as well as the button and typography used. It also provides 5 tips on how to use the application in list styling to make it easy to read. The major changes between my initial design of the home page are the layout of the heading and no longer using an image to match the block of text in section 2. I altered the heading style to be consistent across all the pages on the website as when I was speaking to my friends she stated, “why is that one different - tess”. Thus, I made all the page headers have the same styling, but with a different background image and background colour for the text. I also cut out the image in the first section of the page as it didn’t add any value or information to the web application, making the page more seamless. 

![Home Page](/public/readmeimages/homepagecompare.png)

**Task List:**

The task list page of the application has a very simple style with a range of functions for the user to ensure they do not forget any tasks at uni. The first section of the page has a form where the user can add all the details about their task and once, they submit the form the information will appear on the left side of the screen. This provides instant feedback on the data they have submitted. Once the user has added their tasks, they can drag and drop their task into different columns in the second section to organise their tasks. Additionally, they can alter the names of each column by clicking the text, creating a way to customise the page. Creating the drag and drop function on the web application was difficult at the beginning as I had to figure out a way to create the task information into a div that could be moved. Once overcoming this learning curve, I was able to pull the information together to create a functioning drag and drop function (see below).

![drag and drop test](/public/readmeimages/draganddroptest.png)

 I also used (Mozilla, 2022) to discover how to edit a title on the column which significantly improved the functionality of the page as the user can customise their use of the columns e.g. priorities, subject, dates, etc. (see below).

 ![column names](/public/readmeimages/columnnameslong.png)

  The overall design of the task list page did change, as in the pitch, I didn’t consider the different information that the user would need to include for a task as I initially only designed to have a space for the name of the task. I altered this section by splitting the page into two and having the left side be the form to input the content and the right side to display the information. The structure of the bottom section of the page stayed pretty consistent as it was a simple and user-friendly layout (see below). 

 ![task list compare](/public/readmeimages/tasklistcompare.png)

**Dictionary** 

The dictionary is the simplest-looking page on the website however holds a large quantity of data. The dictionary page allows the user to search for a word and the word type, meaning and example will appear below. I have employed the use of an API (Free Dictionary API, n.d.) to hold all the information about the words and then used a range of styling to display the information. I wanted to ensure the page is very simple when the user first opens it to ensure they were not overwhelmed with the information. Once, they have searched the word the information will appear below. Similarly, I made sure to include a range of instructions on this page including ‘type the word here...’ and ‘Your info will appear here...’ to guide how to use the page. Having these instructions on the application was particularly important due to the needs of the target audience of the website. The design of the dictionary page was very similar to my initial design in A2, however where the colours appear, and the type of information displayed is slightly different. I had to make these changes as the information from the API provided was shown differently than expected. Moreover, the simple rounded rectangle layout of content provides an easy way for the users to read and understand the content. (see below)

 ![dictionary compare](/public/readmeimages/dictionarycompare.png)

**Music player**

The music player is a page that enables the user to listen to a range of audio files through the application. The application has 7 embedded music files that the user can listen to by clicking the buttons play/pause, previous or next. I kept this page very simple as I wanted to ensure the focus was solely on listening to the music rather than the visuals hence, I only included the title of the song as well as a list of the songs. The user can easily navigate to which song they would like to listen to by clicking the buttons on the application. Each song has a corresponding number that is shown in the title and is on the list allowing the user to recognise the song they would like to hear in the list and then click the next button until they reach that number. It was initially very difficult to create a music player as I was unsure how to embed the music, whilst ensuring that a new song would change when the next button was clicked, however after lots of experimentation and research I was able to create the function I desired. I simplified the overall look of the music player from the pitch to the final product as when I began to code the page, I realised it was much more complicated than anticipated hence I had to cut back some of my ideas such as uploading your songs. If I was to create this page again in the future, I would like to incorporate a few more complex elements such as a timeline of the song and the corresponding images to the songs. Moreover, simplifying this page it will allow the user to understand the application and focus on listening to music without getting distracted by a moving timeline of image changes. (see below)

![musicplayer compare](/public/readmeimages/musicplayercompare.png)

**Timer**

The timer page was also a very simple page that was focused on functionality rather than aesthetics. I employed the function of a Pomodoro timer that had a range of different buttons that would set the timer, depending on what was selected. Each button set different digits on the timer to encourage the user to work or have a break until the timer ends. I made sure the timer was in very large font as it was the most important element as well as having clear instructions on how to use the application. I also employed the use of colour association to allow the user to link the use of the page to the colour (green). The design of the page was similar to my initial design however I made the button less intense. Overall, the design of the timer page of the application is easy for the user to use and promoted productivity (IMAGE).

![timer compare](/public/readmeimages/timercompare.png)

**Overall**

The design of the application will assist university students that experience low range learning disabilities and help them to stay on track and help with completing all their university needs.


**Commits**

My orignal repository stopped working hence I had to create another this week, thus there is only commits from the past few days. 



**References**

BAMANIA, U. (2021, September 10). Learn To Build a Simple Dictionary Application Using JavaScript. Make Us OF. Retrieved June 3, 2022, from https://www.makeuseof.com/build-dictionary-app-using-javascript/
C. (2021, October 10). Build A Dictionary App in HTML CSS & JavaScript. CodingNepal. Retrieved June 3, 2022, from https://www.codingnepalweb.com/build-dictionary-app-html-javascript/
Cloudflare. (n.d.-a). PixaBay. Retrieved June 3, 2022, from https://pixabay.com/music/search/mood/relaxing/
Cloudflare. (n.d.-b). CodePen. Retrieved June 3, 2022, from https://codepen.io/rajdgreat007/pen/edvZpx
Free Dictionary API. (n.d.). Dictionary API. Retrieved June 3, 2022, from https://dictionaryapi.dev/
Idaminnesota. (2017, September 1). Learning disability or low ability? Learning Disabilities Association of Minnesota. Retrieved June 3, 2022, from https://www.ldaminnesota.org/community-programs/fact-sheets/learning-disability-low-ability
Morris, A. B. (2018, May 12). Designing for Dyslexia - UX Planet. Medium. Retrieved June 3, 2022, from https://uxplanet.org/designing-for-dyslexia-6d12e8c41cd7
Mozilla. (2022, April 20). Making content editable - Developer guides | MDN. Developer Mozilla. Retrieved June 3, 2022, from https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content
Traversy Media. (2021, April 10). Build a Music Player | Vanilla JavaScript [Video]. YouTube. https://www.youtube.com/watch?v=QTHRWGn_sJw
Tyler Potts. (2021, October 2). Build a Todo list app in HTML, CSS & JavaScript in 2021 | JavaScript for Beginners tutorial [Video]. YouTube. https://www.youtube.com/watch?v=MkESyVB4oUw
V. (n.d.). Simple-Music-player/index.html at gh-pages · vivekdogra02/Simple-Music-player. GitHub. Retrieved June 3, 2022, from https://github.com/vivekdogra02/Simple-Music-player/blob/gh-pages/index.html
Vic.gov. (n.d.). Understanding types of learning difficulty. Education and Training. Retrieved June 3, 2022, from https://www.education.vic.gov.au/school/teachers/teachingresources/discipline/english/reading/Pages/understandings.aspx
W3schools. (n.d.). HTML Drag and Drop API. W3 Schools. Retrieved June 3, 2022, from https://www.w3schools.com/html/html5_draganddrop.asp


