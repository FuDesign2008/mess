/**
 * 有序数组， 从小到大排列
 *
 */
void mergeArray(int a[], int m, int b[], int n, int c[]) {
    int i, j, k;
    i = j = k = 0;

    while (i < m && j < n) {
        if (a[i] < b[j]) {
            c[k] = a[i];
            k++;
            i++;
        } else {
            c[k] = b[j];
            k++;
            j++;
        }

    }

    while (i < m) {
        c[k] = a[i];
        k++;
        i++;
    }

    while (j < n) {
        c[k] = a[j];
        k++;
        j++;
    }
}
