# Srikar-Kalvakolanu-CCAH-Screen

## Read-Me Guide
<p>This repository holds all the code as well as answers to the question as per the CCAH Developer Screen Document provided to me. I have included the code for the technical questions in two separate files (see the individual questions for the links). I have also included additional thoughts and content based on those questions in those sections. Please let me know if you have any questions. 

## Short Answer Questions

### Question 1
<p><strong>Question: </strong>You are attempting to make several visual/layout changes to a web page. If you only have one chance to place your code, how do you ensure/test that it’s correct? (short explanation — no code necessary)</p>
<p><strong>Answer: </strong>As a general practice, it's best to work on new features/fixes on a branch of the repository. Hotfix branches can be merged directly into the master after approval, while larger feature implementations can stay be added in larger updates to a particular site. In the case that a particular part of a feature doesn't work, one could merge only the meaningful/working changes. 
Additionally, when developing a website, it's always recommended to use a local environment to visualize the changes being made (with hot reloading even better!). It's also useful to use built in browser tools such as the mobile views built into chrome dev tools to visualize the responsiveness of a particular change (you can also manually test this by making the viewport bigger or smaller. Unit testing is possible with tools like Jest to determine if something is rendering correctly. It's also worth using tools like HTML and CSS validators to determine if the code follows best practices. Post-deployment, tools like browserstack, are great to see the page across browsers.</p>

### Question 2
<p><strong>Question: </strong>Imagine you have a web page with a form for users to fill out and submit. Can you think of a way that the page can save the user’s progress if they leave (close web page or navigate away) and come back later using front end code only? (Short explanation — no code necessary)</p>
<p><strong>Answer: </strong>There are a few ways that could be implemented to store this data. Local Storage can store data in the browser's cache and can store a significant amount of data. Local Storage also persists until it is cleared using JavaScript, or the cache is cleared in the browser making it a powerful substitute for storing small amounts of data without a back-end database. Session Storage is another option, however this data only persists if the browser or tab being used is active, thus would fail if the web page is closed. Cookies might be another viable option if the storage needs are very small (less than 4KB). Cookies can be fairly persistant as well, but are heavily limited by the amount of data they can store.</p>

## Code Questions

### Question 3
<p>Question: <a href="http://ccahproduction.com/assessment/frontEnd/01.html">This Page</a> is the page for this question.</p>
<p>You want this text: "This is the copy you must edit" to change if someone visits this page: https://ccahproduction.com/assessment/frontEnd/01.html?content=firsttime vs. this page: https://ccahproduction.com/assessment/frontEnd/01.html?content=returning</p>
<p>You can place JavaScript code in a script tag on the page what front end code would change the text on that page depending on the URL visited?</p>
<p>Provide a code snippet - This snippet must change the text when tested. Placeholders showing that you would change the text here or what you could do to accomplish this are disqualifying.</p>
<p><strong>File: </strong>[JavaScipt Snippet](Question3.js) or: </p>

```
const copyText = document.querySelector("p")

const currentURL = window.location.href

if(currentURL.split("=")[1] == "returning"){
    copyText.innerHTML = "Thanks for coming back to the website!"
}
```

### Question 4
<p>Using HTML, demonstrate your understanding of the following: Boilerplate HTML structure, internal CSS, external CSS and inline styles, HTML Tables, HTML Forms. Additional Requirements: </p>
<ol>
<li>Put all your styles in a single style tag. You also must reference an external stylesheet (it doesnt have to be real though, just make a reference).</li>
<li>Create an external reference to a JS file either to a CDN or local file with a relative path.</li>
<li>Create a table with a single row and two table cells. Make the table 600px wide, centered, and 200px from the top of the screen. Achieve this however you’d like.</li>
<li>In the first cell, include a block of lorem ipsum text. Use inline styling to modify some or part of it.
<li>Also in the first cell, include a placeholder image.</li>
<li>In the second cell, create a form with one text input that makes a “GET” request to your file.</li>
</ol>
<p>Additional styling and design isn’t necessary, but feel free to add in additional markup to make the document more accessible, and shows consideration for HTML best practices, including best practices for HTML used in an email. What is normally included in a form? What is included in a table in an HTML email?</p>

<p>Extra Credit for Above:</p>
<ul>
<li>Make the table cells stack on smaller screen widths. If you have trouble with this, alternatively you can make two divs below your table that stack on smaller screen widths.</li>
<li>Include a script tag to do some sort of DOM manipulation.</li>
<li>Add another field to your form with radio buttons.</li>
</ul>

<p><strong>Answer: </strong>See Question 4 folder in repository.</p>
