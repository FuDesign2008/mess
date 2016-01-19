/**
 * Created by fuyg on 11/30/15.
 */
public class BankDemo {

    public static  void  main(String args[]) {
        CheckAccount account = new CheckAccount(105);
        System.out.println("Depositing $500...");
        account.deposit(500.00);

        try {
            System.out.println("With drawing $100...");
            account.withdraw(100.00);
            System.out.println("With drawing $600");
            account.withdraw(600.00);
        } catch (FundsException ex) {
            System.out.println("Sorry, but you are short $" + ex.getAmount());
            ex.printStackTrace();
        }
    }
}
