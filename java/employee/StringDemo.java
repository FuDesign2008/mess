/**
 * Created by fuyg on 11/28/15.
 */
public class StringDemo {

    public static void main(String args[]) {
        char[] helloArray = {'h', 'e', 'l', 'l', 'o', '.'};
        String helloString = new String(helloArray);

        System.out.println(helloString);

        int len = helloString.length();
        System.out.println("String length is:" + len);

        String helloWorld = helloString.concat(" World");
        System.out.println(helloWorld);


        String formatFloat = String.format("%f", 2000.0);
        System.out.println(formatFloat);

        char h = helloString.charAt(0);
        boolean end = helloString.endsWith("hello");
        int hash = helloString.hashCode();
        System.out.println("The hash code of " + helloString + " is: " + hash);

        int indexL = helloString.indexOf('l');
        int indexLo = helloString.indexOf("lo");

        String replaced = helloString.replace('l', 'L');
        System.out.println(replaced);

        replaced = helloString.replaceAll("l", "-L-;");
        System.out.println(replaced);

        replaced = helloString.replaceFirst("l", "-L---;");
        System.out.println(replaced);

        boolean start = helloString.startsWith("hel");
        System.out.println("Start wisth hel: " + start);

        String sub = helloString.substring(2);
        sub = helloString.substring(2, 4);

        String[]  arr = helloString.split("");
        for (String x : arr) {
            System.out.print(x + ",");
        }
        System.out.println();

        arr = helloString.split("l");
        for (String x : arr) {
            System.out.print(x + ",");
        }
        System.out.println();

        CharSequence sequence = helloWorld.subSequence(2, 4);

        char[] chars = helloWorld.toCharArray();
        for (char x : chars) {
            System.out.print(x + ",");
        }
        System.out.println();

        String upper = helloWorld.toUpperCase();
        System.out.println("upper: " + upper);

        String lower = helloWorld.toLowerCase();
        System.out.println("lower: " + lower);

        helloWorld = " abc " + helloWorld + " cef ";
        System.out.println(helloWorld);
        String trim = helloWorld.trim();
        System.out.println(trim);



    }
}
