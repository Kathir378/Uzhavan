package com.yourcompany.Listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import com.yourcompany.JavaControl.Connection.DbConnection;
public class DBListener implements ServletContextListener {

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override
    protected void finalize() throws Throwable {
        super.finalize();
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public String toString() {
        return super.toString();
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        ServletContextListener.super.contextDestroyed(sce);
    }

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        String url = sce.getServletContext().getInitParameter("DB_URL");
        String user = sce.getServletContext().getInitParameter("DB_USER");;
        String password = sce.getServletContext().getInitParameter("DB_PASSWORD");
        try {
            DbConnection.create(url, user, password);
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        ServletContextListener.super.contextInitialized(sce);
    }

}