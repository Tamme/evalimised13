package com.evalimine.server;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;

public class HelloServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException
    {
        String q = req.getParameter("q");
        PrintWriter out = resp.getWriter();

        out.println("<html>");
        out.println("<body>");
        out.println("The 121211121312412341221paramter131asadsaqqwqwq231 q was \"" + q + "\".");
        out.println("</body>");
        out.println("</html>");
        
          UserService userService = UserServiceFactory.getUserService();
          User user = userService.getCurrentUser();

          if (user != null) {
              resp.setContentType("text/plain");
              resp.getWriter().println("Hello, " + user.getNickname());
          } else {
              resp.sendRedirect(userService.createLoginURL(req.getRequestURI()));
          }
          
          out.println("<html>");
          out.println("<body>");
          out.println("The 121121paramter131asadsaqqwqwq231 q was \"" + q + "\".");
          out.println("</body>");
          out.println("</html>");
    }

    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
        throws ServletException, IOException
    {
        String field = req.getParameter("field");
        PrintWriter out = resp.getWriter();

        out.println("<html>");
        out.println("<body>");
        out.println("You entered \"" + field + "\" into the text box.");
        out.println("</body>");
        out.println("</html>");
    }
}