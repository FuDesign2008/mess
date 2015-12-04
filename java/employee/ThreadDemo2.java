/**
 * Created by fuyg on 12/4/15.
 */

class PrintThread extends Thread {

    private Thread t;
    private String name;

    PrintThread(String name) {
        this.name = name;
        System.out.println("Creating " + name);
    }

    public void run() {
        System.out.println("Running " + name);
        try {
            for (int i = 4; i > 0 ; i--) {
                System.out.println("Thread: " + name + ", " + i);
                Thread.sleep(50);
            }
        } catch(InterruptedException e){
            //e.printStackTrace();
            System.out.println("Thread " + name + " interrupted.");
        }

        System.out.println("Thread " + name + " existing.");
    }

    public void start () {
        System.out.println("Starting " + name);
        if (t == null) {
            t = new Thread(this, name);
            t.start();
        }
    }


}


public class ThreadDemo2 {

    public static void main(String[] args) {
        PrintThread hello = new PrintThread("hello");
        PrintThread world = new PrintThread("world");
        hello.start();
        world.start();

    }
}
