
class Chat {

    boolean flag = false;

    public synchronized void question(String msg) {

        if (flag) {
            try {
                wait();
            } catch(Exception e){
                e.printStackTrace();
            }
        }

        System.out.println(msg);
        flag = true;
        notify();

    }

    public synchronized void answer(String msg) {

        if (!flag) {
            try {
                wait();
            } catch(Exception e){
                e.printStackTrace();
            }
        }

        System.out.println(msg);
        flag = false;
        notify();
    }

}


class Question implements Runnable {

    Chat chat;
    String[] questions = {"Hi", "How are you?" , "I am also doing fine!"};

    Question (Chat chat) {
        this.chat = chat;
        new Thread(this, "Question").start();
    }

    public void run () {
        for (String q : questions) {
            chat.question(q);
        }
    }

}


class Answer implements Runnable {

    Chat chat;
    String[] answers = {"Hi", "I am good, what about you?", "Great!"};

    Answer (Chat chat) {
        this.chat = chat;
        new Thread(this, "Answer").start();
    }

    public void run() {
        for (String a : answers) {
            chat.answer(a);
        }
    }

}





public class ChatDemo {

    public static void main(String[] args) {

        Chat chat = new Chat();

        new Question(chat);
        new Answer(chat);
    }
}
