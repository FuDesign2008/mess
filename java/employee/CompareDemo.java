
import java.util.*;

class Dog implements Comparator<Dog>, Comparable<Dog> {

    private String name;
    private int age;

    Dog () {
    }

    Dog (String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public int compareTo(Dog dog) {
        return (this.name).compareTo(dog.name);
    }

    public int compare(Dog a, Dog b) {
        return a.age - b.age;
    }

}


public class CompareDemo {

    public static void main(String[] args) {

        List<Dog> list = new ArrayList<Dog>();

        list.add(new Dog("Shaggy", 3));
        list.add(new Dog("Shaggy",3));
        list.add(new Dog("Lacy",2));
        list.add(new Dog("Roger",10));
        list.add(new Dog("Tommy",4));
        list.add(new Dog("Tammy",1));

        Collections.sort(list);
        for (Dog item : list) {
            System.out.print(item.getName() + ", ");
        }
        System.out.println();

        Collections.sort(list, list.get(0));
        for (Dog item : list) {
            System.out.print(item.getName() + " : " + item.getAge() + ", ");
        }

    }

}
