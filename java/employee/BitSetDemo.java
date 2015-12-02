import java.util.BitSet;

/**
 * Created by fuyg on 12/2/15.
 */
public class BitSetDemo {

    public static void main(String args[]) {
        BitSet bits1 = new BitSet(16);
        BitSet bits2 = new BitSet(16);

        for (int i = 0; i < 16; i++) {
            if ( i % 2 == 0) {
                bits1.set(i);
            }
            if (i % 5 == 0) {
                bits2.set(i);
            }
        }

        System.out.println("Initial pattern in bits1:");
        System.out.println(bits1);
        System.out.println("Initial pattern in bits2:");
        System.out.println(bits2);

        BitSet backup = (BitSet) bits2.clone();

        bits2.and(bits1);
        System.out.println("and");
        System.out.println(bits2);

        bits2 = (BitSet) backup.clone();
        bits2.or(bits1);
        System.out.println("or");
        System.out.println(bits2);

        bits2 = (BitSet) backup.clone();
        bits2.xor(bits1);
        System.out.println("xor");
        System.out.println(bits2);





    }
}
