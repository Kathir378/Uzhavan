package com.yourcompany.JavaView;

public class User {
    private String name;
    private String password;
    private String phoneNo;
    private String email;

    // public User(String userName, String password, String phoneNo) {
    // this.name = name;
    // this.password = password;
    // this.phoneNo = phoneNo;
    // this.email=email;
    // }

    public User(String userName, String password, String phoneNo, String email) {
        this.name = userName;
        this.email = email;
        this.password = password;
        this.phoneNo = phoneNo;
    }

    public String getname() {
        return name;
    }

    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public void setname(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public String toString() {
        return "User Name : " + this.name + " Phone No : " + this.phoneNo;
    }

    // private void setPassword(String password) {
    // this.password = password;
    // }

    public String getPhoneNo() {
        return phoneNo;
    }

    // public void setPhoneNo(String phoneNo) {
    // this.phoneNo = phoneNo;
    // }
}