
public class GuessNumber extends Thread {

    private int number;

    public GuessNumber (int number) {
        if (number > 0 && number <= 100)  {
            this.number = number;
        } else {
            this.number = (int) (Math.random() * 100 + 1);
        }
    }

    public void run () {
        int counter = 0;
        int guess = 0;
        System.out.println("Guess start for *" + number + "*");

        do {
            guess = (int) (Math.random() * 100 + 1);
            System.out.println(this.getName() + " guesses " + guess);
            counter++;
        } while (guess != number);

        System.out.println("** Correct! " + this.getName() + " in " +
                counter + " guesses. **");

    }
}
