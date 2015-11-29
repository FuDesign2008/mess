import java.util.Calendar;
import java.util.GregorianCalendar;

/**
 * Created by fuyg on 11/28/15.
 */
public class CalendarDemo {

    public static void main(String args[]) {
        String[] months= {
            "Jan", "Feb", "Mar", "Apr",
            "May", "Jun", "Jul", "Aug",
            "Sep", "Oct", "Nov", "Dec"
        };


        GregorianCalendar calendar = new GregorianCalendar();
        System.out.println(
            "Date: " +
            months[calendar.get(Calendar.MONTH)] + " " +
            calendar.get(Calendar.DATE) + " " +
            calendar.get(Calendar.YEAR) + " " +
            "Time: " + calendar.get(Calendar.HOUR) + ":" +
            calendar.get(Calendar.MINUTE) + ":" +
            calendar.get(Calendar.SECOND)
        );

        int year = calendar.get(Calendar.YEAR);
        System.out.println(year + " is leap year: " + calendar.isLeapYear(year));

    }
}
