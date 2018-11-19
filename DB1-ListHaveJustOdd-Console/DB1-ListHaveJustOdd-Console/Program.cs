using System;
using System.Collections.Generic;
using System.Linq;

namespace DB1_ListHaveJustOdd_Console
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("The Array { 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 } have just Odd values?");
            Console.WriteLine(!new List<int>() { 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 }.Any(x => x % 2 == 0));
            Console.ReadLine();
        }
    }
}
