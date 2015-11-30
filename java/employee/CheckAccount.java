/**
 * Created by fuyg on 11/30/15.
 */
public class CheckAccount {

    private double balance;
    private  int number;

    public CheckAccount (int number){
        this.number = number;
    }

    public void deposit(double amount) {
        balance += amount;
    }

    public void withdraw (double amount) throws FundsException {
        if (amount <= balance) {
            balance -= amount;
        } else {
            double needs = amount - balance;
            throw new FundsException(needs);
        }
    }

    public double getBalance() {
        return balance;
    }

    public int getNumber () {
        return number;
    }
}
