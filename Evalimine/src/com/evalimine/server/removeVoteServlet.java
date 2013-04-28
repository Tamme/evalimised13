package com.evalimine.server;

import com.google.appengine.api.rdbms.AppEngineDriver;
import com.google.gson.Gson;
import com.google.gwt.dev.util.Empty;

import java.sql.*;
import java.util.LinkedHashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import javax.servlet.http.*;

/**
 * 
 * Servlet for my data section
 *
 */
public class removeVoteServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public void doPost(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
		System.out.println(req.getParameter("values"));
		String id = req.getParameter("values");
		//String party =req.getParameter("erakond");
		String result = "";
		Connection c = null;
		try {
		      DriverManager.registerDriver(new AppEngineDriver());
		      c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
			  String statement ="DELETE FROM votes where voter_id = " + id;
			  System.out.println(statement);
			  PreparedStatement stmt = c.prepareStatement(statement);
			  int success = 2;
			  success = stmt.executeUpdate();
			  String statement2 ="UPDATE candidate set voting = 0 where id = " + id;
			  System.out.println(statement2);
			  PreparedStatement stmt2 = c.prepareStatement(statement2);
			  int success2 = 2;
			  success = stmt2.executeUpdate();
			  
			  if(success == 1) {
			    result = "Hääl tühistatud";
			  } else if (success == 0) {
			    result = "Hääle tühistamine ebaõnnestus";
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