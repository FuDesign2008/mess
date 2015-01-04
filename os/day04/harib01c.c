
void HariMain(void) 
{
	int i;
	/*char *p;*/
	p = (char *) 0xa0000;

	for (i = 0xa0000; i <= 0xaffff; i++) {
		/*p = i;*/
		/**p = i & 0x0f;*/

		*(p + i) = i & 0x0f;

		// or
		// p[i] = i & 0x0f;

	}


	for (; ;) {
		io_hlt();
	}
}

