public class Practice {
    static int arr[] = {2020, 2022};
       
     static int largest()
     {
         int i;
           
         int max = arr[0];

         for (i = 1; i < arr.length; i++)
             if (arr[i] > max)
                 max = arr[i];
        
         return max;
     }
      public static void
    firstAndLastCharacter(String str)
    {
        
        char[] charArray = str.toCharArray();

        char first = charArray[0];


        System.out.println("First letter is: " + first);
        
    }

     public static void main(String[] args) 
     {
         System.out.println("Largest number between the two is" + largest());
         String str = "John Caluya"; firstAndLastCharacter(str);
        }
 }
