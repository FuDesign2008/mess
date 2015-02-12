import java.awt.*;
import java.awt.event.*;
import java.io.*;
import javax.swing.*;

public class ImageViewer {
	public static void main(String[] args) {
		JFrame frame = new ImageViewerFrame();
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setVisible(true);
	}

}

class ImageViewerFrame extends JFrame {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static final int DEFALT_WIDTH = 300;
	private static final int DEFAULT_HEIGHT = 400;
	
	private JLabel label;
	private JFileChooser chooser;

	public ImageViewerFrame () {
		setTitle("Imageviewer");
		setSize(DEFALT_WIDTH, DEFAULT_HEIGHT);
		
		label = new JLabel();
		Container contentPane = getContentPane();
		contentPane.add(label);
		
		chooser = new JFileChooser();
		chooser.setCurrentDirectory(new File("."));
		
		JMenuBar menuBar = new JMenuBar();
		setJMenuBar(menuBar);
		
		JMenu menu = new JMenu("File");
		menuBar.add(menu);
		
		JMenuItem openItem = new JMenuItem("Open");
		menu.add(openItem);
		openItem.addActionListener(new ActionListener() {
			@Override
			public void actionPerformed(ActionEvent event) {
				int result = chooser.showOpenDialog(null);
				
				if (result == JFileChooser.APPROVE_OPTION) {
					String name = chooser.getSelectedFile().getPath();
					label.setIcon(new ImageIcon(name));
				}
			}
			
		});
		
		JMenuItem  exitItem = new JMenuItem("Exit");
		menu.add(exitItem);
		exitItem.addActionListener(new ActionListener(){
			@Override
			public void actionPerformed(ActionEvent event) {
				System.exit(0);
			}
			
		});
		
		
		
		
	}
	
	
	
}