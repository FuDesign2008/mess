import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Iterator;
import java.util.Properties;
import java.util.Set;

/**
 * Created by fuyg on 12/2/15.
 */
public class PropertiesDemo {

    public static void main(String args[]) {
        Properties capitals =  new Properties();
        Set states;
        String str;


        capitals.put("Illinois", "Springfield");
        capitals.put("Missouri", "Jefferson City");
        capitals.put("Washington", "Olympia");
        capitals.put("California", "Sacramento");
        capitals.put("Indiana", "Indianapolis");

        states = capitals.keySet();
        Iterator itr = states.iterator();

        while(itr.hasNext()) {
            str = (String) itr.next();
            System.out.println("The capital of " + str + " is " +
                    capitals.getProperty(str) + " .");
        }
        System.out.println();

        str = capitals.getProperty("Florida", "Not Found");
        System.out.println("The capital of Florida is " + str + " .");

        FileWriter writer = null;

        try {
            writer = new FileWriter("./properties.txt");
            capitals.store(writer, "no comment");
            writer.close();
        } catch (IOException ex) {
            // do nothing
        }

        FileOutputStream out = null;

        try {
            out = new FileOutputStream("./properties.xml");
            capitals.storeToXML(out, "no comment");
            out.close();
        } catch (IOException ex) {
            // do nothing
        }

        Properties xmls = new Properties();

        try {
            FileInputStream input = new FileInputStream("./properties.xml");
            xmls.loadFromXML(input);
        } catch (IOException ex) {
            // do nothing
        }

        boolean isEqual = xmls.equals(capitals);
        System.out.println("xmls is equal capitals: " + isEqual);

    }
}

