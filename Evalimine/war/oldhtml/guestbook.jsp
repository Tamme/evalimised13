<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.util.List" %>
<%@ page import="java.sql.*" %>
<%@ page import="com.google.appengine.api.rdbms.AppEngineDriver" %>

<html>
  <body>

	<%
	Connection c = null;
	c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
	ResultSet rs = c.createStatement().executeQuery("SELECT guestName, content, entryID FROM entries"); %>
	
	<table style="border: 1px solid black">
	<tbody>
	<tr>
	<th width="35%" style="background-color: #CCFFCC; margin: 5px">Name</th>
	<th style="background-color: #CCFFCC; margin: 5px">Message</th>
	<th style="background-color: #CCFFCC; margin: 5px">ID</th>
	</tr> <%
	while (rs.next()){
	    String guestName = rs.getString("guestName");
	    String content = rs.getString("content");
	    int id = rs.getInt("entryID"); %>
	
	<tr>
	<td><%= guestName %></td>
	<td><%= content %></td>
	<td><%= id %></td>
	</tr>
	
	<% }
	c.close(); %>
	
	</tbody>
	</table>
	<br />
	No more messages!
	<p><strong>Sign the guestbook!</strong></p>
	<form action="/sign" method="post">
	    <div>First Name: <input type="text" name="fname"></input></div>
	    <div>Message:
	    <br /><textarea name="content" rows="3" cols="60"></textarea>
	    </div>
	    <div><input type="submit" value="Post Greeting" /></div>
	    <input type="hidden" name="guestbookName" />
	  </form>
	  </body>
	</html>