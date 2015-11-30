/**
 * Created by fuyg on 11/30/15.
 */
public class FundsException extends Exception{

    private double amount;

    public FundsException (double amount) {
        this.amount = amount;
    }

    public double getAmount() {
        return amount;
    }

}
