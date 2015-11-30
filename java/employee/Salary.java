/**
 * Created by fuyg on 11/30/15.
 */
public class Salary extends Employee{

    private  double salary;

    public Salary(String name, String address, int number, double salary) {
        super(name, address, number);
        setSalary(salary);
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary (double salary) {
        if (salary >= 0.0) {
            this.salary = salary;
        }
    }

    @Override
    public void mailCheck() {
        super.mailCheck();
        System.out.println(" with salary : " + salary);
    }

    public double computePay() {
        return salary / 2;
    }

}
