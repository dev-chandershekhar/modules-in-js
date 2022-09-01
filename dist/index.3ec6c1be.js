"strict mode";
const budget = Object.freeze([
    {
        value: 250,
        description: "Sold old TV \uD83D\uDCFA",
        user: "jonas"
    },
    {
        value: -45,
        description: "Groceries \uD83E\uDD51",
        user: "jonas"
    },
    {
        value: 3500,
        description: "Monthly salary \uD83D\uDC69‍\uD83D\uDCBB",
        user: "jonas"
    },
    {
        value: 300,
        description: "Freelancing \uD83D\uDC69‍\uD83D\uDCBB",
        user: "jonas"
    },
    {
        value: -1100,
        description: "New iPhone \uD83D\uDCF1",
        user: "jonas"
    },
    {
        value: -20,
        description: "Candy \uD83C\uDF6D",
        user: "matilda"
    },
    {
        value: -125,
        description: "Toys \uD83D\uDE82",
        user: "matilda"
    },
    {
        value: -1800,
        description: "New Laptop \uD83D\uDCBB",
        user: "jonas"
    }, 
]);
const spendingLimits = Object.freeze({
    jonas: 1500,
    matilda: 100
});
const getLimit = (limits, user)=>limits?.[user] ?? 0;
// Pure Function: D
const addExpense = function(state, limits, value, description, user = "jonas") {
    const cleanUser = user.toLowerCase();
    return value <= getLimit(limits, cleanUser) ? [
        ...state,
        {
            value: -value,
            description,
            cleanUser
        }
    ] : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza \uD83C\uDF55");
const newBudget2 = addExpense(newBudget1, spendingLimits, 100, "Going to movies \uD83C\uDF7F", "Matilda");
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");
const checkExpenses2 = function(state, limits) {
    return state.map((entry)=>{
        return entry.value < -getLimit(limits, entry.user) ? {
            ...entry,
            flag: "limit"
        } : entry;
    });
};
const checkExpenses = (state, limits)=>state.map((entry)=>entry.value < -getLimit(limits, entry.user) ? {
            ...entry,
            flag: "limit"
        } : entry);
const finalBudget = checkExpenses(newBudget3, spendingLimits);
const logBigExpenses = function(bigLimit) {
    let output = "";
    for (const entry of budget)output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : "";
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};
logBigExpenses(10);
console.log(finalBudget);

//# sourceMappingURL=index.3ec6c1be.js.map
