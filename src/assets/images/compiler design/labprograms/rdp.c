#include <stdio.h>
#include <string.h>
#include <ctype.h>

char input[100];  // Increased size for larger input
int i = 0, error = 0;

void E();
void T();
void Eprime();
void Tprime();
void F();

int main() {
    printf("Enter an arithmetic expression:\n");
    if (fgets(input, sizeof(input), stdin) == NULL) {
        printf("Error reading input.\n");
        return 1;
    }
    input[strcspn(input, "\n")] = '\0';  // Remove newline character from input

    E();
    if (strlen(input) == i && error == 0)
        printf("\nAccepted..!!!");
    else
        printf("\nRejected..!!!");

    return 0;
}

void E() {
    T();
    Eprime();
}

void Eprime() {
    if (input[i] == '+') {
        i++;
        T();
        Eprime();
    }
}

void T() {
    F();
    Tprime();
}

void Tprime() {
    if (input[i] == '*') {
        i++;
        F();
        Tprime();
    }
}

void F() {
    if (input[i] == '(') {
        i++;
        E();
        if (input[i] == ')') {
            i++;
        } else {
            error = 1;
        }
    } else if (isalpha(input[i])) {
        i++;
        while (isalnum(input[i]) || input[i] == '_') {
            i++;
        }
    } else {
        error = 1;
    }
}
