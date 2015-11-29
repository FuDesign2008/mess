import java.io.File;

/**
 * Created by fuyg on 11/29/15.
 */
public class DirDemo {

    public static void main(String args[]) {
        String dirname = "/tmp/user/java/bin";
        File dir = new File(dirname);

        dir.mkdirs();


        File file = null;
        String[] paths;

        try {
            file = new File("/tmp");
            // file = new File("./");
            paths = file.list();
            for (String path : paths) {
                System.out.println(path);
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }
}
