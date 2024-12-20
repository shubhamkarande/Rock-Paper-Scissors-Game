const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const computerResult = document.querySelector(".computer_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

// Loop through each option images
optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        userResult.src = computerResult.src = "images/rock.png";
        result.textContent = "Wait...";

        // Loop through the images again
        optionImages.forEach((image2, index2) => {
            // If the current index doesn't match the clicked index
            // remove the "active" class from the other option image
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        // Set a timeout to delay the result calculation
        let time = setTimeout(() => {
            gameContainer.classList.remove("start");

            // Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;
            // Set the user image to the clicked option image
            userResult.src = imageSrc;

            // Get a randome number between 0 and 2
            let randomNumber = Math.floor(Math.random() * 3);
            // Create an array of computer image options
            let computerImages = [
                "images/rock.png",
                "images/paper.png",
                "images/scissors.png",
            ];

            // set the computer image to a random option from the array
            computerResult.src = computerImages[randomNumber];

            // Assign a letter value to the computer option (R for rock, P for Paper and S for Scissors)
            let computerValue = ["R", "P", "S"][randomNumber];
            // Assign a letter value to the clicked option (based on the index)
            let userValue = ["R", "P", "S"][index];

            // All possible outcomes in an array
            let outcomes = {
                RR: "Draw",
                RP: "Computer",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Computer",
                SS: "Draw",
                SR: "Computer",
                SP: "User",
            };

            // Look up the outcome value based on the user and computer options
            let outcomeValue = outcomes[userValue + computerValue];

            // Display the results
            result.textContent =
                userValue === computerValue
                    ? "Match Drawn"
                    : `${outcomeValue} won!!`;
        }, 2500);
    });
});