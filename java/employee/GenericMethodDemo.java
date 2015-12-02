
public class GenericMethodDemo {

    public static <E> void printArray(E[] inputArray) {
        for (E item : inputArray) {
            System.out.printf("%s ", item);
        }
        System.out.println();
    }

    public static <T extends Comparable<T>>  T maximum(T x, T y, T z) {
        T max = x;
        if (y.compareTo(max) > 0) {
            max = y;
        }
        if (z.compareTo(max) > 0) {
            max = z;
        }

        System.out.println("Max of " + x + ", " + y + ", " + z + " is: " + max);

        return max;
    }

    public static void main(String[] args) {

        Integer[] intArray = {1, 2, 3, 4, 5};
        Double[] doubleArray = {1.1, 2.2, 3.3, 4.4, 5.5};
        Character[] charArray = {'H', 'E', 'L', 'L', 'O'};

        printArray(intArray);
        printArray(doubleArray);
        printArray(charArray);

        maximum(3, 4, 5);
        maximum(6.6, 8.8, 7.7);
        maximum("pear", "apple", "orange");

    }
}
