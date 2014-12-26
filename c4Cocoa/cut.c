#include <stdio.h>
#include <time.h>

#define COUNT 5

int main () {

    int stackArray[COUNT];
    int i;
    for (i = 0; i < COUNT; i++) {
        stackArray[i] = i;
    }

    for (i = 0; i < COUNT; i++) {
        printf("Value %i: %i\n", i, stackArray[i]);
    }

}
