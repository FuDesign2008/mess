

typedef struct Node {
    int value;
    Node* left;
    Node* right;
}

bool contains(Node* a, Node* b) {
    if (a == null &&  b == null) {
        return true;
    }
    if (a == null && b != null) {
        return false;
    }
    if (a != null && b == null) {
        return false;
    }

    if (a->value == b->value) {
        return contains(a->left, b->left) && contains(a->right, b->right);
    } else {
        return contains(a->left, b) || contains(b->right, b);
    }
}

void main ()
{
    Node* aRoot =


}


