
# [Java - Overview](http://www.tutorialspoint.com/java/java_overview.htm)

## Java Tutorial

1. java
    * J2EE: for Enterprise Applications
    * J2ME: for Mobile Applications
    * Java SE (Standard Edition)
    * Java EE
    * Java ME

1. [Primitive Data Types](http://www.tutorialspoint.com/java/java_basic_datatypes.htm)
    * byte (8 bit)
    * short (16 bit)
    * int (32 bit)
    * long (64 bit)
    * float (32 bit)
    * double (64 bit)
    * boolean (1 bit)
    * char (16 bit Unicode character)

1. Reference Data Types


1. [Variable Types](http://www.tutorialspoint.com/java/java_variable_types.htm)
    * Local variables
        - Local variables are declared in methods, constructors, or blocks.
        - There is no default value for local variables so local variables should be declared and an initial value should be assigned before the first use
        - Access modifiers cannot be used for local variables.
    * Instance variables
        - Instance variables are declared in a class, but outside a method, constructor or any block.
        - Instance variables can be declared in class level before or after use.
        - Access modifiers can be given for instance variables.
        - Instance variables have default values.
        - Instance variables can be accessed directly by calling the variable name inside the class.
    * Class/static variables
        - Class variables also known as static variables are declared with the static keyword in a class, but outside a method, constructor or a block.
        - There would only be one copy of each class variable per class, regardless of how many objects are created from it.


1. [Modifier Types](http://www.tutorialspoint.com/java/java_modifier_types.htm)
    * To use a modifier, you include its keyword in the definition of a class, method, or variable.
    * Access Control Modifiers
        - Visible to the package, the default. No modifiers are needed.
        - Visible to the class only (`private`).
        - Visible to the world (`public`).
        - Visible to the package and all subclasses (`protected`).
    * Non Access Modifiers
        - The `static` modifier for creating class methods and variables
        - The `final` modifier for finalizing the implementations of classes, methods, and variables.
        - The `abstract` modifier for creating abstract classes and methods.
        - The `synchronized` and `volatile` modifiers, which are used for threads.

1. [Basic Operators](http://www.tutorialspoint.com/java/java_basic_operators.htm)

1. [Number Class](http://www.tutorialspoint.com/java/java_numbers.htm) wrapper classes
    * Number
        - Byte
        - Integer
        - Short
        - Long
        - Double
        - Float
