var customerArray = ["makers", "engineers", "designers", "artists", "researchers", "academics", "teachers", "boat builders", "students", "racing teams"];
var customerArrayIndex = 0;
var targetCustomerString = customerArray[0];
var currentString = targetCustomerString;
var transitionInterval = null;
var letterTransitionArray = [];

var menuOpen = false;

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) {
        for (var i = str.length; i < index; i++) {
            str = str + " ";
        }
    }
    return str.substr(0, index) + chr + str.substr(index + 1);
}

function shuffle(arra1) {
    var ctr = arra1.length,
        temp, index;

    // While there are elements in the array
    while (ctr > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
        ctr--;
        // And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}

$(function() {
    // Remove class that hides the title on small screens
    //$(".noJsHiddenSmallScreens").removeClass("noJsHiddenSmallScreens");
})

// Use cases page: allow clicking anywhere on the tile to go to a use case
$(function() {
    $("#marineUseCase").addClass("highlightSectionJs");
    $("#automotiveUseCase").addClass("highlightSectionJs");
    $("#iotUseCase").addClass("highlightSectionJs");
    $("#roboticsUseCase").addClass("highlightSectionJs");
    $("#aerospaceUseCase").addClass("highlightSectionJs");
    $("#researchUseCase").addClass("highlightSectionJs");
    $("#serverProduct").addClass("highlightSectionJs");
    $("#cliProduct").addClass("highlightSectionJs");
    $("#arduinoSdkProduct").addClass("highlightSectionJs");

    $("#marineUseCase").click(function () {
        window.location.href = "/use-cases/marine/"
    });
    $("#automotiveUseCase").click(function () {
        window.location.href = "/use-cases/automotive/"
    });
    $("#iotUseCase").click(function () {
        window.location.href = "/use-cases/iot/"
    });
    $("#roboticsUseCase").click(function () {
        window.location.href = "/use-cases/robotics/"
    });
    $("#aerospaceUseCase").click(function () {
        window.location.href = "/use-cases/aerospace/"
    });
    $("#researchUseCase").click(function () {
        window.location.href = "/use-cases/research/"
    });
    $("#serverProduct").click(function () {
        window.location.href = "/products/server/"
    });
    $("#cliProduct").click(function () {
        window.location.href = "/products/cli/"
    });
    $("#arduinoSdkProduct").click(function () {
        window.location.href = "/products/arduino-sdk/"
    });
})

// Setup products dropdown menu
// Setup use cases dropdown menu
$(function () {
    $("#productsDropdownJs").removeClass("noJsHidden");
    $("#useCasesDropdownJs").removeClass("noJsHidden");
    $("#productsDropdownJs").click(function () {
        $("#productsDropdownJs").addClass("bp3-active");
        $("#productsDropdownContainer").show();
    });
    $("#useCasesDropdownJs").click(function () {
        $("#useCasesDropdownJs").addClass("bp3-active");
        $("#useCasesDropdownContainer").show();
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest("#productsDropdownJs").length === 0) {
            $("#productsDropdownJs").removeClass("bp3-active");
            $("#productsDropdownContainer").hide();
        }
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest("#useCasesDropdownJs").length === 0) {
            $("#useCasesDropdownJs").removeClass("bp3-active");
            $("#useCasesDropdownContainer").hide();
        }
    });
})

$(function () {
    // Menu setup
    $("#mobileMenuOpenButton").removeClass("mobileMenuOpenButtonNoscript");
    $("#mobileMenuOpenButton").click(function () {
        $("#mobileMenu").removeClass("mobileMenuClosed").addClass("mobileMenuOpen");
        $("#mobileMenuBg").addClass("mobileMenuBgOpen");
        menuOpen = true;
    });
    $("#mobileMenuCloseButton, #mobileMenuBg").click(function () {
        $("#mobileMenu").removeClass("mobileMenuOpen").addClass("mobileMenuClosed");
        $("#mobileMenuBg").removeClass("mobileMenuBgOpen");
        menuOpen = false;
    })


    // Scroll to top button
    $("#backToTop").show();
    $("#backToTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "fast");
    });


    $("#heroCustomers").addClass("heroCustomUnderline");

    /*
    $(window).focus(function () {
        $("#heroCustomers").text(targetCustomerString);
        currentString = targetCustomerString;
    });

    // Displays a cool transition animation between words
    setInterval(function () {
        // Change the target word once every 5 seconds
        targetCustomerString = customerArray[customerArrayIndex]
        customerArrayIndex += 1
        if (customerArrayIndex >= customerArray.length) {
            customerArrayIndex = 0;
        }

        if (transitionInterval == null) {
            // Set up array of letters we need to change
            for (var i = 0; i < targetCustomerString.length; i++) {
                letterTransitionArray.push(i);
            }
            shuffle(letterTransitionArray);

            // Change random letters in the current string until it equals the target string
            transitionInterval = setInterval(function () {
                var targetIndex = letterTransitionArray.pop();
                currentString = setCharAt(currentString.substring(0, targetCustomerString.length), targetIndex, targetCustomerString[targetIndex]);
                $("#heroCustomers").text(currentString);
                if (letterTransitionArray.length == 0) {
                    clearInterval(transitionInterval);
                    transitionInterval = null;
                }
            }, 50);
        }
    }, 2000);
    */
});