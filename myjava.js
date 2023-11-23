
/* I wanted to keep the look bright with soft pastels.
Blue, purple and grey were the main colours I used. I wanted
particular focus to go to the images as Feefer himself isn't
very qualified as a an employee.*/

/* The page looked a touch bland with the single 
bg colour so I wanted to direct the viewer with 
a small box around the entire webpage.*/
body {
  background-color: lightblue;
  border: 5px solid lavender;
  margin-left: 400px;
  margin-right: 400px;
  padding-top: 20px;
  padding-bottom: 20px;
}

/* This was important to me that this header was the
biggest text on either webpage as it is the name!*/
h1 {
	text-align:center;
	color: darkslateblue;
	font-size: 40px;
	font-weight: 100;
	font-family: impact;
}
/* I wanted to keep space above h2 to differentiate
between each list, however I minimized the bottom margin
to bring the lists closer to the h2.*/
h2 {
	text-align:center;
	color: darkslategray;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 1px;
	font-size: 32px;
	font-weight: lighter;
	font-family: calibri;
}
/* I kept the <p> selector simple as there wasn't
much content to address. Again, I wanted to make sure the 
text was centered to match with the images on screen.*/
p {
	text-align: center;
	font-family: simplex;
	font-weight: bold;
}

/* this allows me to center the 3 lists on the page 
by using the class selector and creating an in-line block.
https://www.w3schools.com/howto/howto_css_center-list.asp*/
div.list {
	text-align: center;
	font-family: simplex;
	font-weight: bold;
}
ul.thisUL {
	display: inline-block;
	text-align: left;
}

/* I wanted to alter the h1 heading on the second page so I 
used an ID selector. */
#ref {
	text-align: center;
	color: slateblue;
	font-family: monotype corsiva;
}

/* The images felt lifeless with the background and
I wanted to make sure they were given importance on
the screen. I added a rounded border to soften the
images and matched the colours with the title.
https://www.w3schools.com/css/css_border_rounded.asp*/
img{
	border: 5px solid darkslateblue;
	border-radius: 8px;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
/* This table selector allows me to center the table
on the page above the photo, as well as alter the amount
of space taken up on the screen.*/
table{
	width: 40%;
	margin-left: auto;
	margin-right: auto;
	padding: 10px;
}

/* I wanted the table to look less ugly and implemented
some more soft colours to much the website aesthetic*/	
th, td {
  border:4px solid lavender;
  padding: 2px;
  text-align:center;
  font-family: rockwell condensed;
}
/* Here I used the Hover selector to add some interactivity to
my table. I found the instructions on w3schools.
https://www.w3schools.com/html/html_table_styling.asp*/
tr:hover {background-color: lavender;}

div.links{
	margin: auto;
	width: 52%;	
}

a.ext{
	background-color: slateblue;
	color: lavender;
	padding: 14px 25px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-family: simplex;
	font-weight: bold;
}

button{
	border:4px solid lavender;
	padding: 2px;
	font-family: simplex;
	font-weight: bold;
	padding: 5px 15px;
	margin: auto;
}

#container{
	text-align: center;
	padding: 10px;
}

#buttonbefore{
	width: 90px;
}

#buttonafter{
	width: 90px;
}