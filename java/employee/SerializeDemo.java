import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Employee implements Serializable {
    public String name;
    public String address;
    public transient int ssn;
    public int number;

    public void mailCheck () {
        System.out.println("Mailing a check to " + name + " " + address);
    }
}


public class SerializeDemo {

    final static String FILE_PATH = "./employee.ser";

    public static void writeObject() {

        Employee e = new Employee();
        e.name = "Reyan Ali";
        e.address = "Phokka Kuan, Ambehta Peer";
        e.ssn = 111222333;
        e.number = 101;

        try {
            FileOutputStream fileOut = new FileOutputStream(FILE_PATH);
            ObjectOutputStream out = new ObjectOutputStream(fileOut);
            out.writeObject(e);
            out.close();
            fileOut.close();
            System.out.printf("Serialized data is saved to "  + FILE_PATH);
            System.out.println();
        } catch (IOException ex) {
            ex.printStackTrace();
        }

    }

    public static Employee readObject (){
        Employee e = null;
        try {
            FileInputStream fileIn = new FileInputStream(FILE_PATH);
            ObjectInputStream in = new ObjectInputStream(fileIn);
            e = (Employee) in.readObject();
            in.close();
            fileIn.close();
        } catch (IOException ioEx) {
            ioEx.printStackTrace();
        } catch (ClassNotFoundException ex) {
            System.out.println("Employee class not found");
            ex.printStackTrace();
        }

        if (e != null) {
            System.out.println("Deserialized Employee....");
            System.out.println("Name: " + e.name);
            System.out.println("Address: " + e.address);
            System.out.println("ssn: " + e.ssn);
            System.out.println("Number: " + e.number);
        }

        return e;

    }

    public static void main(String[] args) {

        writeObject();

        readObject();

    }
}
