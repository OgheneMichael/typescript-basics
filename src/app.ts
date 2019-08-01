const pizzas = [{ name: "Pepperoni", toppings: ["Pepperoni"] }];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza = {
	name: "Blazing Inferno",
	getName: () => pizza.name
};

console.log(pizza.getName());
