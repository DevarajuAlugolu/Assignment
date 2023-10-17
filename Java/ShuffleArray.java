import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ShuffleArray {
    public static void main(String[] args) {
        // Original array of integers
        Integer[] intArray = {1, 2, 3, 4, 5, 6, 7};

        // Convert the array to a List for shuffling
        List<Integer> list = Arrays.asList(intArray);
        
        // Shuffle the list using Collections.shuffle
        Collections.shuffle(list);

        // Convert the shuffled List back to an array
        Integer[] shuffledArray = list.toArray(new Integer[0]);

        // Print the shuffled array
        System.out.print("Shuffled Array: ");
        for (int value : shuffledArray) {
            System.out.print(value + " ");
        }
    }
}
