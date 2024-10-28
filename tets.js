// function createMagicPotion (potions, target) {
// 	return potions.reduce((acc, potion, i) => {
// 		for (const y in potions.slice(i + 1)) {
// 			if ((potion + potions[+y + i + 1]) === target)
// 				return [...acc, [i, +y + i + 1]]
// 		}
// 		return acc
// 	}, []).sort((a, b) => a[1] - b[1])[0] ?? undefined
// }

function createMagicPotion (potions, target) {
	const valids = []

	for (const i in potions) {
		console.log(i);

		for (const y in potions.slice(i + 1)) {
			if ((potions[i] + potions[+y + +i + 1]) === target)
				valids.push([i, +y + +i + 1])
		}
	}

	console.log(valids);

	return valids.sort((a, b) => a[1] - b[1])[0] ?? undefined
}


const potions = [4, 5, 6, 2]
const goal = 8

createMagicPotion(potions, goal) // [2, 3]

const potions2 = [1, 2, 3, 4]
const goal2 = 9

// createMagicPotion(potions2, goal2) // undefined

const potions3 = [1, 2, 3, 4]
const goal3 = 5

// createMagicPotion(potions3, goal3) // [1, 2]
// también podría ser [0, 3] pero hay una combinación antes