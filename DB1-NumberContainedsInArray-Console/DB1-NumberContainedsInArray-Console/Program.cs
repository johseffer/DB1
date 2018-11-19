using System;
using System.Linq;
using System.Collections.Generic;

namespace DB1_NumberContainedsInArray_Console
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("What numbers of the array { 1,3, 7, 29, 42, 98, 234, 93 } are contained in the array { 4, 6, 93, 7, 55, 32, 3 }?");
            var firstList = new List<int>() { 1, 3, 7, 29, 42, 98, 234, 93 };
            var secondList = new List<int>() { 4, 6, 93, 7, 55, 32, 3 };
            Console.WriteLine($"Number of first array contained in the second array: {string.Join(",", firstList.Where(x => secondList.Contains(x)))}");
            Console.ReadLine();
        }
    }
}
