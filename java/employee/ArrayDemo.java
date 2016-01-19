/**
 * Created by fuyg on 11/28/15.
 */
public class ArrayDemo {

    public static void printArray(int[] array) {
        for (int item : array) {
            System.out.print(item + " ");
        }
        System.out.println();
    }

    public static int[] reverse(int[] list) {
        int[] result = new int[list.length];
        for (int i = 0; i < list.length; i++) {
            result[list.length - i - 1] = list[i];
        }
        return result;
    }

    public static void main(String args[]) {
        double[] myList = new double[10];

        for (double item : myList) {
            System.out.print(item + ",");
        }
        System.out.println();

        double[] list = {1.9, 2.9, 3.4, 3.5};
        for (int i = 0; i < list.length; i++) {
            System.out.print(list[i] + ",");
        }
        System.out.println();

        double total = 0;
        for (int i = 0; i < list.length; i++) {
            total += list[i];
        }
        System.out.println("Total is: " + total);

        double max = list[0];
        for (int i = 0; i < list.length; i++) {
            if (list[i] > max) {
                max = list[i];
            }
        }
        System.out.println("Max is: " + max);

        int[] intList = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        int[] reversedList = reverse(intList);
        printArray(reversedList);



    }

}
