
package fund;

import fund.ImageViewerFrame;
import java.awt.EventQueue;
import java.awt.event.*;
import javax.swing.*;

public class ImageViewer {

    public static void main (String[] args) {

        Runnable task = new Runnable() {
            public void run() {
                ImageViewerFrame frame = new ImageViewerFrame();

                frame.setTitle("ImageViewer");
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.setVisible(true);
            }

        };

        EventQueue.invokeLater(task);

    }

}
