import java.util.*;

/**
 * Created by fuyg on 12/2/15.
 */
public class CollectionDemo {

    public static void main(String args[]) {

        List arrayList = new ArrayList();
        arrayList.add("Hello");
        arrayList.add("World");
        arrayList.add("Java");
        System.out.println("ArrayList Elements");
        System.out.println("\t" + arrayList.toString());


        List linkedList = new LinkedList();
        linkedList.add("Hello");
        linkedList.add("World");
        linkedList.add("Java");
        System.out.println("LinkedList Elements");
        System.out.println("\t" + linkedList.toString());


        Set hashSet = new HashSet();
        hashSet.add("Hello");
        hashSet.add("World");
        hashSet.add("Java");
        System.out.println("HashSet Elements");
        System.out.println("\t" + hashSet.toString());


        Map map = new HashMap();
        map.put("Hello", "100");
        map.put("World", "200");
        map.put("Java", "300");
        System.out.println("HashMap Elements");
        System.out.println("\t" + map.toString());

        SortedSet set = new TreeSet();
        set.add("b");
        set.add("c");
        set.add("a");

        Iterator iterator = set.iterator();
        while(iterator.hasNext()) {
            Object item = iterator.next();
            System.out.println(item.toString());
        }



    }
}
