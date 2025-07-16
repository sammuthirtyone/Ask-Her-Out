body {
  margin: 0;
  background: #fff0f5;
  font-family: 'Pacifico', cursive;
  color: #ff2d55;
  overflow-x: hidden;
}

.page {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.show {
  display: flex !important;
}

h1, h2, p {
  margin: 10px;
}

img {
  width: 200px;
  border-radius: 15px;
  margin-top: 20px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

button {
  background: #ff69b4;
  color: white;
  border: none;
  padding: 12px 25px;
  margin-top: 20px;
  font-size: 1.1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #ff1493;
}

.float-msg {
  animation: float 4s ease-in-out infinite;
  font-size: 1.2rem;
}

@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

/* Floating Hearts */
#heart-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
}

.heart {
  position: absolute;
  color: pink;
  font-size: 20px;
  animation: fly 10s linear infinite;
  opacity: 0.7;
}

@keyframes fly {
  0% {
    transform: translateY(100vh) scale(0.5);
  }
  100% {
    transform: translateY(-10vh) scale(1.5);
  }
}
