const express = require("express");
const sequelize = require("./database"); // Configuração do banco de dados
const app = express();

app.use(express.json()); // Para parsear requisições com JSON

// Importar rotas
const profileRoutes = require("./routes/profileRoutes");
const contractRoutes = require("./routes/contractRoutes");
const jobRoutes = require("./routes/jobsRoutes");
const depositRoutes = require("./routes/depositRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

// Usar rotas
app.use("/profiles", profileRoutes);
app.use("/contracts", contractRoutes);
app.use("/jobs", jobRoutes);
app.use("/deposits", depositRoutes);
app.use("/payments", paymentRoutes);

// Sincronizar o banco de dados
sequelize.sync({ force: false }).then(() => {
  console.log("Banco de dados sincronizado");
});

// Iniciar o servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
