import random from "random";

const tagsCombos = ['', 'Vegan', 'Fat-Free', 'Vegan Fat-Free']

export const getFoodItems = () => {
    let foodItems = [];
    for(let i = 1; i <= 30; i++) {
        foodItems.push({
            id: i,
            name: `Food ${i}`,
            description: `Food ${i} Description`,
            cuisine: `Cuisine ${random.int((min = 1), (max=10))}`,
            tags: tagsCombos[random.int((min = 0), (max = tagsCombos.length - 1))]
        });
    }

    return foodItems;

}