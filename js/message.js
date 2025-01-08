const messageStore = {
  greeting: 'Hello, {0} {1}!',
  farewell: 'Goodbye, {0}!',
  simple: 'This is a simple message.',
};

function getMessage(key, replacements = []) {
  // key로 메시지 조회
  const messageTemplate = messageStore[key];
  if (!messageTemplate) {
    return `Message not found for key: ${key}`; // 키에 해당하는 메시지가 없을 경우
  }

  // 치환 문자 배열로 {0}, {1} 등의 대체 문자 치환
  return replacements.reduce((result, replacement, index) => {
    const placeholder = `\\{${index}\\}`;
    return result.replace(new RegExp(placeholder, 'g'), replacement);
  }, messageTemplate);
}

// 사용 예시
console.log(getMessage('greeting', ['John', 'Doe'])); // "Hello, John Doe!"
console.log(getMessage('farewell', ['Alice'])); // "Goodbye, Alice!"
console.log(getMessage('simple')); // "This is a simple message."
console.log(getMessage('nonexistent')); // "Message not found for key: nonexistent"
