/**
 * Created by fuyg on 11/30/15.
 */
public class VirtualDemo {

    public static void main(String args[]) {
        Salary s = new Salary("Mohtd", "Am", 3, 3600.00);
        Employee e = new Salary("John", "Boston", 2, 2400.00);

        s.mailCheck();
        e.mailCheck();
    }
}
