import java.util.Scanner;

public class PangramChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String input = scanner.nextLine();
        scanner.close();

        boolean isPangram = checkIfPangram(input);

        if (isPangram) {
            System.out.println("The input is a pangram.");
        } else {
            System.out.println("The input is not a pangram.");
        }
    }

    public static boolean checkIfPangram(String input) {
        input = input.toLowerCase();

        // Create an array to track the occurrence of each letter in the alphabet
        boolean[] alphabetCheck = new boolean[26];

        // Iterate through the input and mark the corresponding index in the array
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                int index = c - 'a';
                alphabetCheck[index] = true;
            }
        }

        // Check if all elements in the array are true (indicating all letters are present)
        for (boolean present : alphabetCheck) {
            if (!present) {
                return false;
            }
        }

        return true;
    }
}
