package com.evalimine.server;

import com.google.appengine.api.rdbms.AppEngineDriver;
import com.google.gson.Gson;

import java.sql.*;
import java.util.LinkedHashMap;
import java.util.Map;

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
			String query = "SELECT SUM(candidate.voting) as votes, party.name, CONCAT(ROUND(SUM(candidate.voting)/(SELECT COUNT(candidate.voting) from candidate)*100, 2)," +
			" '%') as percentage FROM candidate LEFT JOIN party ON (party.party_id=candidate.party) group by candidate.party";
			
			ResultSet rs = c.createStatement().executeQuery(query);
			while (rs.next()){
			    String votes = rs.getString("votes");
			    String percentage = rs.getString("percentage");
			    String name = rs.getString("name");
			    
			    Map<String, String> json = new LinkedHashMap<String, String>();
	            json.put("votes", votes);
	            json.put("percentage", percentage);
	            json.put("name", name);
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