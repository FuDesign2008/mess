/**
 * Created by fuyg on 11/29/15.
 */
public class FunctionDemo {

    public static void main(String args[]) {
        int total = 0;
        for (String arg : args)  {
            try {
                int value = Integer.parseInt(arg);
                total += value;
            } catch (NumberFormatException ex) {
                // do nothing
            }
        }
        System.out.println("Total of args: " + total);
    }

    public static int max(int a, int b) {
       return Math.max(a, b);
    }

    public static long max(long a, long b) {
        return Math.max(a, b);
    }

    public static double max(double a, double b) {
        return Math.max(a, b);
    }

    public static float max(float a, float b) {
        return  Math.max(a, b);
    }
}
