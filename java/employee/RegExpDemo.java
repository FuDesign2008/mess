import java.util.regex.MatchResult;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Created by fuyg on 11/29/15.
 */
public class RegExpDemo {

    public static int maxInt(int a, int b) {
        // return a > b ? a : b;
        return Math.max(a, b);
    }

    public static void main(String args[]) {
        String line = "This order was placed for QT3000! OK ?";
        String patternStr = "(.*)(\\d+)(.*)";

        Pattern pattern = Pattern.compile(patternStr);
        Matcher matcher = pattern.matcher(line);

        if (matcher.find()) {
            System.out.println(matcher.group(0));
            System.out.println(matcher.group(1));
            System.out.println(matcher.group(2));
        } else {
            System.out.println("No match");
        }

        boolean isMatch = Pattern.matches(patternStr, line);
        System.out.println("is match: " + isMatch);

        System.out.println("quote : "  + Pattern.quote(patternStr));

        System.out.println("flags: " + pattern.flags());
        System.out.println("toString: " + pattern.toString());
        System.out.println("original string patter: " + pattern.pattern());

        patternStr = "[o-s]";
        pattern = Pattern.compile(patternStr, Pattern.CASE_INSENSITIVE);
        String[] arr = pattern.split(line);

        for (String x : arr) {
            System.out.print(x + ",");
        }
        System.out.println();

        patternStr = "";
        pattern = Pattern.compile(patternStr);
        arr = pattern.split(line);
        for (String x : arr) {
            System.out.print(x + ",");
        }
        System.out.println();

        char[] chars = line.toCharArray();
        for (char x : chars) {
            System.out.print(x + ",");
        }
        System.out.println();

        patternStr = "([b-z])(a)([b-z])";
        pattern = Pattern.compile(patternStr, Pattern.CASE_INSENSITIVE);
        matcher = pattern.matcher(line);

        while(matcher.find()) {
            System.out.println("----------- Found --------- ");
            MatchResult result = matcher.toMatchResult();
            int count = result.groupCount();
            for (int i = 0; i <= count; i++) {
                System.out.println("group(" + i + "): " + result.group(i));
            }
            System.out.println("start: " + result.start());
            System.out.println("end: " + result.end());
            System.out.println("group(): " + result.group());
        }
        System.out.println();

        String replacedStr = matcher.replaceAll("---");
        System.out.println("replaced string: " + replacedStr);

        replacedStr = matcher.replaceFirst("***");
        System.out.println("replaced string:" + replacedStr);

        StringBuffer buffer = new StringBuffer();
        matcher.reset();
        while(matcher.find()) {
            matcher.appendReplacement(buffer, "=");
        }
        matcher.appendTail(buffer);
        System.out.println("The buffer is: " + buffer.toString());

        patternStr = ".*order";
        pattern = Pattern.compile(patternStr);
        matcher = pattern.matcher(line);
        System.out.println("looking at: " + matcher.lookingAt());
        System.out.println("matches: " + matcher.matches());
        System.out.println("hit end: " + matcher.hitEnd());

        patternStr = ".*order.*";
        pattern = Pattern.compile(patternStr);
        matcher = pattern.matcher(line);
        System.out.println("looking at: " + matcher.lookingAt());
        System.out.println("matches: " + matcher.matches());
        System.out.println("hit end: " + matcher.hitEnd());

        int max = maxInt(10, 20);


    }
}
