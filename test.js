const project = require('./project');

test('can create a basic greeting', () => {
  expect(project.getGreeting('Sam')).toBe("Hi Sam");
});

test('Add two numbers together', () => {
  expect(project.addition(10, 24)).toBe(34)
});