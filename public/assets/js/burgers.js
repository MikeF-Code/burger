// jQuery
$(function() {
    $(".change-eaten").on("click", function(event) {
      let id = $(this).data("id");
    //   let eaten = $(this).data("eaten");
  
    //   let eatenState = {
    //     eaten: true
    //   };
      let eaten = true;
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: eaten
      }).then(
        function() {
          console.log("changed eaten to", eaten);
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        let newBurger = {
          name: $("#addBurger").val().trim(),
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("added burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    });