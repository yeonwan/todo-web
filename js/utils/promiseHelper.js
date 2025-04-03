// 1. Geolocation API - 현재 위치 가져오기
export function getLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }
  
  // 2. SetTimeout - 지정한 시간(ms)만큼 대기
  export function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // 3. FileReader - 파일을 텍스트로 읽기
  export function readFileAsText(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }
  
  // 4. Request Animation Frame - 다음 애니메이션 프레임까지 대기
  export function nextFrame() {
    return new Promise(resolve => requestAnimationFrame(resolve));
  }
  
  // 5. MediaDevices.getUserMedia - 카메라 또는 마이크 접근
  export function getUserMedia(constraints) {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices.getUserMedia(constraints)
        .then(resolve)
        .catch(reject);
    });
  }
  
  // 6. MutationObserver - DOM 변화를 감지
  export function observeMutation(target, config) {
    return new Promise((resolve, reject) => {
      const observer = new MutationObserver((mutations) => {
        resolve(mutations);
      });
      observer.observe(target, config);
    });
  }
  
  // 7. IntersectionObserver - 요소가 화면에 보이는지 확인
  export function observeIntersection(target, options) {
    return new Promise((resolve, reject) => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          resolve(entries);
        }
      }, options);
      observer.observe(target);
    });
  }
  
  // 8. Notification.requestPermission - 알림 허용 요청
  export function requestNotificationPermission() {
    return new Promise((resolve, reject) => {
      Notification.requestPermission()
        .then(resolve)
        .catch(reject);
    });
  }
  
  // 9. WebSocket - WebSocket 연결 (Promise로 감쌈)
  export function createWebSocket(url) {
    return new Promise((resolve, reject) => {
      const socket = new WebSocket(url);
      socket.onopen = () => resolve(socket);
      socket.onerror = (error) => reject(error);
    });
  }
  
  