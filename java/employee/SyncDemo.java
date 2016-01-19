
class PrintDemo {

    public void printCount() {
        for (int i = 0; i < 5; i++) {
            System.out.println("Counter ----" + i);
        }
    }
}


class ThreadDemo extends Thread {

    private Thread t;
    private String name;
    PrintDemo PD;

    ThreadDemo(String name, PrintDemo pd) {
        this.name = name;
        PD = pd;
    }

    public void run () {
        synchronized(PD) {
            PD.printCount();
        }
        System.out.println("Thread " + name + " exiting.");
    }

    public void start () {
        System.out.println("Starting " + name);

        if (t == null) {
            t = new Thread(this, name);
            t.start();
        }
    }
}


public class SyncDemo {
    public static void main(String[] args) {

        PrintDemo pd = new PrintDemo();
        ThreadDemo hello = new ThreadDemo("thread-hello", pd);
        ThreadDemo world = new ThreadDemo("thread-world", pd);

        hello.start();
        world.start();

        try {
            hello.join();
            world.join();
        } catch (Exception ex) {
            System.out.println("Interrupted");
            ex.printStackTrace();
        }

    }
}
