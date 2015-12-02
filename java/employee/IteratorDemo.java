import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;

/**
 * Created by fuyg on 12/2/15.
 */
public class IteratorDemo {

    public static void main(String args[]) {

        ArrayList<String> arrayList = new ArrayList<String>();
        arrayList.add("C");
        arrayList.add("A");
        arrayList.add("E");
        arrayList.add("B");
        arrayList.add("D");
        arrayList.add("F");

        System.out.println("Original contents of arrayList: ");
        Iterator<String> iterator = arrayList.iterator();
        while(iterator.hasNext()) {
            String item = iterator.next();
            System.out.print(item + " ");
        }
        System.out.println();

        ListIterator<String> listIterator = arrayList.listIterator();
        while(listIterator.hasNext()) {
            String item = listIterator.next();
            listIterator.set(item + "+");
        }

        System.out.println("Modified contents of arrayList:");
        iterator = arrayList.iterator();
        while (iterator.hasNext()) {
            String item = iterator.next();
            System.out.print(item + " ");
        }
        System.out.println();

        System.out.println("Modified list backwords: ");
        while (listIterator.hasPrevious()) {
            String item = listIterator.previous();
            System.out.print(item + " ");
        }
        System.out.println();

    }
}
