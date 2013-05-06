package com.evalimine.server;

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
public class PartyServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse response) throws IOException {
		Connection c = null;
		String full = "[";
		try {
			c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
			String query = "select   voted_area as a, party.name, round(count(voted_party)/(select count(voted_area) from votes where voted_area = a), 2)*100 as pro from votes " +
					"left join party on (party.party_id = voted_party) group by voted_party, voted_area order by pro asc";
						
			
			ResultSet rs = c.createStatement().executeQuery(query);
			while (rs.next()){
				Map<String, String> json = new LinkedHashMap<String, String>();
				//String.valueOf(rs.getInt("id"))
			    String area = rs.getString("voted_area");
			    String name = rs.getString("name");
			    String percentage = rs.getString("pro");
			    
			    json.put("name", name);
	            json.put("area", area);
	            json.put("percentage", percentage);

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

