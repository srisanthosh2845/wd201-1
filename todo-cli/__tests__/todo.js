const todoList = require("../todo");
const { all, markAsComplete, add } = todoList();

describe("Todo New Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() - 1))
        .toISOString()
        .slice(0, 10),
    });
    add({
      title: "Test Today",
      completed: false,
      dueDate: new Date().toISOString().slice(0, 10),
    });
    add({
      title: "Test Due Later",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .slice(0, 10),
    });
  });
  test("Should add new todo", () => {
    const todoItemsCounts = all.length;
    add([
      {
        title: "Test Over Due",
        completed: false,
        dueDate: new Date(new Date().setDate(new Date().getDate() - 1))
          .toISOString()
          .slice(0, 10),
      },
    ]);
    expect(all.length).toBe(todoItemsCounts + 1);
  });

  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("Should check the retreive of Overdue", () => {
    expect(all[0].dueDate).toBe(
      new Date(new Date().setDate(new Date().getDate() - 1))
        .toISOString()
        .slice(0, 10)
    );
  });

  test("Should check the retreive of Duetoday", () => {
    expect(all[1].dueDate).toBe(new Date().toISOString().slice(0, 10));
  });

  test("Should check the retreive of DueLater", () => {
    expect(all[2].dueDate).toBe(
      new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .slice(0, 10)
    );
  });
});
