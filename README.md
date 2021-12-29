<h2>Motivation</h2>
experiment with <a href='https://openlibrary.org/'>openlibrary api</a>

<h2>Points of interest</h2>
<ul>
<li>No api key is needed</li>
<li>You can get books information given search string - searchString</li>
<li>Currently i render : book name , first book author , book image</li>
<li>You can limit the number of books returned - limitNum</li>
<li>Some images are empty</li>
<li>Currently only 100 requests/IP are allowed for every 5 minutes. If any IP tries to access more that the allowed limit, the service will return "403 Forbidden" status</li>
</ul>

<h2>Usage</h2>
the follwoing will search for the string books and will return 30 results at the most
&lt;Books searchString="books" limitNum={30} /&gt;


<h2>Open issues</h2>
<ul>
<li>Get book description</li>
<li>use input for search and limit</li>
</ul>
