
public class Test {

    public static void main(String args[]) {
        int[] numbers = {10, 20, 30, 40, 50};

        for (int x : numbers) {
            System.out.print(x + ",");
        }
        System.out.println();

        Integer test = 1000;
        String hexStr = Integer.toHexString(test);
        System.out.println("The hex string: " + hexStr);

        String number = "2346";
        int  num = Integer.parseInt(number);
        System.out.println(num);

        char ch = 'a';
        char[] charArray = {'a', 'b', 'c', 'd', 'e', 'f'};

        Character chA = new Character('a');
        String value = chA.toString();

    }

}
