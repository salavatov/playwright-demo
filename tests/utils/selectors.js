// 1. Static selectors (constants)
const usernameInput = 'input[id="username"]';
const passwordInput = 'input[id="password"]';
const loginButton = 'button[type="submit"]';

// For post-login page
const webApplicationButton = 'button:has-text("Web Application")';
const logoutText = 'text=Logout';

// 2. Dynamic selector functions
function projectButton(projectName) {
  // Must wrap in backticks if we want to inject a variable
  return `button:has-text("${projectName}")`;
}

function columnContainer(columnName) {
  return `div:has(h2:has-text("${columnName}"))`;
}

function taskCard(columnName, taskName) {
  // We combine the column container with .bg-white that has the task’s text
  return `${columnContainer(columnName)} div.bg-white:has-text("${taskName}")`;
}

function tagSpan(tag) {
  // Classes from your snippet + the text
  return `span.px-2.py-1.rounded-full.text-xs.font-medium:has-text("${tag}")`;
}

// 3. Export everything in one go
module.exports = {
  // Static
  usernameInput,
  passwordInput,
  loginButton,
  webApplicationButton,
  logoutText,

  // Dynamic
  projectButton,
  columnContainer,
  taskCard,
  tagSpan,
};

