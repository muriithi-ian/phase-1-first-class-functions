const spy = () => {
  return "I spy on you";
};

function receivesAFunction(spy) {
  spy();
}

function returnsANamedFunction() {
  return function hello() {
    return "Hello";
  };
}

function returnsAnAnonymousFunction() {
  return function () {
    return "Hello";
  };
}
