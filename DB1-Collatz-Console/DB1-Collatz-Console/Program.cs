using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;

namespace DB1_Collatz_Console
{
    class Program
    {
        const string logPath = @"C:\Temp\DB1_Collatz_Console";
        static string fileName = @"log_" + DateTime.Now.ToString("dd_MM_yyyy_hh_ss") + ".csv";
        static string filePath = Path.Combine(logPath, fileName);
        static List<List<int>> allSequences = new List<List<int>>();

        static bool logEvents = false;

        static void Main(string[] args)
        {
            Console.WriteLine($"Program to calculate the number of made the greatest sequence with Collatz logic");
            Console.WriteLine($"Do you want to save the sequences in log? Y or N (the processing time can be greatly increased.)");
            var response = Console.ReadLine();
            while (!response.ToUpper().Equals("Y") && !response.ToUpper().Equals("N"))
            {
                Console.WriteLine($"Value not accepted!");
                Console.WriteLine($"Do you want to save the sequences in log? (y/n)");

                response = Console.ReadLine();
            }

            logEvents = response.ToUpper().Equals("Y") ? true : false;

            Console.WriteLine($"Starting...");
            Console.WriteLine($"Started on: {DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")}");
            if (logEvents)
                Console.WriteLine($"The sequences can be viewed in {filePath}");

            Console.WriteLine(String.Empty);
            var intList = Enumerable.Range(1, 1000000).ToList().AsQueryable();

            Console.WriteLine($"Processing...");
            var numberWithMaxSequence = 1;
            var numberWithMaxSequenceCount = 1;
            using (var progress = new ProgressBar())
            {
                for (int i = 0; i <= 1000000; i++)
                {
                    var currentNumberSequenceCount = GetCollatzSequenceCount(i);
                    numberWithMaxSequence = currentNumberSequenceCount > numberWithMaxSequenceCount ? i : numberWithMaxSequence;
                    numberWithMaxSequenceCount = currentNumberSequenceCount > numberWithMaxSequenceCount ? currentNumberSequenceCount : numberWithMaxSequenceCount;

                    progress.Report((double)i / 1000000);
                    progress.numberWithMoreSequences = numberWithMaxSequence;
                    progress.numberWithMoreSequencesCount = numberWithMaxSequenceCount;
                }
            }
            Console.WriteLine(String.Empty);
            Console.WriteLine("Finishing...");
            Console.WriteLine($"Finished on: {DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss")}");
            Console.WriteLine(String.Empty);
            Console.WriteLine("1.000.000 of 1.000.000 numbers Processed.");
            Console.WriteLine($"The number of made the greatest sequence is: {numberWithMaxSequence} with a sequence of {numberWithMaxSequenceCount} numbers.");
            Console.WriteLine($"The sequences can be viewed in {filePath}");

            Console.ReadLine();
        }

        static void WriteLog(string message)
        {
            if (!Directory.Exists(logPath))
                Directory.CreateDirectory(logPath);

            if (!File.Exists(filePath))
            {
                File.Create(filePath).Close();
                File.WriteAllText(filePath, "NUMBER;COUNT;SEQUENCE");
            }

            string logText = File.ReadAllText(filePath);
            File.WriteAllText(filePath, logText + "\r\n" + message);
        }


        private static int GetCollatzSequenceCount(int number)
        {
            int currentNumber = number;
            List<int> sequences = new List<int>();
            string sequence = number.ToString();

            sequences.Add(currentNumber);

            while (currentNumber > 1)
            {
                if (currentNumber % 2 == 0)
                    currentNumber = currentNumber / 2;
                else
                    currentNumber = 3 * currentNumber + 1;

                sequence += $",{currentNumber}";
                sequences.Add(currentNumber);

                if (currentNumber == 1)
                    break;
            }

            allSequences.Add(sequences);

            if (logEvents)
                WriteLog($"{number};{sequences.Count};{sequence}");

            return sequences.Count;
        }
    }
}
