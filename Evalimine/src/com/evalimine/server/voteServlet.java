package com.evalimine.server;

import com.google.appengine.api.channel.ChannelFailureException;
import com.google.appengine.api.channel.ChannelMessage;
import com.google.appengine.api.channel.ChannelService;
import com.google.appengine.api.channel.ChannelServiceFactory;
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
public class voteServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {
		Connection c = null;
		String id = req.getParameter("values");
		String full = "[";
		try {
		      DriverManager.registerDriver(new AppEngineDriver());
		      c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
			  String statement= "";
		      statement ="select voted_name from votes where voter_id=" + id;
			  System.out.println(statement);
			  ResultSet rs = c.createStatement().executeQuery(statement);
				while (rs.next()){
				    String voted_name = rs.getString("voted_name");
				    System.out.println(voted_name);
				    
				    Map<String, String> json = new LinkedHashMap<String, String>();
		            json.put("voted_name", voted_name);
		            
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
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ChannelService channelService = ChannelServiceFactory.getChannelService();
		String channelKey = "xyz";
		Connection c = null;
		String [] params = request.getParameter("values").split(" ");
		try {
			DriverManager.registerDriver(new AppEngineDriver());
		    c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
	      String statement = "insert into votes(voted_id, voter_id, voted_party, voted_area) Select \"" + params[1] + "\", \"" + params[2] + "\", party, area from candidate where id = \"" + params[1] + "\"";
	      System.out.println(statement);
	      PreparedStatement stmt = c.prepareStatement(statement);
	      int success = 2;
	      success = stmt.executeUpdate();
	      String statement2 = "UPDATE candidate set voting = 1 where id = " + params[2];
	      System.out.println(statement2);
	      PreparedStatement stmt2 = c.prepareStatement(statement2);
	      int success2 = 2;
	      success2 = stmt2.executeUpdate();
	      String statement3 = "UPDATE votes SET voted_name = (select candidate.fullname from candidate where candidate.id=" + params[1] + ") WHERE voter_id = " + params[2];
	      System.out.println(statement3);
	      PreparedStatement stmt3 = c.prepareStatement(statement3);
	      int success3 = 2;
	      success3 = stmt3.executeUpdate();
	      //if unsuccessful then TODO...
		} catch (Exception e) {
	        System.out.println(e);
			e.printStackTrace();
	    } finally {
	        if (c != null) {
	        	try {
		            c.close();
		            } catch (SQLException ignore) {
		         }
	        }
	    }
		channelService.sendMessage(new ChannelMessage(channelKey, "voted"));

	}
	
}


/*
String message = request.getParameter("message");
String user = "test";
//users.get(key)
String from = request.getParameter("from");
System.out.println("postisservletis");
if (user != null && !user.equals("") && message != null
    && !message.equals("")) {
  try{
  	String outputMessage ="<data>" +
	  "<type>updateChatBox</type>" +
	  "<message>"+message+"</message>" +
	   "</data>"; 
  		
    channelService.sendMessage(new ChannelMessage("test", "back"));
  } catch (ChannelFailureException channelFailure) {
    response.getWriter().print("OFFLINE");
  } catch (Exception e) {
    response.getWriter().print("OFFLINE");
  }
}*/