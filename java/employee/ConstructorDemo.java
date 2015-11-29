/**
 * Created by fuyg on 11/29/15.
 */


class Student {
    private int age;

    Student(int age) {
        this.age = age;
    }

    Student() {
        this(20);
    }

    public int getAge() {
        return age;
    }

    public void printMsg() {
        System.out.println("The age: " + age);
    }
}



public class ConstructorDemo {

    public static void main(String args[]) {

        Student jame = new Student(44);
        Student lucy = new Student();

        jame.printMsg();
        lucy.printMsg();

    }

    public static double count(double... numbers) {
        double total = 0;
        for (double n : numbers) {
            total += n;
        }
        return total;
    }
}
