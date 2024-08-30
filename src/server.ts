import app from "./app";

const PORT = 3000;

const server = app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

export default server;