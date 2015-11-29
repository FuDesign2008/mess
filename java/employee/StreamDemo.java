import java.io.*;

/**
 * Created by fuyg on 11/29/15.
 */
public class StreamDemo {

    public static void main(String args[]) throws IOException {
        FileInputStream in = null;
        FileOutputStream out = null;

        try {
            in = new FileInputStream("input.txt");
            out = new FileOutputStream("output.txt");

            int c;
            while ((c = in.read()) != -1) {
                System.out.print(c + ",");
                out.write(c);
            }
            System.out.println();
        } finally {
            if (in != null) {
                in.close();
            }
            if (out != null) {
                out.close();
            }
        }

        FileReader reader = null;
        FileWriter writer = null;

        try {
            reader = new FileReader("output.txt");
            writer = new FileWriter("output2.txt");

            int c;
            while ( (c = reader.read()) != -1) {
                System.out.print(c + ',');
                writer.write(c);
            }
            System.out.println();

        } finally {
            if (reader != null) {
                reader.close();
            }
            if (writer != null) {
                writer.close();
            }
        }


        InputStreamReader input = null;
        try {
            input = new InputStreamReader(System.in);
            System.out.println("Enter characters, 'q' to quit.");
            char c;
            do {
                c = (char) input.read();
                System.out.print(c);
            } while (c != 'q');

        } finally {
            if (input != null) {
                input.close();
            }
        }

        try {
            byte[] bytes = {11, 21, 3, 40, 5};
            OutputStream output = new FileOutputStream("bytes.txt");
            for (byte item : bytes) {
                output.write(item);
            }
            output.close();

            InputStream inputBytes = new FileInputStream("bytes.txt");
            int size = inputBytes.available();
            System.out.println("---- the out ----");
            for (int i = 0; i < size; i++) {
                char c = (char) inputBytes.read();
                System.out.print(c + " ");
            }
            inputBytes.close();

        } catch (IOException ex) {
            System.out.println("Exception");
        }

    }
}
