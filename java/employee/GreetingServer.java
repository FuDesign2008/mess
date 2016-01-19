import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.io.DataInputStream;
import java.io.DataOutputStream;

/**
 * Created by fuyg on 12/3/15.
 */
public class GreetingServer extends Thread{

    private ServerSocket serverSocket;

    public GreetingServer(int port) throws IOException {
        serverSocket = new ServerSocket(port);
        serverSocket.setSoTimeout(10000);
    }

    public void run () {
        while (true) {
            try {
                System.out.println("Waiting for client on port " +
                        serverSocket.getLocalPort() + " ...");
                Socket server = serverSocket.accept();
                System.out.println("Just connected to " +
                        server.getRemoteSocketAddress());
                DataInputStream in =
                    new DataInputStream(server.getInputStream());
                System.out.println(in.readUTF());
                DataOutputStream out =
                    new DataOutputStream(server.getOutputStream());
                out.writeUTF("Thank you for connecting to " +
                        server.getLocalSocketAddress() + "\n Goodby!");
                server.close();
            } catch (SocketTimeoutException ex) {
                System.out.println("Socket timed out!");
                break;
            } catch (IOException ioEx) {
                ioEx.printStackTrace();
                break;
            }
        }
    }

    public static void main (String[] args) {
        int port = Integer.parseInt(args[0]);

        try {
            Thread thread = new GreetingServer(port);
            thread.start();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }


}
