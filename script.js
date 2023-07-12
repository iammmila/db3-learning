document.addEventListener("DOMContentLoaded", function () {
  d3.csv("./datta.csv")
    .then(function (data) {
      console.log(data); // Verify if the data is correctly loaded

      d3.select(".d")
        .selectAll("p")
        .data(data)
        .enter()
        .append("p")
        .text(function (d) {
          return d.Year;
        });
    })
    .catch(function (error) {
      // Handle error if the CSV file fails to load
      console.log(error);
    });
});
const firstButton = d3.selectAll(".salam").append("button");

const ourData = ["d1", "d2", "d3"];
const fetchhh = d3.select(".data-fetch").selectAll("li").data(ourData);

d3.select("span").append("div").text("slaamamskcaskjcmakcm");
firstButton.style("color", "red").text("Hello World!");
d3.select(".m").selectAll("li").style("background-color", "red");
d3.select(".spannn").remove();
d3.select(".span2").html("sjdvnksjdv");
d3.select(".span3").attr("class", "error");
d3.select("input").property("checked", true);
d3.select(".reading").classed("read", true);
fetchhh.text(function (d) {
  //   console.log("d: " + d);
  //   console.log("i: " + i);
  //   console.log("this: " + this);

  return d;
});

d3.selectAll("p").style("color", function (d, i) {
  const text = this.innerText;
  if (text.indexOf("Error") >= 0) {
    return "red";
  } else if (text.indexOf("Warning") >= 0) {
    return "yellow";
  }
});

// events in d3:
// ! d3.selection.on(type[, listener[, capture]]);

d3.select(".events")
  .on("mouseover", function () {
    d3.select(this).style("background-color", "orange");
    console.log(event);
    console.log(d3.pointer(event));
  })
  .on("mouseout", function () {
    d3.select(this).style("background-color", "blue");
  });
d3.csv("./data.csv")
  .then(function (data) {
    console.log(data); // Verify if the data is correctly loaded

    d3.select("body")
      .selectAll("p") // Select all existing paragraphs
      .data(data)
      .enter()
      .append("p")
      .text(function (d) {
        return d.Year + ": " + d.Amount;
      });
  })
  .catch(function (error) {
    // Handle error if the CSV file fails to load
    console.log(error);
  });

const datttt = [1, 2, 3];

d3.select("ul")
  .selectAll("li")
  .data(datttt)
  .enter()
  .append("li")
  .text(function (d) {
    return d;
  });
