

public class DeadlockDemo  {

    public static Object lockA = new Object();
    public static Object lockB = new Object();


    public static void main (String[] args) {
        // TODO
    }


    private static class Hello extends Thread {

        private String name;

        Hello (String name) {
            this.name = name;
        }

        public void run () {
            synchronized (lockA) {
                System.out.println(name + ": holding lock A....");

                try {
                    Thread.sleep(10);
                } catch(Exception e){
                    e.printStackTrace();
                }

                System.out.println(name + ": Waiting for lock2");


            }
        }
    }
}
