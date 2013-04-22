package com.evalimine.server;

import com.google.appengine.api.rdbms.AppEngineDriver;
import com.google.gson.Gson;

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
public class LoginServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
		String fb_id = req.getParameter("facebook");
		String full = "[";
		Connection c = null;
		try {
		      DriverManager.registerDriver(new AppEngineDriver());
		      c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
			  String statement= "";
		      if (!fb_id.equals("")){
					statement ="select id from candidate where fb_id=" + fb_id;
			  }
			  System.out.println(statement);
			  ResultSet rs = c.createStatement().executeQuery(statement);
			  int isId = 0;
				while (rs.next()){
				    String id = rs.getString("id");
				    System.out.println(id);
				    isId = 1;
				    
				    Map<String, String> json = new LinkedHashMap<String, String>();
		            json.put("id", id);
		            
		            String jsonData = new Gson().toJson(json);
		            if (full.length() != 1) {
		            	full += ", ";
		            }
		            full += jsonData;
		            
				}
				
			if (isId==0){
				Map<String, String> json = new LinkedHashMap<String, String>();
	            json.put("id", "0");
	            
	            String jsonData = new Gson().toJson(json);
	            if (full.length() != 1) {
	            	full += ", ";
	            }
	            full += jsonData;
			}
			full += "]";
			  
		} catch (SQLException e) {
		    e.printStackTrace();
		} finally {
		    if (c != null) 
		      try {
		        c.close();
		      } catch (SQLException ignore) {
		      }
		} 
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write(full);
	}
}