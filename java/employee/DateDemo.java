/**
 * Created by fuyg on 11/28/15.
 */
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateDemo {

    public static void main(String args[]) {
        long start = System.currentTimeMillis();

        Date now = new Date();
        System.out.println(now);

        long ms = now.getTime();

        Date tomorrow = new Date(ms + 24 * 60 * 60 * 1000);
        System.out.println(tomorrow);

        System.out.println("Now is before tomorrow: " + now.before(tomorrow));
        System.out.println("Now is after tomorrow: " + now.after(tomorrow));

        Date clonedDate = (Date) now.clone();
        System.out.println(clonedDate);

        System.out.println("Now.compareTo(tomorrow): " + now.compareTo(tomorrow));
        System.out.println("Now is equal clonedDate: " + now.equals(clonedDate));

        now.setTime(tomorrow.getTime());

        SimpleDateFormat ft =
                new SimpleDateFormat("E yyyy.MM.dd 'at' hh:mm:ss a zzz");
        System.out.println("Tomorrow: " + ft.format(tomorrow));

        String str = String.format("Date/Time: %tc", tomorrow);
        System.out.printf(str);

        ft = new SimpleDateFormat("yyyy-MM-dd");
        String input = args.length == 0 ? "1818-11-11" : args[0];
        Date parsedDate;
        System.out.print(input + " Parses as >>> ");

        try {
            parsedDate = ft.parse(input);
            System.out.println(parsedDate);
        } catch (ParseException ex) {
            System.out.println("Unparseable using " + ft);
        }

        try {
            System.out.println(new Date());
            Thread.sleep(5 * 1000);
            System.out.println(new Date());
        } catch (Exception ex) {
            System.out.println("Got an exception!");
        }

        long end = System.currentTimeMillis();
        long diff = end - start;
        System.out.println("Diff is: " + diff);

    }
}
