
public class GuessNumberDemo {

    public static void main (String[] args) {

        GuessNumber guess29 = new GuessNumber(29);
        GuessNumber guess200 = new GuessNumber(200);

        guess29.start();
        guess200.start();

        try {
            guess29.join();
        } catch(InterruptedException e){
            e.printStackTrace();
            System.out.println("Thread interrupted.");
        }
    }

}
