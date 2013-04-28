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
public class StatisticsServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse response) throws IOException {
		Connection c = null;
		String full = "[";
		try {
			c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
			String param = req.getParameter("values");
			String query = "";
			if (param.equals("country")) {
				/*query = "SELECT SUM(candidate.voting) as votes, party.name, CONCAT(ROUND(SUM(candidate.voting)/(SELECT COUNT(candidate.voting) from candidate)*100, 2)," +
						" '%') as percentage FROM candidate LEFT JOIN party ON (party.party_id=candidate.party) group by candidate.party";*/
				query = "SELECT COUNT(votes.voter_id) as votes, party.name, CONCAT(ROUND(COUNT(votes.voted_id)/(SELECT COUNT(votes.voted_id) from votes)*100, 2), '%') as percentage FROM candidate " + 
							"LEFT JOIN party ON (party.party_id=candidate.party) LEFT JOIN votes ON (votes.voted_id=candidate.id) group by candidate.party";
						
			}
			else if (param.equals("candidate")) {
				query = "SELECT candidate.fullname, party.name, COUNT(votes.voted_id) as votes FROM candidate LEFT JOIN party ON (party.party_id=candidate.party) " +
							"LEFT JOIN votes ON (votes.voted_id=candidate.id) group by votes.voted_id";
			}
			else {
				query = "SELECT SUM(candidate.voting) as votes, party.name, CONCAT(ROUND(SUM(candidate.voting)/(SELECT COUNT(candidate.voting) FROM candidate  WHERE candidate.area LIKE \"" + param + "\" )*100, 2)," +
							" '%') as percentage FROM candidate LEFT JOIN party ON (party.party_id=candidate.party) WHERE candidate.area LIKE \"" + param + "\" group by candidate.party";
			} 
			
			ResultSet rs = c.createStatement().executeQuery(query);
			while (rs.next()){
				Map<String, String> json = new LinkedHashMap<String, String>();
				if (param.equals("candidate")) {
					//String.valueOf(rs.getInt("id"))
				    String votes = rs.getString("votes");
				    String fullname = rs.getString("fullname");
				    String name = rs.getString("name");
				    
				    json.put("fullname", fullname);
		            json.put("votes", votes);
		            json.put("name", name);
				}
				else {
				    String votes = rs.getString("votes");
				    String percentage = rs.getString("percentage");
				    String name = rs.getString("name");
				    
		            json.put("votes", votes);
		            json.put("percentage", percentage);
		            json.put("name", name);
				}

	            String jsonData = new Gson().toJson(json);
	            if (full.length() != 1) {
	            	full += ", ";
	            }
	            full += jsonData;
			}
			full += "]";
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
	        response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().write(full);
	    }  
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