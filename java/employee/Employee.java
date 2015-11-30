
//import java.io.*;

public class Employee {

    private String name;
    private String address;
    private int number;

    public Employee(String name, String address, int number) {
        this.name = name;
        this.address = address;
        this.number = number;
    }

    public void mailCheck() {
        System.out.println("Mail a check to " + name + " " + address);
    }

    public String toString () {
        return name + " " + address + " " + number;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public int getNumber() {
        return number;
    }

    public void setAddress(String address) {
        this.address = address;
    }


    private static double salary;
    public static final String DEPARTMENT = "Development";

    public static void main(String args[]) {
        salary = 1000;
        System.out.println(DEPARTMENT + " average salary: " + salary);
    }
}
