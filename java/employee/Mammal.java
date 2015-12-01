/**
 * Created by fuyg on 12/1/15.
 */
public class Mammal implements Animal{

    public void eat() {
        System.out.println("Mammal eats");
    }

    public void travel() {
        System.out.println("Mammel travel");
    }

    public int legs() {
        return 0;
    }

    public static void main(String args[]) {
        Mammal m = new Mammal();
        m.eat();
        m.travel();
    }


}
