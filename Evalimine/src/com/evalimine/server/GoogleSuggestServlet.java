package com.evalimine.server;

import com.google.appengine.api.rdbms.AppEngineDriver;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.*;
import java.util.List;
import java.util.ArrayList;
import com.google.gson.Gson;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class GoogleSuggestServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	@Override
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		PrintWriter out = resp.getWriter();
		Connection c = null;
		try {
			DriverManager.registerDriver(new AppEngineDriver());
			String searchParameter = req.getParameter("term");
		    c = DriverManager.getConnection("jdbc:google:rdbms://faceelection:fakeelection/guestbook");
		    String statement ="SELECT fullname FROM candidate WHERE last LIKE ?";
		    PreparedStatement s = c.prepareStatement(statement);
		    s.setString(1, searchParameter + "%");
		    ResultSet resultIsSuccessful = s.executeQuery();
		    List<String> candidateList = new ArrayList<String>();
		    while (resultIsSuccessful.next()) {
		    	String candidateInfo = resultIsSuccessful.getString("fullname");
		    	candidateList.add(candidateInfo);
		    }
		    String gson = new Gson().toJson(candidateList);
		    resp.setContentType("application/json");
		    out.write(gson);
		    out.flush();
		    } 
		catch (SQLException e) {
			e.printStackTrace();
		}
		finally {
			try {
				c.close();
		    }
			catch (SQLException ignore) {
				System.out.println(ignore.getMessage());
		      }
		  }
	}
}