1. At line 12, the program will print 3 because it was defined in the for loop and it can be accessed anywhere inside the function it is defined in.
2. Line 13 prints 150 because the for loop will be on its last interation i = 2, and therefore prices[i] multiplied by 1 - discount (0.5) will equal 150.
3. Line 14 prints 150 because it multiplies and divides the discountedPrice which is the discountedPrice of the last item on the prices array.
4. The function returns an array of [50, 100, 150] because it appends each finalPrice value into the list and returns it at the end.
5. Line 12 produces a ReferenceError because i is being accessed outside of the block it was defined in.
6. Line 13 prduces a ReferenceError because discountedPrice was defined inside the for loop block and it is trying to be accessed outside of it.
7. finalPrice prints 150 because it is being accessed inside the same block that the variable was defined in.
8. The function returns [50, 100, 150] because finalPrice is being pushed into discounted which is returned by the function. The discounted variable is declared in the outer shell of the block, and therefore finalPrice can be pushed into the array inside the for loop, and then returned outside of it.
9. At line 11, a ReferenceError is produced because i is trying to be accessed outside of where it was defined.
10. Line 12 princes 3 because it contains the length of prices and was not changed throughout the block of code.
11. The program returns [50, 100, 150] because the const array is not being reassigned, but items are pushed in and manipulated to create the list that is returned.
12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. A. '32' because integers map to their exact string representation
    B. 1 because 3 gets convered into an integer
    C. 3 because comparisons convert null to 0
    D. '3null' because null gets converted into a string
    E. 4 because true gets turned into 1
    F. 0 because false is 0 and null is 0
    G. '3undefined' because undefined gets turned into a string
    H. NaN because a string is trying to subtract an undefined
14. A. true because 2 becomes a number
    B. true because the first char '2' is greater than '1'
    C. true because '2' becomes a number
    D. false due to strict equality, they are a different type
    E. false because true is 1
    F. true because Boolean(2) is true (function used to find out if expression or variable is true)
15. The == operator does type conversion while === compares values and the data types of the operands.
17. The newArr is [2, 4, 6]. This is because inside modifyArray, each item inside array is passed into the doSomething function which multiplies each element by 2. The number is then appended into newArr and returned.
19. The program prints the numbers 1, 4, 3, 2 in that specific order.
20. 
