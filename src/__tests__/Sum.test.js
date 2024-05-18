import {sum} from "../Components/sum"

test("Calculate the sum of two numbers",() => {
    const result = sum(3,5)
    expect(result).toBe(8);
});
