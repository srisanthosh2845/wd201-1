const todoList = require("../todo")
const {all, markAsComplete, add} = todoList();

describe("Test Suite for ToDo", () => {
    beforeAll(() => {
        add({
            title: 'Student Homework',
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA")
        })
    })
    test("Should contain atleast one todo", () => {
        const itemCount = all.length;
        add({
            title: 'Student Homework',
            completed: false,
            dueDate: new Date().toLocaleDateString("en-CA")
        })
        expect(all.length).toBe(itemCount + 1);
    })

    test("Should todo complete", () => {
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    })
})