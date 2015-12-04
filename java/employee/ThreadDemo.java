
class RunnableDemo implements Runnable {

    private Thread thread;
    private String threadName;
    private int sleepTime;

    RunnableDemo(String name, int sleepTime) {
        threadName = name;
        System.out.println("Creating thread " + threadName);
    }

    public void run () {
        System.out.println("Running " + threadName);

        try {
            for (int i = 4; i > 0; i--) {
                System.out.println("Thread: " + threadName + ", " + i);
                Thread.sleep(sleepTime);
            }
        } catch (InterruptedException ex) {
            System.out.println("Thread " + threadName + " interrupted.");
        }

        System.out.println("Thread " + threadName + " existing.");
    }

    public void start () {
        System.out.println("Staring " + threadName);
        if (thread == null) {
            thread = new Thread(this, threadName);
            thread.start();
        }
    }

}


public class ThreadDemo {

    public static void main(String[] args) {
        RunnableDemo hello = new RunnableDemo("-hello-", 1000);
        RunnableDemo world = new RunnableDemo("--world--", 30);

        hello.start();
        world.start();

    }

}
