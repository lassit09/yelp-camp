#Databases

##Intro to Databases
* What is a database?
    * A collection of information/data
    * Has an interface
* SQL vs. NoSQL
    * SQL (Relational)
        * Tabular and flat
        * Nothing can be nested
        * Not flexible - must define tabs ahead of time
        * Adding new tabs later is tedious
    * NoSQL (Non-relational)
        * Flexible - do not have to predefine tabs
        * New instances are added like objects
            * Ex: 
                {
                    name: "Ira",
                    age: 24,
                    city: "Missoula",
                    comments: [
                        {text: "Come visit Montana!"},
                        {text: "Seriously Montana is great!"},
                        {text: "Does anyone care about Montana?"}
                    ],
                    favFood: "Ribeye"
                }