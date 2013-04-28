package com.evalimine.server;

import com.google.appengine.api.rdbms.AppEngineDriver;

import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.*;
import java.util.LinkedHashMap;
import java.util.Map;
import com.google.gson.Gson;

public class CandidateServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	public void doGet(HttpServletRequest req, HttpServletResponse response) throws ServletException, IOException {

		String [] params=req.getParameter("values").split(";");
		Connection c = null;
		String full = "[";
		try {
			c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
			String query = "";
			String queryStart = "SELECT candidate.*, party.name, area.name, party.short FROM candidate LEFT JOIN party ON (party.party_id=candidate.party) LEFT JOIN area ON (candidate.area = area.area_id) ";
			//one person view
			if (params.length == 1){
				query = queryStart + "WHERE candidate.id LIKE \"" + params[0] + "\"";
			}
			//candidate search view
			else if (params.length == 2) {
				if (params[0].equals("allParties") && params[1].equals("Eesti")) {
					query = queryStart;
				}
				else if (params[0].equals("allParties") && !params[1].equals("Eesti")) {
					query = queryStart + "WHERE candidate.area LIKE \"" + params[1] + "\"";
				}
				else if (!params[0].equals("allParties") && params[1].equals("Eesti")) {
					query = queryStart + "WHERE candidate.party LIKE \"" + params[0] + "\"";
				}
				else {
					query = queryStart + "WHERE candidate.area LIKE \"" + params[1] + "\" and candidate.party LIKE \"" + params[0] + "\"";
				}
			}
			else if (params.length == 3) {
				//kui otsitakse ainult nime järgi ja kasutatakse suggestiga saadud nime kuju "Perenimi, Eesnimi" või otsitakse lihtsalt perenime või eesnime järgi
				if (params[0].equals("allParties") && params[1].equals("Eesti")){
					query = queryStart + "WHERE (candidate.fullname LIKE \"" + params[2] + "\" or candidate.last LIKE \"" + params[2] + "\" or candidate.first LIKE \"" + params[2] + "\")";
					System.out.println(query);
				}
				//kui otsitakse piirkonna ja nime järgi ja kasutatakse suggestiga saadud nime kuju "Perenimi, Eesnimi" või otsitakse lihtsalt perenime või eesnime järgi
				else if (params[0].equals("allParties") && !params[1].equals("Eesti")) {
					query = queryStart + "WHERE candidate.area LIKE \"" + params[1] + "\" and (candidate.fullname LIKE \"" + params[2] + "\" or candidate.last LIKE \"" + params[2] + "\" or candidate.first LIKE \"" + params[2] + "\")";
				}
				//kui otsitakse erakonna ja nime järgi ja kasutatakse suggestiga saadud nime kuju "Perenimi, Eesnimi" või otsitakse lihtsalt perenime või eesnime järgi
				else if (!params[0].equals("allParties") && params[1].equals("Eesti")) {
					query = queryStart + "WHERE candidate.party LIKE \"" + params[0] + "\" and (candidate.fullname LIKE \"" + params[2] + "\" or candidate.last LIKE \"" + params[2] + "\" or candidate.first LIKE \"" + params[2] + "\")";
				}
				//kui otsitakse piirkonna, erakonna ja nime järgi ja kasutatakse suggestiga saadud nime kuju "Perenimi, Eesnimi" või otsitakse lihtsalt perenime või eesnime järgi
				else {
					query = queryStart + "WHERE candidate.area LIKE \"" + params[1] + "\" and candidate.party LIKE \"" + params[0] + "\" and (candidate.fullname LIKE \"" + params[2] + "\" or candidate.last LIKE \"" + params[2] + "\" or candidate.first LIKE \"" + params[2] + "\")";
				}
			}
//			System.out.println(query);
			
			ResultSet rs = c.createStatement().executeQuery(query);
			while (rs.next()){
			    String first = rs.getString("first");
			    String last = rs.getString("last");
			    String area = rs.getString("area.name");
			    String code = String.valueOf(rs.getLong("code"));
			    String id = String.valueOf(rs.getInt("id"));
			    String shorts = rs.getString("short");
			    String name = rs.getString("name");
			    String isCandidate = rs.getString("is_candidate");
			    String fbid = String.valueOf(rs.getLong("fb_id"));
			    
			    
			    Map<String, String> json = new LinkedHashMap<String, String>();
	            json.put("first", first);
	            json.put("last", last);
	            json.put("area", area);
	            json.put("short", shorts);
	            json.put("code", code);
	            json.put("name", name);
	            json.put("id", id);
	            json.put("is_candidate", isCandidate);
	            json.put("fbid", fbid);
	            
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
    
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
    		   
    		  PrintWriter out = resp.getWriter();
    		  Connection c = null;
    		  try {
    		      DriverManager.registerDriver(new AppEngineDriver());
    		      c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
    		      String [] param = req.getParameter("values").split(" ");
    		      String first = param[0];
    		      String last = param[1];
    		      String code = param[2];;
    		      String area = param[3];
    		      String fullname = last + ", " + first;
    		      String fb_id = param[4];
    		       
    		     
		    	  String statement ="INSERT INTO candidate (first, last, code, area, fullname, fb_id, voting) values (\"" + first + "\" , \""+ last + "\" , \""+ code + "\" , \""+ area + "\" , \""+ fullname + "\", \""+ fb_id + "\", 0 )";
		    	  System.out.println(statement);
		    	  PreparedStatement stmt = c.prepareStatement(statement);
		    	  int success = 2;
		    	  success = stmt.executeUpdate();
    		      
    		  } 
    		  catch (SQLException e) {
    			  e.printStackTrace();
    		  }
    		  finally {
    			  if (c != null)
    				  try {
    					  c.close();
    		          }
    			  	  catch (SQLException ignore) {
    		          }
    		  } 
    		  resp.setHeader("Refresh","3; url=/evalimine.jsp");
    }
}