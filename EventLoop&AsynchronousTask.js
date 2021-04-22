document.getElementById("app").innerHTML = `
  <div>
    Что будет в консоле и в какой последовательности?
  </div>
`;

window.addEventListener("DOMContentLoaded", () => {
  const square1 = document.querySelector(".square.square-1");

  const start = function start() {
    square1.addEventListener("click", (e) => {
      console.log(1);
      foo1();
      foo4();
      foo2();
      foo3();
      setTimeout(() => {
        console.log("FINISH?");
      }, 1000);
    });
  };
  start();

  // Console -
  // Q Macro -
  // Q Micro -

  function foo1() {
    const promise1 = Promise.resolve().then(() => {
      console.log(2);
      return 3;
    });

    const promise2 = Promise.resolve().then(() => {
      setTimeout(() => {
        for (let i = 5; i <= 7; i++) {
          console.log(i);
        }
      }, 2000);
      return 4;
    });
    setTimeout(() => {
      promise1.then((d) => console.log(d));
      promise2.then((d) => console.log(d));

      for (let i = 7; i <= 8; i++) {
        console.log(i);
      }
    }, 1000);
  }

  const foo2 = function () {
    console.log(0);
  };

  const foo3 = function () {
    for (let i = 97; i <= 100; i++) {
      console.log(i);
    }
  };

  function foo4() {
    setTimeout(() => {
      for (let i = 68; i < 71; i++) {
        console.log(i);
      }
    }, 0);
  }
});
