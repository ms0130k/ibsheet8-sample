const ReactiveMap = (function () {
  class ReactiveMap {
    constructor({ onAdd, onRemove }) {
      if (typeof onAdd !== 'function') {
        throw new TypeError('onAdd must be a function');
      }
      if (typeof onRemove !== 'function') {
        throw new TypeError('onRemove must be a function');
      }
      this.map = new Map();
      this.onAdd = onAdd;
      this.onRemove = onRemove;
    }

    put(key, value) {
      const isNew = !this.map.has(key);
      this.map.set(key, value);
      if (isNew) {
        this.onAdd(key, value); // 새로운 항목 추가 시 콜백 호출
      }
    }

    remove(key) {
      if (this.map.has(key)) {
        const removedValue = this.map.get(key);
        this.map.delete(key);
        this.onRemove(key, removedValue); // 항목 삭제 시 콜백 호출
      }
    }

    removeAll() {
      const entries = Array.from(this.map.entries());
      this.map.clear();
      entries.forEach(([key, value]) => {
        this.onRemove(key, value); // 모든 항목 삭제 시 onRemove 호출
      });
    }

    get(key) {
      return this.map.get(key);
    }

    getAll() {
      return Array.from(this.map.entries());
    }
  }

  return ReactiveMap;
})();

// 콜백 함수 정의
function handleAdd(key, value) {
  const container = document.getElementById('userButtons');

  // 버튼 생성
  const button = document.createElement('button');
  button.id = `user-${key}`;
  button.textContent = value.name;

  // 버튼 클릭 시 해당 사용자 삭제
  button.addEventListener('click', function () {
    userMap.remove(key); // ReactiveMap에서 해당 사용자 삭제
  });

  container.appendChild(button);
}

function handleRemove(key) {
  const button = document.getElementById(`user-${key}`);
  if (button) button.remove();
}

// ReactiveMap 인스턴스 생성
const userMap = new ReactiveMap({
  onAdd: handleAdd,
  onRemove: handleRemove,
});

// 사용자 추가
userMap.put(1, { name: 'Alice' });
userMap.put(2, { name: 'Bob' });
