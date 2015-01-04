

; naskfunc
; tab=4

[FORMAT "WCOFF"]
[BITS 32]

[FILE "naskfunc.nas"]
	GLOBAL _io_hlt

[SECTION .text]

_io_hlt: ; void io_hlt(void);
	HLT
	RET

_write_mem8: ; void wirte_mem8(int addr, int data)
	MOV    ECX, [ESP+4]
	MOV    AL, [ESP+8]
	MOV    [EXC], AL
	RET
