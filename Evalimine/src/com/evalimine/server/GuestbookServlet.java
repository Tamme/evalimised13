package com.evalimine.server;

import com.google.appengine.api.rdbms.AppEngineDriver;

import java.sql.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.*;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

public class GuestbookServlet extends HttpServlet {
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {
      UserService userService = UserServiceFactory.getUserService();
      User user = userService.getCurrentUser();
      resp.getWriter().println("Helkjhlkjlo, ");
      if (user != null) {
          resp.setContentType("text/plain");
          resp.getWriter().println("Helkjhlkjlo, " + user.getNickname());
      } else {
          resp.sendRedirect(userService.createLoginURL(req.getRequestURI()));
      }
  }
    
    public void doPost(HttpServletRequest req, HttpServletResponse resp)
    		  throws IOException {
    		   
    		  PrintWriter out = resp.getWriter();
    		  Connection c = null;
    		    try {
    		      DriverManager.registerDriver(new AppEngineDriver());
    		      c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
    		      String fname = req.getParameter("fname");
    		      String content = req.getParameter("content");
    		      if (fname == "" || content == "") {
    		        out.println("<html><head></head><body>You are missing either a message or a name! Try again! Redirecting in 3 seconds...</body></html>");
    		      } else {
    		      String statement ="INSERT INTO entries (guestName, content) VALUES( ? , ? )";
    		      PreparedStatement stmt = c.prepareStatement(statement);
    		      stmt.setString(1, fname);
    		      stmt.setString(2, content);
    		      int success = 2;
    		      success = stmt.executeUpdate();
    		      if(success == 1) {
    		        out.println("<html><head></head><body>Success! Redirecting in 3 seconds...</body></html>");
    		      } else if (success == 0) {
    		        out.println("<html><head></head><body>Failure! Please try again! Redirecting in 3 seconds...</body></html>");
    		      }
    		     }
    		    } catch (SQLException e) {
    		        e.printStackTrace();
    		    } finally {
    		        if (c != null) 
    		          try {
    		            c.close();
    		            } catch (SQLException ignore) {
    		         }
    		      } resp.setHeader("Refresh","3; url=/guestbook.jsp");
    		  }
}