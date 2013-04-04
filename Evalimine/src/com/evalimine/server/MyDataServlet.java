package com.evalimine.server;

import com.google.appengine.api.rdbms.AppEngineDriver;
import java.sql.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import javax.servlet.http.*;

/**
 * 
 * Servlet for my data section
 *
 */
public class MyDataServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest req, HttpServletResponse response) throws IOException {
		System.out.println(req.getParameter("values"));
		String id = req.getParameter("values");
		String result = "";
		Connection c = null;
		try {
		      DriverManager.registerDriver(new AppEngineDriver());
		      c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
			  String statement ="UPDATE candidate set is_candidate = 1 where id = " + id;
			  System.out.println(statement);
			  PreparedStatement stmt = c.prepareStatement(statement);
			  int success = 2;
			  success = stmt.executeUpdate();
			  
			  if(success == 1) {
			    result = "Kandidatuur esitatud";
			  } else if (success == 0) {
			    result = "Kandidatuuri esitamine ebaõnnestus, kas sa oled ikka oma andmed salvestanud?";
			  }
		} catch (SQLException e) {
		    e.printStackTrace();
		} finally {
		    if (c != null) 
		      try {
		        c.close();
		      } catch (SQLException ignore) {
		      }
		} 
		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(result);
	}
}