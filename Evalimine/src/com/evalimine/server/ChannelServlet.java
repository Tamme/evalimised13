package com.evalimine.server;

import java.io.FileReader;
import java.io.IOException;
import java.nio.CharBuffer;
import java.util.HashMap;
import java.util.Random;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.channel.ChannelFailureException;
import com.google.appengine.api.channel.ChannelMessage;
import com.google.appengine.api.channel.ChannelService;
import com.google.appengine.api.channel.ChannelServiceFactory;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

public class ChannelServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
//	
//	public void doGet (HttpServletRequest req, HttpServletResponse resp) throws IOException {
//		 //String userId = userService.getCurrentUser().getUserId();
//
//		    ChannelService channelService = ChannelServiceFactory.getChannelService();
//		    String channelKey = "xyz";
//		    String token = channelService.createChannel(channelKey);
//
//
//		    // Index is the contents of our index.html resource, details omitted for brevity.
//		    String index = "";
//		    index = index.replaceAll("\\{\\{ token \\}\\}", token);
//
//		    resp.setContentType("text/html");
//		    resp.getWriter().write(index);
//	}
//	public HashMap<String, String> users = new HashMap<String, String>();
//	private static ChannelService channelService = ChannelServiceFactory.getChannelService();
	
//	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
//	    UserService userService = UserServiceFactory.getUserService();
//	    User user = userService.getCurrentUser();
//	    if (user != null) {
//	        //String token = channelService.createChannel(user.getUserId());
//	        String token = "uerId";
//	        FileReader reader = new FileReader("evalimine.jsp");
//	        CharBuffer buffer = CharBuffer.allocate(16384);
//	        reader.read(buffer);
//	        reader.close();
//	        System.out.println(reader);
//	        System.out.println(buffer);
//	        String index = new String(buffer.array());
//	       
//	        index = index.replaceAll("\\{\\{ token \\}\\}", token);
//	        System.out.println(index);
//	        resp.setContentType("text/html");
//	        resp.getWriter().write(index);
//	    } else {
//	        resp.sendRedirect(userService.createLoginURL(req.getRequestURI()));
//	    }
//	}
	

    
    public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {    
        
    	
    	ChannelService channelService = ChannelServiceFactory.getChannelService();
		//Random rand = new Random();
		//String channelKey = "" + rand.nextInt();
		String channelKey = "xyz";
    	String token = channelService.createChannel(channelKey);
    	//String token = "test";

        //String userId = userService.getCurrentUser().getUserId();
        String userId = "test";
       // users.put(userId, token);
        System.out.println(token);
        
        
        FileReader reader = new FileReader("evalimine.jsp");
        CharBuffer buffer = CharBuffer.allocate(16384);
        reader.read(buffer);
        String index = new String(buffer.array());
        //index = index.replaceAll("\\{\\{ me \\}\\}", userId);
        index = index.replaceAll("\\{\\{ token \\}\\}", token);
        
        resp.setContentType("text/html");//võid plain ka proovida
        resp.getWriter().write(index);
      }
	
	  
	 

	  
}