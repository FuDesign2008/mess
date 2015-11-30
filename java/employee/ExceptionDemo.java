import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.rmi.RemoteException;

/**
 * Created by fuyg on 11/30/15.
 */
public class ExceptionDemo {

    public static void main(String args[]) {
        int[] numbers = {1, 2, 3, 4};

        try {
            System.out.println(numbers[5]);
            System.out.println("Access the element index 5");
        } catch (Exception ex) {
            String msg = ex.getMessage();
            System.out.println("msg: " + ex.getMessage());

            System.out.println("to string: " + ex.toString());

            System.out.println("to print stack trace");
            ex.printStackTrace();

        }
        System.out.println("Out of the try...catch block");


        String fileName = "/file/does/not/exists/";
        FileInputStream file = null;
        byte x;

        try {
            file = new FileInputStream(fileName);
            x = (byte) file.read();
        } catch (FileNotFoundException ex) {
            ex.printStackTrace();
        } catch (IOException ioEx) {
            ioEx.printStackTrace();
        } finally {
            if (file != null) {
                try {
                    file.close();
                } catch (Exception ex) {
                    ex.printStackTrace();
                }
            }
        }

        try {
            file = new FileInputStream(fileName);
            x = (byte) file.read();
        }  catch (IOException ex) {
            ex.printStackTrace();
        }

        try (FileReader reader = new FileReader("E://file.txt")) {
            char[] a = new char[50];
            reader.read(a);
            for (char c : a) {
                System.out.println(c);
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    public void desposit(double amount) throws RemoteException {
        throw new RemoteException();
    }


}
