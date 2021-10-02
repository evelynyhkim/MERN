var twoSum = function (nums, target) {
	//nums.sort()
	console.log(nums)

	let i = 0,
		j = nums.length - 1

	do {
		let sum = nums[i] + nums[j]
		console.log("hey" + sum)
		console.log("i" + i)
		console.log("j" + j)
		console.log("numsj" + nums[j])
		console.log("numsi" + nums[i])
		if (sum === target) {
			console.log("success - " + i + ", " + j)
			return [i, j]
		} else {
			console.log("failed")
			if (sum > target) {
				j--
				console.log("over target" + sum)
			}
			if (sum < target) {
				i++
				console.log("under target" + sum)
			}
		}
	} while (i < j)

	console.log("how did I get here")
}

let nums = [-1, 2, 5, 7, 11, 15]

var twoSum = function (nums, target) {
	let map = {}
	for (let i = 0; i < nums.length; i++) {
		let n = target - nums[i]
		let find = map[n]
		if (map[n] !== undefined) {
			return [find, i]
		}
		map[nums[i]] = i
	}
}

twoSum(nums, 14)
