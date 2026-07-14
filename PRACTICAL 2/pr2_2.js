const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function menu() {

    r1.question("1.Add Task\n2.View Tasks\n3.Exit\nEnter your choice: ", function(choice) {

        if (choice == 1) {

            r1.question("Enter Task: ", function(task) {

                tasks.push(task);
                console.log("Task Added Successfully!");

                menu();
            });

        }

        else if (choice == 2) {

            console.log("\nTask List:");

            for (let i = 0; i < tasks.length; i++) {
                console.log((i + 1) + ". " + tasks[i]);
            }

            menu();

        }

        else if (choice == 3) {

            console.log("Thank you for using the Task Manager!");
            r1.close();

        }

        else {

            console.log("Invalid Choice!");
            menu();

        }

    });

}

menu();